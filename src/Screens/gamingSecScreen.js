import React from 'react'
import { useState, useEffect } from "react";
import GamingSec from '../Components/GamingSec'

function GamingSecScreen(props) {
    const [webGameData, setwebGameData] = useState([])
    const [mobGameData, setMobGameData] = useState([])
    const [mPlayerGameData, setmPlayerGameData] = useState([])



    useEffect(() => {
        if (props.Token) {
            mobileGames()
            webGames()
            multiplayerGames()
        }
    }, [props.Token])


    // ---------------------------- Web Games API ----------------------------

    const webGames = async (e) => {
        await fetch(
            `/games/list/20/3`,

            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${props.Token}`,
                },
            }
        )
            .then((res) => res.json())
            .then((data) => {
                const gameDetail = data.games.map(stream => ({
                    title: stream.title,
                    viewsCount: stream.viewsCount,
                    image: stream.image

                }));
                setwebGameData(gameDetail);
            })
            .catch((err) => console.log("API error is", err));
    };

    // ---------------------------- Mobile Games API ----------------------------

    const mobileGames = async (e) => {
        await fetch(
            `/games/list/20/2`,

            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${props.Token}`,
                },
            }
        )
            .then((res) => res.json())
            .then((data) => {
                const gameDetail = data.games.map(stream => ({
                    title: stream.title,
                    viewsCount: stream.viewsCount,
                    image: stream.image

                }));
                setMobGameData(gameDetail);
            })
            .catch((err) => console.log("API error is", err));
    };


    // ---------------------------- Multiplayer Games API ----------------------------

    const multiplayerGames = async (e) => {
        await fetch(
            `/games/list/20/1`,

            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${props.Token}`,
                },
            }
        )
            .then((res) => res.json())
            .then((data) => {
                const gameDetail = data.games.map(stream => ({
                    title: stream.title,
                    viewsCount: stream.viewsCount,
                    image: stream.image

                }));
                setmPlayerGameData(gameDetail);
            })
            .catch((err) => console.log("API error is", err));
    };

    return (
        <>
            <GamingSec webGameData={webGameData} mobGameData={mobGameData} mPlayerGameData={mPlayerGameData}
                webGames={webGames} multiplayerGames={multiplayerGames} mobileGames={mobileGames} />
        </>
    )
}


export default GamingSecScreen