import { InfoIcon } from '@icons/Icons';
import { ButtonAction } from '@/components/ButtonAction';

export const LocationsSection = ({ locations }) => {
    return (
        <section className="flex gap-3 justify-between flex-wrap">
            {
                locations?.map(({ id, name, type, dimension }) => (
                    <div key={id} className="border dark:border-0 border-default-400 bg-default-50 w-[10.08rem] sm:w-[12.2rem] flex flex-col rounded-2xl p-4 text-xs leading-4">
                        <h3 className="text-lg font-bold">{name}</h3>
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
