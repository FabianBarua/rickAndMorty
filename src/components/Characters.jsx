import { useState } from "react";
import { CharacterCard } from "./CharacterCard";
import { gridResponsiveClassName } from "@components/GridResponsive";
import InfiniteScroll from "react-infinite-scroll-component";
import { getCharacter, search } from "@/utils/services/rickAndMorty";
import { Search } from "./Search";




export const Characters = ({ initialCharacters }) => {
    const [characters, setCharacters] = useState(initialCharacters || {});
    const [page, setPage] = useState(1)
    const [searchValue, setSearchValue] = useState('');

    const fetchMoreData = async () => {
        const newPage = page + 1;
        const { searchedCharacters } = await search({ searchValue: searchValue, searchCharacters: true, page: newPage });
        setCharacters({
            info: searchedCharacters.info,
            characters: characters.characters.concat(searchedCharacters.characters)
        });
        setPage(newPage);
    }

    const handleSubmit = async (value) => {

        const errors = [];
        if (searchValue?.trim().toLowerCase() === value?.trim().toLowerCase()) {
            return;
        }

        if (!value) {
            setCharacters(initialCharacters);
        }

        setSearchValue(value);

        if (value.length < 3) {
            errors.push('La búsqueda debe tener al menos 3 caracteres.');
        }

        if (errors.length) {
            return;
        }

        const { searchedCharacters } = await search({
            searchValue: value,
            searchCharacters: true,
            searchEpisodes: false,
            searchLocations: false,
            searchAll: false,
            page: 1
        })
        setCharacters(searchedCharacters);


    }

    console.log(characters)

    return (
        <>
            <h2 className="text-3xl my-4 text-center font-bold">Personajes</h2>

            <div className=" flex justify-between w-full items-center  my-7">
                <Search handleSubmit={handleSubmit} />
                <p className="text-sm    text-default-300">{characters.info.count} Personajes encontrados.</p>
            </div>




            <InfiniteScroll
                dataLength={characters?.characters?.length}
                next={fetchMoreData}
                hasMore={characters?.info?.next !== null && characters?.info?.next !== undefined}
                className={gridResponsiveClassName}
            >
                {
                    characters?.characters?.map(({ id, image, name, status, species, origin }) => (
                        <CharacterCard
                            key={id}
                            id={id}
                            image={image}
                            name={name}
                            status={status}
                            species={species}
                            origin={origin}
                        />
                    ))
                }
            </InfiniteScroll>

            {
                (characters?.info?.next === null || characters?.characters?.length === 0) && (
                    <>
                        <p className="text-center text-default-300 mt-24 mb-16">No hay más personajes para mostrar.</p>
                    </>
                )
            }
        </>
    );
}