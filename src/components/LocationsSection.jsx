import { InfoIcon } from '@icons/Icons';
import { ButtonAction } from '@/components/ButtonAction';

export const LocationsSection = ({ locations }) => {
    return (
        <section className="flex gap-3 justify-between flex-wrap">
            {
                locations?.map(({ id, name }) => (
                    <a key={id}
                        href={`/lugares/${id}`}
                        className=" hover:bg-default-100 transition-all relative border dark:border-0 border-default-400 bg-default-50  w-[10.08rem] sm:w-[12.2rem] flex flex-col  rounded-2xl p-4 text-xs  leading-4">

                        <h3
                            className="font-bold text-xl  text-default-900 "
                            style={{ viewTransitionName: `planet-name-${id}` }}
                        >{name}</h3>
                        <div className=' absolute  bottom-1 right-1'>
                            <ButtonAction border
                                href={`/lugares/${id}`}>
                                <InfoIcon />
                            </ButtonAction>
                        </div>
                    </a>
                ))
            }
        </section >
    );
}
