
import { EpisodeCard } from './EpisodeCard';
import { GridResponsive } from './GridResponsive';

export const EpisodesSection = ({ episodes }) => {
    return (
        <GridResponsive>
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
        </GridResponsive>
    );
}