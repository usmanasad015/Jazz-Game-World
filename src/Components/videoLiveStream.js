import React from 'react'
import GW_logo from "../Assets/Images/GW-logo.png";
import ChatImg1 from "../Assets/Images/ChatImg1.png"
import ChatImg2 from "../Assets/Images/ChatImg2.png"
import chatBoxInputIcon from "../Assets/Images/chatBoxInputIcon.png"
import { Card } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
// import { useHistory } from 'history';



function VideoLiveStream(props) {
    // stream map function
    // props.streamData.map((stream, index) => (
    //     console.log("URL is: ", stream.url)
    // )
    // )
    // return (
    //     <div>
    //         {
    //             props.streamData.map((stream, index) => (
    //                 stream.url ? (
    //                     <iframe
    //                         key={index}
    //                         width="560"
    //                         height="315"
    //                         src={stream.url}
    //                         title="YouTube Live Stream"
    //                         allowFullScreen
    //                     ></iframe>
    //                 ) : (
    //                     <p>Loading...</p>
    //                 )
    //             )
    //             )
    //         }

    //     </div>
    // )

    // const stream = props.streamData[1];

    // console.log("video stream url is  ", props.videoUrl[5])

    // console.log("Working data iss   ", props.streamData1)
    // console.log("wohoo", props.temp)

    // const navigate = useNavigate();

    // const Temp = (index) => {
    //     console.log("Temp called and stream data is ", props.videoUrl[index]);
    //     navigate('VideoLiveStream', {
    //         state: { streamData1: props.videoUrl[index] }
    //     });
    // };

    // console.log("ok1", props.streamData1)

    return (
        <div className="px-0">
            <div className=' outerDiv outerDivMobile outerDivVideoStream'>
                <div className="container">
                    <nav className="navbar  navbar-expand-lg navbar-light  border-0 navbarColor navMargin navbar-dark ">
                        <div className="container-fluid nav-transparent navbarColor navMobile">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div>
                                <img src={GW_logo} className="gwLogoDim d-md-block   d-none" alt="" />
                            </div>

                            <div className="collapse mt-2 navbar-collapse justify-content-center" id="navbarNav">
                                <ul className="navbar-nav " >
                                    <li className="nav-item mx-4">
                                        <a className="nav-link navLiColor" aria-current="page" href="/GamingSection ">GAMES</a>
                                    </li>

                                    <li className="nav-item mx-4">
                                        <a className="nav-link navLiColor" href=" /LiveStreamScreen">LIVE STREAM</a>
                                    </li>

                                    <li className="nav-item mx-4">
                                        <a className="nav-link navLiColor" href="# ">TOURNAMENTS</a>
                                    </li>

                                    <li className="nav-item mx-4">
                                        <a className="nav-link navLiColor" href="# ">SPIN AND WIN</a>
                                    </li>
                                </ul>
                            </div>

                            {/* <div className="input-group search-icon"> */}

                            <button className="btn btn-outline shadow-lg border-0 border-start-0 border rounded-pill ms-n3 searchIcon btnSearchMobile" type="button">
                                <svg stroke="white" stroke-width="0.3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" bi bi-search header__button-icon iconMobile" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </button>

                            <button type="button" className="d-btn  btnMobile ">SUBSCRIBE</button>
                            {/* </div> */}

                        </div>
                    </nav>

                    {/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */}

                    {/*  -------------------------------------- Video Tag --------------------------------------      */}

                    <div>
                        <video width="877" height="571px" controls autoPlay>
                            <source src={props.temp} type="video/mp4" />
                        </video>
                    </div>

                    {/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */}

                    {/* <source src="https://jazzgameworld.com.pk/gaming-uploads/videos/34_media.mp4" type="video/mp4" /> */}


                    {/* {Array.isArray(props.videoImageUrl) && props.videoImageUrl.map((imageUrl, index) => (
                        <div className='video-container temp'>
                            <div>
                                <video width="320" height="240" controls>
                                    <source src="https://jazzgameworld.com.pk/gaming-uploads/videos/34_media.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    ))} */}

                </div>
            </div>


            <div id="chat" className='priTextColor '>
                <div className='my-3'>
                    <div className='priTextColor d-inline justify-content-start mx-3 '>Live Chat </div>
                    <div className='priTextColor d-inline justify-content-end ml-4 chatNumber'>15000 people </div>
                </div>
                <div id="messages">

                    <ul style={{ display: 'flex', flexDirection: 'column' }} className='chaBoxList'>
                        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <div className="user-image ">
                                <img src={ChatImg1} alt="User 1" className='chatUserImg ' />
                            </div>
                            <div class="user-details">
                                <h2 className='chatBoxHead'>User 1</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <div className="user-image">
                                <img src={ChatImg2} alt="User 2" className='chatUserImg' />
                            </div>
                            <div className="user-details">
                                <h2 className='chatBoxHead'>User 2</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <div className="user-image">
                                <img src={ChatImg1} alt="User 1" className='chatUserImg' />
                            </div>
                            <div className="user-details">
                                <h2 className='chatBoxHead'>User 3</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <div className="user-image">
                                <img src={ChatImg2} alt="User 2" className='chatUserImg' />
                            </div>
                            <div className="user-details">
                                <h2 className='chatBoxHead'>User 4</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </li>

                    </ul>
                </div>

                <form id="message-form">
                    <input type="text" id="message-input" placeholder="Write your message" className='chatInputBox' />
                    <img src={chatBoxInputIcon} alt="" />
                </form>
            </div>

            {/* Recommmened Streams */}

            <div id="chat" className='priTextColor m-5 recStreams'>
                <div className='my-3'>
                    <div className='priTextColor d-inline justify-content-start mx-3 '>Recommended Streams </div>
                </div>
                <div id="messages">

                    <ul style={{ display: 'flex', flexWrap: 'wrap', listStyle: 'none', padding: 0 }}>
                        {props.streamData.map((stream, index) => (
                            <li key={index} style={{ margin: '10px', width: '300px' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>

                                    <Card className='mt-3 ' style={{ marginRight: '10px' }}>

                                        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */}
                                        {/* <a href={props.videoUrl[index]} className='cardThumbnail' > */}
                                        <a href="# " className='cardThumbnail' >
                                            <Card.Img variant="top" src={`https://jazzgameworld.com.pk/${stream.videoImage}`} onClick={() => props.sameScreen(stream.url)} />
                                        </a>

                                        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */}

                                    </Card>

                                    <div className='user-details'>
                                        <Card.Body>
                                            {/* <Card.Title className='cardStreamTitle' >{stream.title}</Card.Title> */}
                                            <Card.Text>{stream.channelTitle}</Card.Text>
                                            <Card.Text>{stream.viewsCount}</Card.Text>
                                        </Card.Body>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>

                </div>
            </div>

        </div>
    )
}

export default VideoLiveStream