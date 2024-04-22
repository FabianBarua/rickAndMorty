import { LocationCard } from "@/components/LocationCard";


export const LocationsSection = ({ locations }) => {
    return (
        <section className=" grid grid-cols-[repeat(auto-fit,_minmax(9rem,_1fr))] sm:grid-cols-[repeat(auto-fit,_minmax(12.2rem,_1fr))] gap-3 justify-between ">
            {
                locations?.map(({ id, name, type, dimension }) => (
                    <LocationCard
                        id={id}
                        key={id}
                        name={name}
                        type={type}
                        dimension={dimension}
                    />
                ))
            }
        </section>
    );
}
