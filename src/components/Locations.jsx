import { gridResponsiveClassName } from "@components/GridResponsive";
import InfiniteScroll from "react-infinite-scroll-component";
import { Search } from "./Search";
import { ALL_TYPES } from "@/utils/constants/rickAndMorty";
import { useSearch } from "@/utils/hooks/useSearch";
import { LocationCard } from "./LocationCard";

export const Locations = ({ initialLocations }) => {


    const {
        data: locations,
        fetchMoreData,
        handleSubmit
    } = useSearch({ type: ALL_TYPES.locations, initialData: initialLocations });


    const lenght = locations?.locations?.length || 0;
    const count = locations?.info?.count || 0;
    const hasMore = locations?.info?.next !== null && locations?.locations

    return (
        <>
            <h2 className="text-3xl my-4 text-center font-bold">Lugares para explorar 🔍</h2>

            <div className=" flex  justify-center sm:justify-between  flex-wrap gap-3  w-full items-center  my-7">
                <Search handleSubmit={handleSubmit} />
                <p className="text-sm  text-center sm:text-right  text-default-300">{count} Lugares encontrados.</p>
            </div>

            <InfiniteScroll
                dataLength={lenght}
                next={fetchMoreData}
                hasMore={hasMore}
                className={gridResponsiveClassName}
            >
                {
                    locations?.locations?.map(({ id, name, type, dimension }) => (

                        <LocationCard
                            id={id}
                            key={id}
                            name={name}
                            type={type}
                            dimension={dimension}
                        />
                    ))
                }
            </InfiniteScroll>

            {
                (locations?.info?.next === null || locations?.locations?.length === 0) && (
                    <>
                        <p className="text-center text-default-300 mt-24 mb-16">No hay más Lugares para mostrar.</p>
                    </>
                )
            }
        </>
    );
}