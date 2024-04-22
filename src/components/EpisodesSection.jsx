
import { EpisodeCard } from './EpisodeCard';



export const EpisodesSection = ({ episodes }) => {
    return (
        <section className=" grid grid-cols-[repeat(auto-fit,_minmax(9rem,_1fr))] sm:grid-cols-[repeat(auto-fit,_minmax(12.2rem,_1fr))] gap-3 justify-between ">
            {
                episodes?.map(({ id, name, episode, air_date }) => (
                    <EpisodeCard
                        key={id}
                        id={id}
                        name={name}
                        episode={episode}
                        air_date={air_date}
                    />
                ))

            }

        </section>
    );
}