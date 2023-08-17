import React, { useState, useEffect } from "react";
import VideoLiveStream from "../Components/videoLiveStream";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


function VideoLiveStreamScreen(props) {
    // const [isTitle, setTitle] = useState([]);
    // const [channelTitle, setChannelTitle] = useState([]);
    // const [viewsCount, setViewsCount] = useState([]);
    // const [videoImageUrl, setVideoImageUrl] = useState(" ");
    let { state } = useLocation();
    const [streamData, setStreamData] = useState([])
    const [videoUrl, setVideoUrl] = useState("")
    const [temp, setTemp] = useState(state?.streamData1)


    useEffect(() => {
        if (props.Token) {
            EnrichData()
        }
        console.log("Url is ", state.streamData1)

    }, [props.Token])

    // const navigate = useNavigate();

    // const Temp = (index) => {
    //     navigate('VideoLiveStream', {
    //         state: { streamData1: props.videoUrl[index] }
    //     });
    // };

    const sameScreen = (url) => {
        console.log("Same Screen url is ", url)
        setTemp(url)
        console.log(temp)
    }

    const EnrichData = async (e) => {
        await fetch(
            `/media/livestreams`,

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

                const videoUrl = data.streams.map(stream => stream.url);

                setStreamData(streamIds)
                setVideoUrl(videoUrl)
                // console.log("Temp is ", videoUrl)

            })
            .catch((err) => console.log(" 'API' error is", err));
    };

    return (
        <>
            <VideoLiveStream streamData={streamData} videoUrl={videoUrl} temp={temp} sameScreen={sameScreen} />
        </>
    )
}

export default VideoLiveStreamScreen;

