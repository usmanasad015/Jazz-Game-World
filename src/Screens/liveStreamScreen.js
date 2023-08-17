import React, { useState, useEffect } from "react";
import LiveStream from "../Components/LiveStream";

function LiveStreamScreen(props) {
    // const [isTitle, setTitle] = useState([]);
    // const [channelTitle, setChannelTitle] = useState([]);
    // const [viewsCount, setViewsCount] = useState([]);
    // const [videoImageUrl, setVideoImageUrl] = useState(" ");
    const [streamData, setStreamData] = useState([])


    useEffect(() => {
        if (props.Token) {
            EnrichData()
        }
    }, [props.Token])

    const EnrichData = async (e) => {
        await fetch(
            `/media/livestreams/null/24`,

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
                const streamIds = data.streams.map(stream => ({
                    title: stream.title,
                    channelTitle: stream.channelTitle,
                    viewsCount: stream.viewsCount,
                    videoImage: stream.videoImage,
                    url: stream.url

                }));
                setStreamData(streamIds);
            })
            .catch((err) => console.log("api error is", err));
    };
    // console.log("working ", streamData[1])


    return (
        <>
            <LiveStream streamData={streamData} />
        </>
    )
}

export default LiveStreamScreen;


