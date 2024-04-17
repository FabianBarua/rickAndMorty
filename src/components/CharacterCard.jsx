import { AlienIcon, InfoIcon, LiveIcon, PlanetIcon } from '@icons/Icons';
import { ButtonAction } from '@/components/ButtonAction';

export const CharacterCard = ({ id, image, name, status, species, origin }) => {
    // TODO: Ver cual queda mejor sm:w-[12.2rem] o sm:w-[15.4rem]
    return (
        <div className=" border dark:border-0 border-default-400 bg-default-50  w-[10.08rem] sm:w-[12.2rem] flex flex-col  rounded-2xl p-4 text-xs  leading-4">

            <div className=' w-[8.08rem] sm:w-[10.2rem] h-44  '>
                <img src={image} className="h-44  object-cover rounded-2xl " onLoad={() => {

                }} alt="" />
            </div>
            <h3 className="py-3 text-base font-bold leading-3">{name}</h3>
            <div className=' h-full'>
                <div className='flex gap-2'><LiveIcon />{status}</div>
                <div className='flex gap-2'><AlienIcon />{species}</div>
                <div className='flex gap-2'><PlanetIcon />{origin}</div>
            </div>
            <div className=" w-full  mt-4 flex justify-end">
                <ButtonAction size='sm' border href={`/personajes/${id}`}>
                    <InfoIcon /> Ver mas
                </ButtonAction>
            </div>
        </div>
    );
}