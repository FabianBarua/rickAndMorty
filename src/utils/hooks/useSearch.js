import { useState } from "react";
import { search } from "../services/rickAndMorty";
import { ALL_TYPES } from "../constants/rickAndMorty";

export const useSearch = ({ type, initialData }) => {

    const [data, setData] = useState({ ...initialData, page: 1 });
    const [searchValue, setSearchValue] = useState('');

    const fetchMoreData = async () => {
        const newPage = data.page + 1;

        const options = {
            searchValue: searchValue,
            searchCharacters: type === ALL_TYPES.characters,
            searchEpisodes: type === ALL_TYPES.episodes,
            searchLocations: type === ALL_TYPES.locations,
            page: newPage
        }

        const { searchedCharacters, searchedEpisodes, searchedLocations } = await search({ ...options });


        const newData = type === ALL_TYPES.characters ? searchedCharacters : type === ALL_TYPES.episodes ? searchedEpisodes : searchedLocations;


        setData({
            info: newData.info,
            [type]: data[type]?.concat(newData[type]),
            page: newPage
        })

    }


    const handleSubmit = async (value) => {
        console.log(value)
        const errors = [];
        if (searchValue?.trim().toLowerCase() === value?.trim().toLowerCase()) {
            return;
        }

        if (!value) {
            setData(initialData);
        }
        setSearchValue(value);

        if (value.length < 3) {
            errors.push('La búsqueda debe tener al menos 3 caracteres.');
        }

        if (errors.length) {
            return;
        }

        const { searchedCharacters, searchedEpisodes, searchedLocations } = await search({
            searchValue: value,
            searchCharacters: type === ALL_TYPES.characters,
            searchEpisodes: type === ALL_TYPES.episodes,
            searchLocations: type === ALL_TYPES.locations,
            searchAll: false,
            page: 1
        })

        const newData = type === ALL_TYPES.characters ? searchedCharacters : type === ALL_TYPES.episodes ? searchedEpisodes : searchedLocations;
        setData({
            info: newData.info,
            [type]: newData[type],
            page: 1
        })

    }
    return {
        data,
        fetchMoreData,
        handleSubmit
    }
}