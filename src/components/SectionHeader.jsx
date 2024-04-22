import { Select } from '@components/Select';
import { ButtonAction } from '@components/ButtonAction';
import { MoreIcon } from '@icons/Icons';

export const SectionHeader = ({ type, name, count, updatePageNumbers, pagesNumbers, maxPageNumber }) => {
    // TODO: EVITAR PROPS DRILLING
    return (

        <div id={type} className="flex flex-col sm:flex-row  gap-4 items-center ">
            <h2 className="text-3xl font-bold">{name}</h2>
            <p className="text-sm  sm:hidden flex-1  text-default-300">{count} {name} encontrados.</p>

            <div className="flex gap-4 flex-1 items-center">
                <ButtonAction href={`/${name?.toLowerCase()}`}> Ver todos <MoreIcon /></ButtonAction>

                <p className="text-sm hidden sm:inline-block flex-1  text-default-300">{count} {name} encontrados.</p>

                {
                    maxPageNumber > 1 && (
                        <Select
                            options={maxPageNumber}
                            onChange={(value) => updatePageNumbers(value, type)}
                            pagesNumbers={pagesNumbers}
                            updatePageNumbers={(value) => updatePageNumbers(value, type)}
                        />
                    )
                }
            </div>

        </div>
    )
}
