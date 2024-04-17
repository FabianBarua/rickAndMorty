import { InfoIcon } from '@icons/Icons';
import { ButtonAction } from '@/components/ButtonAction';

const EpisodeCard = ({ id, name, episode, air_date }) => {
    return (
        <div className=" border dark:border-0 border-default-400 bg-default-50  w-[10.08rem] sm:w-[12.2rem] flex flex-col  rounded-2xl p-4 text-xs  leading-4">
            <h3 className="text-lg font-bold">{name}</h3>
            <p className="text-default-300 text-sm">Episodio: {episode}</p>
            <p className="text-default-300 text-sm h-full mb-3">Fecha de estreno: {air_date}</p>
            <ButtonAction size='sm' border href={`/episodios/${id}`}>
                <InfoIcon /> Ver mas
            </ButtonAction>

        </div>
    );

}

export const EpisodesSection = ({ episodes }) => {
    return (
        <section className=" flex gap-3 justify-between flex-wrap">
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