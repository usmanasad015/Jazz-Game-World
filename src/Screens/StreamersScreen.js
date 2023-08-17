import Streamers from '../Components/Streamers'
import React, { useState, useEffect } from "react";


function StreamersScreen(props) {
    const [streamData, setStreamData] = useState([])

    useEffect(() => {
        if (props.Token) {
            EnrichData()
        }
    }, [props.Token])

    const EnrichData = async (e) => {
        await fetch(
            `streamer/popular/12/`,

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
                const streamIds = data.streamers.map(stream => ({
                    picture: stream.picture,
                    firstName: stream.firstName,
                    lastName: stream.lastName,
                    subscriberCount: stream.subscriberCount

                }));
                setStreamData(streamIds);
            })
            .catch((err) => console.log("api error is", err));
    };

    return (
        <Streamers streamData={streamData} />
    )
}

export default StreamersScreen