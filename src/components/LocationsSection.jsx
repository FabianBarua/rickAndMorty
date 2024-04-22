import { InfoIcon } from '@icons/Icons';
import { ButtonAction } from '@components/ButtonAction';

export const LocationsSection = ({ locations }) => {
    return (
        <section className=" grid grid-cols-[repeat(auto-fit,_minmax(9rem,_1fr))] sm:grid-cols-[repeat(auto-fit,_minmax(12.2rem,_1fr))] gap-3 justify-between ">
            {
                locations?.map(({ id, name, type, dimension }) => (
                    <div key={id} className="border   dark:border-0 border-default-400 bg-default-50 w-full flex flex-col rounded-2xl p-4 text-xs leading-4">
                        <h3 style={{ viewTransitionName: `planet-name-${id}` }} className="text-lg break-words  font-bold">{name}</h3>
                        <p className="text-default-300 text-sm">Tipo: {type}</p>
                        <p className="text-default-300 text-sm h-full mb-3">Dimensión: {dimension}</p>
                        <ButtonAction size='sm' border href={`/lugares/${id}`}>
                            <InfoIcon /> Ver más
                        </ButtonAction>
                    </div>
                ))
            }
        </section>
    );
}
