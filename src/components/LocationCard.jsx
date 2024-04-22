import { InfoIcon } from '@icons/Icons';
import { ButtonAction } from '@components/ButtonAction';

export const LocationCard = ({ id, name, type, dimension }) => {
    return (
        <li className="border   dark:border-0 border-default-400 bg-default-50 w-full max-w-96 flex flex-col rounded-2xl p-4 text-xs leading-4">
            <h3 style={{ viewTransitionName: `planet-name-${id}` }} className="text-lg break-words  font-bold">{name}</h3>
            <p className="text-default-300 text-sm">Tipo: {type}</p>
            <p className="text-default-300 text-sm h-full mb-3">Dimensión: {dimension}</p>
            <ButtonAction size='sm' border href={`/lugares/${id}`}>
                <InfoIcon /> Ver más
            </ButtonAction>
        </li>
    )
}
