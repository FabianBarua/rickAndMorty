import { getCharacter, MockCharacter } from "@/utils/services/rickAndMorty";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CharactersSection } from "@components/CharactersSection";
import { ButtonAction } from "@components/ButtonAction";
import { MoreIcon } from "@icons/Icons";

const ResidentCard = ({ name, image, species, style, id, scale }) => {

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: Math.random(), ease: 'easeInOut' }}
            className={`absolute ${style}`}

        >
            <a href={`/personajes/${id}`} className={`${scale ? scale : ' scale-[.6] sm:scale-75 '} pointer-events-auto bg-default-50 max-w-56 h-24  hover:scale-[.70] sm:hover:scale-[.90] flex gap-2  p-2 border dark:border-[#fff0] border-default-300  transition-all  rounded-xl`}>
                <div className="   flex-1">
                    <h1 className="text-lg   font-bold  line-clamp-1">{name}</h1>
                    <p className="text-sm text-default-400">{species}</p>
                </div>
                <img src={image} className="pointer-events-none rounded-lg h-20  w-20" alt="" />
            </a>
        </motion.div>
    )
}

export const LocationPage = ({ planet }) => {

    const [residents, setResidents] = useState([]);

    useEffect(() => {

        const getResidents = async () => {
            const residentsIds = planet.residents.map(resident => resident.split('/').pop());


            if (residentsIds.length === 0) return;

            let dataMocked = await getCharacter({ id: residentsIds })

            if (!Array.isArray(dataMocked)) {
                dataMocked = [dataMocked]
            }
            setResidents(dataMocked)
        }

        getResidents();

    }, [])
    const className = "  xs:size-[200px] size-[350px]  sm:size-[300px]  lg:size-[600px] ";
    return (
        <div className=" w-full h-full mb-12 overflow-hidden sm:overflow-visible  ">
            <div className=" flex   flex-col-reverse sm:flex-row">
                <div className=" flex-auto sm:flex-1 ">
                    <div className=" justify-center mt-4 sm:mt-28 ">
                        <h1 style={{ viewTransitionName: `planet-name-${planet.id}` }} className=" text-3xl  sm:text-5xl font-bold ">{planet?.name}</h1>
                        <div className=" flex flex-wrap    gap-1 mt-3 text-sm text-default-400">
                            <p className=" w-min px-2 text-nowrap bg-default-50 border border-default-200 rounded-full" >{planet?.type}</p>
                            <p className=" w-min px-2 text-nowrap bg-default-50 border border-default-200 rounded-full" >{planet?.dimension}</p>
                        </div>
                        <p className=" mt-8 text-sm sm:text-base text-default-300">{planet?.residents?.length} personajes estan localizados aqui.</p>

                    </div>
                </div>
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className={` lg:-mt-24 ${className} relative  mx-auto  pointer-events-none `}>

                    {
                        residents[2] && (
                            <ResidentCard
                                id={residents[2].id}
                                name={residents[2].name}
                                species={residents[2].species}
                                image={residents[2].image}
                                style=" top-4 xs:-right-[6rem] -right-[3rem] lg:top-32 sm:top-10 sm:-right-20 lg:-right-2  hover:z-10 "
                                scale={'scale-50  lg:scale-[.7]'}

                            />
                        )
                    }

                    <img src="/images/bg0.png" className={`  pointer-events-none absolute ${className} z-0 `} alt="" />
                    <div className="  h-96 w-96  rounded-full  absolute z-0  top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ">
                        <div className=" w-full  h-full relative z-0">

                            {
                                residents[1] && (
                                    <ResidentCard
                                        id={residents[1].id}
                                        name={residents[1].name}
                                        species={residents[1].species}
                                        image={residents[1].image}
                                        style=" bottom-12 xs:bottom-16 sm:bottom-16 sm:right-12 right-8 lg:bottom-6 lg:-right-12"
                                        scale=' scale-50  sm:scale-[.6] lg:scale-[.7] hover:z-10'
                                    />
                                )

                            }

                            {
                                residents[0] && (
                                    <ResidentCard
                                        id={residents[0].id}
                                        name={residents[0].name}
                                        species={residents[0].species}
                                        image={residents[0].image}
                                        style=" lg:top-5 lg:-left-20 hover:z-10  top-20 left-2 sm:top-16 "
                                        scale={'scale-50 sm:scale-50 lg:scale-[.7] hover:z-10'}
                                    />
                                )
                            }

                        </div>
                    </div>
                </motion.div>
            </div>

            <div className=" flex justify-between items-center mt-16 -translate-y-">
                <h1 className=" text-xl  text-balance  lg:text-3xl   text-default-500 dark:text-default-400"> Habitantes de {planet.name}</h1>
                <ButtonAction href="/personajes">
                    <MoreIcon />
                    Ver todos
                </ButtonAction>
            </div>

            <hr className=" my-5 text-foreground-100   " />
            {
                residents.length > 0 ? (
                    <CharactersSection characters={residents} />
                ) : <p className="text-default-400 text-center mt-16">No hay personajes en esta ubicacion</p>
            }
        </div>
    );
}