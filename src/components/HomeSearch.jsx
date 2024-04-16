import { useEffect, useState } from "react";
import { PersonajesSection } from "./PersonajesSection";



export const HomeSearch = ( {initialCharacters}) => {
    
    const [personajes, setPersonajes] = useState(initialCharacters);
    console.log(personajes);
    const [espodios, setEpisodios] = useState([]);
    const [lugares, setLugares] = useState([]);
    
    return (
        <PersonajesSection personajes={personajes} />
    );
}