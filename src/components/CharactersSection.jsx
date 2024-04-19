import { CharacterCard } from "@/components/CharacterCard";


export const CharactersSection = ({ characters }) => {
    return (
        <section className=" gap-3 grid grid-cols-[repeat(auto-fit,_minmax(12.2rem,_1fr))] ">

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