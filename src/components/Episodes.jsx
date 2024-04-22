import { gridResponsiveClassName } from "@components/GridResponsive";
import InfiniteScroll from "react-infinite-scroll-component";
import { Search } from "./Search";
import { ALL_TYPES } from "@/utils/constants/rickAndMorty";
import { EpisodeCard } from "./EpisodeCard";
import { useSearch } from "@/utils/hooks/useSearch";


export const Episodes = ({ initialEpisodes }) => {
    const {
        data: episodes,
        fetchMoreData,
        handleSubmit
    } = useSearch({ type: ALL_TYPES.episodes, initialData: initialEpisodes });


    const lenght = episodes?.episodes?.length || 0;
    const count = episodes?.info?.count || 0;
    const hasMore = episodes?.info?.next !== null && episodes?.episodes

    return (
        <>
            <h2 className="text-3xl my-4 text-center font-bold">Episodios para explorar 🔍</h2>

            <div className=" flex justify-between w-full items-center  my-7">
                <Search handleSubmit={handleSubmit} />
                <p className="text-sm    text-default-300">{count} Episodios encontrados.</p>
            </div>

            <InfiniteScroll
                dataLength={lenght}
                next={fetchMoreData}
                hasMore={hasMore}
                className={gridResponsiveClassName}
            >
                {
                    episodes?.episodes?.map(({ id, name, episode, air_date }) => (

                        <EpisodeCard
                            id={id}
                            key={id}
                            name={name}
                            episode={episode}
                            air_date={air_date}
                        />

                    ))
                }
            </InfiniteScroll>

            {
                (episodes?.info?.next === null || episodes?.episodes?.length === 0) && (
                    <>
                        <p className="text-center text-default-300 mt-24 mb-16">No hay más Episodios para mostrar.</p>
                    </>
                )
            }
        </>
    );
}