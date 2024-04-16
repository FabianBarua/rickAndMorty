import { AlienIcon, InfoIcon, LiveIcon, PlanetIcon } from '@icons/Icons';
import { ButtonAction } from './ButtonAction';

export const PersonajesSection = ( { personajes }) => {
    return (
        <section className=" flex gap-3 justify-between flex-wrap">

               {

                personajes?.map(personaje => (

                    <div key={personaje.id} className=" border dark:border-0 border-default-400 bg-default-50  w-[10.08rem] sm:w-[15.4rem] flex flex-col  rounded-2xl p-4 text-xs  leading-4">
                        <img src={personaje.image} className=" w-full h-44 object-cover rounded-2xl " alt="" />
                        <h3 className="py-3 text-base font-bold leading-3">{personaje.name}</h3>
                        <div className='flex gap-2'><LiveIcon />{personaje.status}</div>
                        <div className='flex gap-2'><AlienIcon />{personaje.species}</div>
                        <div className='flex gap-2'><PlanetIcon />{personaje.origin}</div>
                        <div className=" w-full mt-2 flex justify-end">
                            <ButtonAction size='sm' border  href={`/personajes/${personaje.id}`}>
                                <InfoIcon /> Ver mas
                            </ButtonAction>
                        </div>
                     </div>

                ))

               }
 
        </section>
    );
}