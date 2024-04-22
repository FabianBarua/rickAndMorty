import { gridResponsiveClassName } from "@components/GridResponsive";
import InfiniteScroll from "react-infinite-scroll-component";
import { Search } from "@components/Search";
import { ALL_TYPES } from "@/utils/constants/rickAndMorty";
import { useSearch } from "@/utils/hooks/useSearch";
import { CharacterCard } from "@components/CharacterCard";

export const Characters = ({ initialCharacters }) => {
    const {
        data: characters,
        fetchMoreData,
        handleSubmit
    } = useSearch({ type: ALL_TYPES.characters, initialData: initialCharacters });


    const lenght = characters?.characters?.length || 0;
    const count = characters?.info?.count || 0;
    const hasMore = characters?.info?.next !== null && characters?.characters

    return (
        <>
            <h2 className="text-3xl my-4 text-center font-bold">Personajes para explorar 🔍</h2>

            <div className=" flex  justify-center sm:justify-between  flex-wrap gap-3  w-full items-center  my-7">
                <Search handleSubmit={handleSubmit} />
                <p className="text-sm  text-center sm:text-right  text-default-300">{count} Personajes encontrados.</p>
            </div>

            <InfiniteScroll
                dataLength={lenght}
                next={fetchMoreData}
                hasMore={hasMore}
                className={gridResponsiveClassName}
            >
                {
                    characters?.characters?.map(({ id, image, name, status, species, origin }) => (

                        <CharacterCard
                            id={id}
                            key={id}
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
                        <p className="text-center text-default-300 mt-24 mb-16">No hay más Personajes para mostrar.</p>
                    </>
                )
            }
        </>
    );
}