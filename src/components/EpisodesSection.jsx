import { InfoIcon } from '@icons/Icons';
import { ButtonAction } from '@components/ButtonAction';

const EpisodeCard = ({ id, name, episode, air_date }) => {
    return (
        <div className=" border  dark:border-0 border-default-400 bg-default-50  w-full  max-w-96 flex flex-col  rounded-2xl p-4 text-xs  leading-4">
            <h3 className="text-lg font-bold break-words ">{name}</h3>
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