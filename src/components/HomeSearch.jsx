import { useEffect, useRef, useState } from "react";
import { CharactersSection } from "./CharactersSection";
import { ButtonAction } from '@components/ButtonAction';
import { search } from "@/utils/services/rickAndMorty";
import { EpisodesSection } from "./EpisodesSection";
import { LocationsSection } from "@components/LocationsSection";
import { SectionHeader } from "@components/SectionHeader";
import { limitClass } from "@/utils/constants/rickAndMorty";
import { Search } from "@components/Search";
import { CharacterIcon, MonitorIcon, PlanetIcon } from "@icons/Icons";

const ALL_TYPES = {
    characters: 'characters',
    episodes: 'episodes',
    locations: 'locations'
};


export const HomeSearch = ({ initialCharacters, initialEpisodes, initialLocations }) => {

    const [characters, setCharacters] = useState(initialCharacters);
    const [episodes, setEpisodes] = useState(initialEpisodes);
    const [locations, setLocations] = useState(initialLocations);
    const [pagesNumbers, setPagesNumbers] = useState(
        {
            characters: 1,
            episodes: 1,
            locations: 1
        }
    )

    const [searchValue, setSearchValue] = useState('');

    const updatePageNumbers = async (value, type) => {
        setPagesNumbers(prev => {
            return { ...prev, [type]: value }
        });

        const searchOptions = {
            searchValue,
            page: value,
            searchCharacters: type === ALL_TYPES.characters,
            searchEpisodes: type === ALL_TYPES.episodes,
            searchLocations: type === ALL_TYPES.locations
        };

        const { searchedCharacters, searchedEpisodes, searchedLocations } = await search(searchOptions);

        if (searchOptions.searchCharacters) {
            setCharacters(searchedCharacters);
        }

        if (searchOptions.searchEpisodes) {
            setEpisodes(searchedEpisodes);
        }

        if (searchOptions.searchLocations) {
            setLocations(searchedLocations);
        }

    }


    const handleSubmit = async (value) => {

        const errors = [];

        if (searchValue?.trim().toLowerCase() === value?.trim().toLowerCase()) {
            return;
        }

        if (!value) {
            setCharacters(initialCharacters);
            setEpisodes(initialEpisodes);
            setLocations(initialLocations);
            setPagesNumbers({
                characters: 1,
                episodes: 1,
                locations: 1
            })
        }

        setSearchValue(value);

        if (value.length < 3) {
            errors.push('La búsqueda debe tener al menos 3 caracteres.');
        }

        if (errors.length) {
            return;
        }



        const {
            searchedCharacters,
            searchedEpisodes,
            searchedLocations } = await search({ searchValue: value, searchAll: true })
        setCharacters(searchedCharacters);
        setEpisodes(searchedEpisodes);
        setLocations(searchedLocations);

        setPagesNumbers({
            characters: 1,
            episodes: 1,
            locations: 1
        })
    }


    return (
        <>
            <div className="bg-default-50/50 py-5">
                <div className={limitClass}>

                    <div className="flex gap-4  sm:flex-row flex-col justify-between pb-12 pt-5 sm:pt-12 sm:pb-12 items-center">
                        <Search handleSubmit={handleSubmit} />
                        <div className="flex gap-2 flex-wrap justify-center">
                            <ButtonAction border size="md" href="#characters">
                                <CharacterIcon /> Personajes
                            </ButtonAction>
                            <ButtonAction border size="md" href="#episodes">
                                <MonitorIcon />
                                Episodios
                            </ButtonAction>
                            <ButtonAction border size="md" href="#locations">
                                <PlanetIcon /> Lugares
                            </ButtonAction>
                        </div>
                    </div>

                    <div className=" flex flex-col gap-7" >


                        <SectionHeader
                            type={ALL_TYPES.characters}
                            name="Personajes"
                            count={characters?.info?.count}
                            updatePageNumbers={updatePageNumbers}
                            pagesNumbers={pagesNumbers.characters}
                            maxPageNumber={characters?.info?.pages}
                        />

                        <CharactersSection characters={characters.characters} />

                        { /* Episodes */}
                        <SectionHeader
                            type={ALL_TYPES.episodes}
                            name="Episodios"
                            count={episodes?.info?.count}
                            updatePageNumbers={updatePageNumbers}
                            pagesNumbers={pagesNumbers.episodes}
                            maxPageNumber={episodes?.info?.pages}
                        />
                        <EpisodesSection episodes={episodes.episodes} />

                        { /* Locations */}
                        <SectionHeader
                            type={ALL_TYPES.locations}
                            name="Lugares"
                            count={locations?.info?.count}
                            updatePageNumbers={updatePageNumbers}
                            pagesNumbers={pagesNumbers.locations}
                            maxPageNumber={locations?.info?.pages}
                        />
                        <LocationsSection locations={locations.locations} />

                    </div>
                </div>
            </div>

        </>
    );
}