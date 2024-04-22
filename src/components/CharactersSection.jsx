import { CharacterCard } from "@components/CharacterCard";
import { GridResponsive } from "./GridResponsive";


export const CharactersSection = ({ characters }) => {
    return (
        <GridResponsive>
            {

                characters?.map(({ id, image, name, status, species, origin }) => (
                    <CharacterCard
                        key={id}
                        id={id}
                        image={image}
                        name={name}
                        status={status}
                        species={species}
                        origin={origin}
                    />
                ))

            }
        </GridResponsive>
    );
}