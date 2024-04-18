import { CharacterCard } from "@/components/CharacterCard";


export const CharactersSection = ({ characters }) => {
    return (
        <section className=" flex gap-3 justify-center flex-wrap">

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

        </section>
    );
}