const optionsApi = (searchValue, page) => `?${searchValue ? `&name=${searchValue}` : ''}` + `${page ? `&page=${page}` : ''}`

export const getCharacters = async (searchValue, page = 1) => {
    try {

        const API_URL = `https://rickandmortyapi.com/api/character/${optionsApi(searchValue, page)}`;

        const response = await fetch(API_URL);
        const data = await response.json();


        if (response.ok) {
            const charactersMocked = data.results.map((character) => ({
                id: character.id,
                name: character.name,
                image: character.image,
                status: character.status,
                origin: character.origin?.name,
                species: character.species,
            }));


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
export const getEpisodes = async (searchValue, page = 1) => {
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


export const getLocations = async (searchValue, page = 1) => {

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
