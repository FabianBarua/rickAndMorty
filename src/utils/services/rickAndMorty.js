const optionsApi = (searchValue, page) => `?${searchValue ? `&name=${searchValue}` : ''}` + `${page ? `&page=${page}` : ''}`

const getCharacters = async (searchValue, page = 1) => {
    try {

        const API_URL = `https://rickandmortyapi.com/api/character/${optionsApi(searchValue, page)}`;

        const response = await fetch(API_URL);
        const data = await response.json();


        if (response.ok) {
            const charactersMocked = data.results.map((character) => (MockCharacter(character)));

            const characters = {
                info: data.info,
                characters: charactersMocked,
            }

            return characters;
        } else {
            throw new Error('Error fetching characters');
        }
    } catch (error) {
        return {
            info: {
                error: true,
                message: 'No se encontraron personajes.',
                count: 0,
            }, characters: []
        };
    }
};

const getEpisodes = async (searchValue, page = 1) => {
    try {
        const API_URL = `https://rickandmortyapi.com/api/episode/${optionsApi(searchValue, page)}`;
        const response = await fetch(API_URL);
        const data = await response.json();

        if (response.ok) {
            const episodesMocked = data.results.map((episode) => ({
                id: episode.id,
                name: episode.name,
                episode: episode.episode,
                air_date: episode.air_date,
            }));

            const episodes = {
                info: data.info,
                episodes: episodesMocked,
            };

            return episodes;
        } else {
            throw new Error('Error fetching episodes');
        }
    } catch (error) {
        return {
            info: {
                error: true,
                message: 'No se encontraron episodios.',
                count: 0,
            },
            episodes: [],
        };
    }
};


const getLocations = async (searchValue, page = 1) => {

    try {
        const API_URL = `https://rickandmortyapi.com/api/location/${optionsApi(searchValue, page)}`;
        const response = await fetch(API_URL);
        const data = await response.json();

        if (response.ok) {
            const locationsMocked = data.results.map((location) => ({
                id: location.id,
                name: location.name,
                type: location.type,
                dimension: location.dimension,
            }));

            const locations = {
                info: data.info,
                locations: locationsMocked,
            }

            return locations;
        } else {
            throw new Error('Error fetching locations');
        }
    } catch (error) {
        return {
            info: {
                error: true,
                message: 'No se encontraron lugares.',
                count: 0,
            }, locations: []
        };
    }

}

export const search = async ({ searchValue, searchCharacters, searchEpisodes, searchLocations, searchAll, page = 1 }) => {
    let results = {
        characters: {},
        episodes: {},
        locations: {},
    };

    if (searchAll || searchCharacters) {
        results.characters = getCharacters(searchValue, page);
    }

    if (searchAll || searchEpisodes) {
        results.episodes = getEpisodes(searchValue, page);
    }

    if (searchAll || searchLocations) {
        results.locations = getLocations(searchValue, page);
    }

    const [characters, episodes, locations] = await Promise.all(Object.values(results));



    return {
        searchedCharacters: characters || {},
        searchedEpisodes: episodes || {},
        searchedLocations: locations || {},
    };
}

export const MockEpisode = (episode) => {
    return {
        id: episode.id,
        name: episode.name,
        episode: episode.episode,
        air_date: episode.air_date,
        characters: episode.characters,
    }
}

export const MockCharacter = (character) => {

    return {
        id: character.id,
        name: character.name,
        image: character.image,
        status: character.status === "unknown" ? "Desconocido" : character.status === "Alive" ? "Vivo" : "Muerto",
        origin: character.origin?.name === 'unknown' ? 'Desconocido' : character.origin?.name,
        originUrl: character.origin?.url || null,
        location: {
            name: character.location?.name === 'unknown' ? 'Desconocido' : character.location?.name,
            url: character.location?.url || null,
            id: character.location?.url?.split('/').pop() || null,
        },
        species: character.species,
        gender: character.gender === 'unknown' ? 'Desconocido' : character.gender,
        episode: character.episode,
    }
}

export const getCharacter = async ({ id }) => {
    try {
        const API_URL = Array.isArray(id) ? `https://rickandmortyapi.com/api/character/${id.join(',')}` : `https://rickandmortyapi.com/api/character/${id}`;

        const response = await fetch(API_URL);
        const data = await response.json();

        if (response.ok) {

            if (Array.isArray(id) && data.length > 0) {
                const mockedData = data.map((character) => MockCharacter(character));
                return mockedData;
            } else {
                const mockedData = MockCharacter(data);
                return mockedData;
            }
        } else {
            throw new Error('Error fetching character');
        }
    } catch (error) {
        return {
            error: true,
            message: 'No se encontró el personaje.'
        };
    }
}
export const getPlanet = async ({ id }) => {
    try {
        const API_URL = `https://rickandmortyapi.com/api/location/${id}`;
        const response = await fetch(API_URL);
        const data = await response.json();
        if (response.ok) {
            const mockedData = {
                id: data.id,
                name: data.name === 'unknown' ? 'Desconocido' : data.name,
                type: data.type === 'unknown' ? 'Desconocido' : data.type,
                dimension: data.dimension === 'unknown' ? 'Desconocida' : data.dimension,
                residents: data.residents
            }

            return mockedData;
        } else {
            throw new Error('Error fetching location');
        }
    } catch (error) {
        return {
            error: true,
            message: 'No se encontró el lugar.'
        }
    }
}


export const getEpisode = async ({ id }) => {
    try {
        const API_URL = Array.isArray(id) ? `https://rickandmortyapi.com/api/episode/${id.join(',')}` : `https://rickandmortyapi.com/api/episode/${id}`;

        const response = await fetch(API_URL);
        const data = await response.json();

        if (response.ok) {
            if (Array.isArray(id) && data.length > 0) {
                const mockedData = data.map((episode) => MockEpisode(episode));
                return mockedData;
            } else {
                const mockedData = MockEpisode(data);
                return mockedData;
            }
        } else {
            throw new Error('Error fetching episodes');
        }
    } catch (error) {
        return {
            error: true,
            message: 'No se encontraron los episodios.'
        };
    }
}

export const getAllLocationsIds = async () => {
    try {
        const API_URL = `https://rickandmortyapi.com/api/location`;

        const response = await fetch(API_URL);
        const data = await response.json();

        if (response.ok) {
            const ids = Array.from({ length: data.info.count }, (_, i) => i + 1);
            return ids;
        } else {
            throw new Error('Error fetching locations');
        }
    } catch (error) {
        return {
            error: true,
            message: 'No se encontraron lugares.'
        };
    }

}

export const getAllCharacterIds = async () => {
    try {
        const API_URL = `https://rickandmortyapi.com/api/character`;

        const response = await fetch(API_URL);
        const data = await response.json();

        if (response.ok) {
            const ids = Array.from({ length: data.info.count }, (_, i) => i + 1);
            return ids;
        } else {
            throw new Error('Error fetching characters');
        }
    } catch (error) {
        return {
            error: true,
            message: 'No se encontraron personajes.'
        };
    }
}

export const getTotalEpisodes = async () => {
    try {
        const API_URL = `https://rickandmortyapi.com/api/episode`;

        const response = await fetch(API_URL);
        const data = await response.json();

        if (response.ok) {
            return data.info.count;
        } else {
            throw new Error('Error fetching episodes');
        }
    } catch (error) {
        return {
            error: true,
            message: 'No se encontraron episodios.'
        };
    }
}

export const getAllEpisodesIds = async () => {
    try {
        const API_URL = `https://rickandmortyapi.com/api/episode`;

        const response = await fetch(API_URL);
        const data = await response.json();

        if (response.ok) {
            const ids = Array.from({ length: data.info.count }, (_, i) => i + 1);
            return ids;
        } else {
            throw new Error('Error fetching episodes');
        }
    } catch (error) {
        return {
            error: true,
            message: 'No se encontraron episodios.'
        };
    }
}