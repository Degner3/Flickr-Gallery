
import React, { useState, useEffect } from 'react';
import style from "./Footer.module.scss";
import { FaRegCopyright } from "react-icons/fa6";

export const Footer = () => {
    const [colorOne, setColorOne] = useState(getRandomColor());
    const [colorTwo, setColorTwo] = useState(getRandomColor());
    const [colorThree, setColorThree] = useState(getRandomColor());
    const [colorFour, setColorFour] = useState(getRandomColor());

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setColorOne(getRandomColor());
            setColorTwo(getRandomColor());
            setColorThree(getRandomColor());
            setColorFour(getRandomColor());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const spanStyleOne = {
        color: colorOne
    };

    const spanStyleTwo = {
        color: colorTwo
    };

    const spanStyleThree = {
        color: colorThree
    };

    const spanStyleFour = {
        color: colorFour
    }

    return (
        <footer className={style.footer}>
            <p className={style.copyright}>Denne smukke kunstværk er lavet af 
                <span className={style.c} style={spanStyleOne}>Niklas</span>, 
                hvis kreativitet og lidenskab skinner igennem hvert penselstrøg og farvesammensætning. 
                <span className={style.c} style={spanStyleTwo}>Niklas</span> formår at fange følelser og øjeblikke på lærredet som en sand mester
            </p>
            <p className={style.cr}>Copyright <span><FaRegCopyright className={style.icon} style={spanStyleTwo} /></span> 2023, All Right Reserved <span className={style.text} style={spanStyleOne}>Niklas</span></p>
        </footer>
    )
}
