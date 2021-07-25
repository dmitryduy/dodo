import React, { FC, useCallback, useEffect, useState } from 'react';
import Column from "../CitiesPopup/Column/Column";
import { ICity } from "../../types/delivery";
import cities from "../../cities";

const sortedArray: Array<ICity> = cities.sort((a, b) => a.city > b.city ? 1 : -1)
    .filter(city => city.city !== 'Оспаривается');
const arraySize: number = sortedArray.length;

const Cities: FC = () => {
    const citiesPurColumn = Math.ceil(arraySize / 3);
    const [windowSize, setWindowSize] = useState<number>(0);
    const scroll = useCallback(
        () => {
            setWindowSize(window.innerWidth);
        }, []
    );

    useEffect(() => {
        setWindowSize(window.innerWidth);
        window.addEventListener('resize', scroll);

        return () => window.removeEventListener('resize', scroll);
    }, []);

    if (windowSize > 700) {
        return (
            <>
                <Column cities={sortedArray.slice(0, citiesPurColumn)}/>
                <Column cities={sortedArray.slice(citiesPurColumn, Math.ceil(arraySize / 2))}/>
                <Column cities={sortedArray.slice(2 * citiesPurColumn)}/>
            </>
        )
    }
    if (windowSize > 470) {
        return (
            <>
                <Column cities={sortedArray.slice(0, Math.ceil(arraySize / 2))}/>
                <Column cities={sortedArray.slice(Math.ceil(arraySize / 2))}/>
            </>
        )
    }
    return <Column cities={sortedArray}/>;

};

export default Cities;
