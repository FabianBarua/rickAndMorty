import { AlienIcon, DeathIcon, InfoIcon, LiveIcon, PlanetIcon } from '@icons/Icons';
import { ButtonAction } from '@components/ButtonAction';

export const CharacterCard = ({ id, image, name, status, species, origin }) => {
    // TODO: Ver cual queda mejor sm:w-[12.2rem] o sm:w-[15.4rem]
    return (
        <li style={{ viewTransitionName: `character-card-${id}` }} className=" border hover:bg-default-100 transition-all dark:border-0 border-default-400 bg-default-50 w-full max-w-96  flex flex-row sm:flex-col  rounded-2xl p-4 text-xs  gap-4 sm:gap-0 leading-4">

            <div className='  flex-1 h-44  '>
                <img src={image}
                    className="h-44 w-full  object-cover rounded-2xl "
                    style={{
                        viewTransitionName: `character-image-${id}`,
                    }}
                    alt="" />
            </div>
            <div className=' flex flex-col flex-1 '>

                <h3 transition:name={`character-name-${id}`} className="py-3 text-base font-bold  break-words ">{name}</h3>
                <div className='  flex-1'>
                    <div className='flex gap-2'>{status === 'Vivo' ? <LiveIcon /> : <DeathIcon />}<p className=' break-words flex-1 '>{status}</p></div>
                    <div className='flex gap-2'><AlienIcon /><p className=' break-words flex-1 '>{species}</p></div>
                    <div className='flex gap-2'><PlanetIcon /><p className=' break-words flex-1 '>{origin}</p></div>
                </div>
                <div className=" w-full  mt-4 flex justify-end">
                    <ButtonAction size='sm' border href={`/personajes/${id}`}>
                        <InfoIcon /> Ver mas
                    </ButtonAction>
                </div>
            </div>

        </li>
    );
}