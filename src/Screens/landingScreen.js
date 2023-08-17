import React, { useState, useEffect } from "react";
import Landing from "../Components/Landing";

function LandingScreen(props) {
    const [videoImageUrlnew, setVideoImageUrlnew] = useState("");
    const [videoUrlnew, setVideoUrlnew] = useState("")
    const [videoImageUrl, setVideoImageUrl] = useState("");
    const [videoUrl, setVideoUrl] = useState("")
    const [streamData, setStreamData] = useState([])
    const [gameData, setGameData] = useState([])
    const [webGameData, setWebGameData] = useState([])


    useEffect(() => {
        if (props.Token) {
            EnrichData()
            downloadGames()
            instantGames()
            bannerSliderAPI()
        }


    }, [props.Token])

    // ------------------------------------- Banner Slider API - Popular Videos API ------------------------------------- 

    const bannerSliderAPI = async (e) => {
        await fetch(
            `media/popularstreams/null/5`,
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
                // console.log("Output", data)
                const streamIds = data.streams.map(stream => ({
                    title: stream.title,
                    channelTitle: stream.channelTitle,
                    viewsCount: stream.viewsCount,
                    videoImage: stream.videoImage,
                    url: stream.url
                }));

                // console.log("Landing page Token is", (props.Token))
                setStreamData(streamIds)

                const videoImages = data.streams.map(stream => stream.videoImage);
                const videoUrl = data.streams.map(stream => stream.url);

                // live stream video images
                setVideoImageUrlnew(videoImages);
                // live stream video urls
                setVideoUrl(videoUrl)

                // console.log("api res", videoImages);
            })

            .catch((err) => console.log("Api error is", err));
    };


    // --------------------------------------- Live Streams API --------------------------------------- 

    const EnrichData = async (e) => {
        await fetch(
            `media/livestreams/null/20`,
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
                // console.log("Output", data)
                const streamIds = data.streams.map(stream => ({
                    title: stream.title,
                    channelTitle: stream.channelTitle,
                    viewsCount: stream.viewsCount,
                    videoImage: stream.videoImage,
                    url: stream.url
                }));

                // console.log("Landing page Token is", (props.Token))
                setStreamData(streamIds)

                const videoImages = data.streams.map(stream => stream.videoImage);
                const videoUrl = data.streams.map(stream => stream.url);

                // live stream video images
                setVideoImageUrl(videoImages);
                // live stream video urls
                setVideoUrl(videoUrl)

                // console.log("api res", videoImages);
            })

            .catch((err) => console.log("Api error is", err));
    };


    // --------------------------------------- Game List API --------------------------------------- 

    // ---------------------------------------  Instant Games API (WEB) --------------------------------------- 

    const instantGames = async (e) => {
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
                    viewsCount: stream.viewCount,
                    image: stream.image
                }));
                setWebGameData(gameDetail);
            })
            .catch((err) => console.log("API error is", err));
    }

    // --------------------------------------- Download  Games API (Mobile)  --------------------------------------- 

    const downloadGames = async (e) => {
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
                    viewsCount: stream.viewCount,
                    image: stream.image
                }));
                setGameData(gameDetail);
            })
            .catch((err) => console.log("API error is", err));

    }

    return (
        <>
            <Landing videoImageUrl={videoImageUrl} videoImageUrlnew={videoImageUrlnew} videoUrlnew={videoUrlnew} videoUrl={videoUrl}
                gameData={gameData} streamData={streamData} webGameData={webGameData}
            />
        </>
    )
}

export default LandingScreen