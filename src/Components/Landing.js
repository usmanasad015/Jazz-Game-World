import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle';
import GW_logo from "../Assets/Images/GW-logo.png";
import mainCharacter from "../Assets/Images/pngegg.png"
import mainCharacterBlur from "../Assets/Images/mainCharacterBlur.png"
import sliderImg2 from "../Assets/Images/sliderImg2.png"
import sliderImg3 from "../Assets/Images/sliderImg3.png"
import pinkRect from "../Assets/Images/pinkRect.png"
import greyRect from "../Assets/Images/greyRect.png"
import blueRect from "../Assets/Images/blueRect.png"
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import insGamesImg1 from "../Assets/Images/insGamesImg1.png";
import insGamesImg2 from "../Assets/Images/insGamesImg2.png";
import insGamesImg3 from "../Assets/Images/insGamesImg3.png";
import insGamesImg4 from "../Assets/Images/insGamesImg4.png";
import insGamesImg5 from "../Assets/Images/insGamesImg5.png";

import dwnGamesImg1 from "../Assets/Images/dwnGamesImg1.png";
import dwnGamesImg2 from "../Assets/Images/dwnGamesImg2.png";
import dwnGamesImg3 from "../Assets/Images/dwnGamesImg3.png";
import dwnGamesImg4 from "../Assets/Images/dwnGamesImg4.png";
import dwnGamesImg5 from "../Assets/Images/dwnGamesImg5.png";
import dwnGamesImg6 from "../Assets/Images/dwnGamesImg6.png";

import marketPlaceImg1 from "../Assets/Images/marketPlaceImg1.png";
import marketPlaceImg2 from "../Assets/Images/marketPlaceImg2.png";
import marketPlaceImg3 from "../Assets/Images/marketPlaceImg3.png";
import marketPlaceImg4 from "../Assets/Images/marketPlaceImg4.png";
import VideoLiveStream from "../Components/videoLiveStream";


import centerModeSliderImg1 from "../Assets/Images/centerModeSliderImg1.png";
import centerModeSliderImg2 from "../Assets/Images/centerModeSliderImg2.png";
import centerModeSliderImg3 from "../Assets/Images/centerModeSliderImg3.png";
import centerModeSliderImg4 from "../Assets/Images/centerModeSliderImg4.png";
import centerModeSliderImg5 from "../Assets/Images/centerModeSliderImg5.png";
import { Row, Col } from 'react-bootstrap';

import cardPurpleStar from "../Assets/Images/cardPurpleStar.png"
import cardTransStar from "../Assets/Images/cardTransStar.png"

import { Navigate } from "react-router-dom";

import tornamentBanner from "../Assets/Images/tornamentBanner.png"
import { SocialIcon } from 'react-social-icons';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VideoLiveStreamScreen from '../Screens/videoLiveStreamScreen';
import { useNavigate } from "react-router-dom";


import Card from 'react-bootstrap/Card';

function Landing(props) {

    var settingsCenterMode = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '60px',
        // autoplay: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '100px',
                    slidesToShow: 1
                }
            }
        ]
    };

    var settingsInsGames = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        // autoplay: true,
        // centerMode: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.7,
                    slidesToScroll: 1,
                    infinite: false
                }
            }

        ]
        // autoplay: true,

    };

    var settingsDownGames = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        // autoplay: true,
        // centerMode: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.7,
                    slidesToScroll: 1,
                    infinite: false

                }
            }

        ]
        // autoplay: true,

    };

    const navigate = useNavigate();
    const Temp = (index) => {
        console.log("Temp called and stream data is ", props.videoUrl[index]);
        navigate('VideoLiveStream', {
            state: {
                streamData1: props.videoUrl[index]
            }
        });
    };



    return (
        <div className="px-0">
            <div className=' outerDiv outerDivMobile'>
                <div className="container">
                    <nav className="navbar  navbar-expand-lg navbar-light  border-0 navbarColor navMargin navbar-dark ">
                        <div className="container-fluid nav-transparent navbarColor navMobile">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div>
                                <img src={GW_logo} className="gwLogoDim d-md-block d-none" alt="" />
                            </div>

                            <div className="collapse mt-2 navbar-collapse justify-content-center" id="navbarNav">
                                <ul className="navbar-nav " >
                                    <li className='nav-item mx-4 active'>
                                        <a
                                            className='nav-link navLiColor '
                                            aria-current='page'
                                            href='/'
                                        >
                                            HOME
                                        </a>
                                    </li>
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

                            <button className="btn btn-outline shadow-lg border-0 border-start-0 border rounded-pill ms-n3 searchIcon btnSearchMobile" type="button">
                                <svg stroke="white" strokeWidth="0.3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" bi bi-search header__button-icon iconMobile" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </button>

                            <button type="button" className="d-btn  btnMobile ">SUBSCRIBE</button>

                            {/* </div> */}

                        </div>
                    </nav>

                    <div className='popGameDim secTextColor popGameDimMobile'>
                        <h5 className='popGamesMobile popGameDim992' >POPULAR GAMES</h5>
                    </div>


                    {/* for Mobile view  */}
                    <div className='priTextColor d-lg-none d-block'>
                        <h1 className='mainTextMobile' data-text="PUBG MOBILE">PUBG MOBILE</h1>
                    </div>


                    <div className='paraDim sec secTextColor d-none d-lg-block'>
                        <p className='dummyText'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                    </div>

                    {/* for Mobile view  */}
                    <div className='paraDimMobile sec secTextColor d-block d-lg-none mt-4'>
                        <p className='dummyTextMobile'>Lorem Ipsum Dolor Sit Amet Consectetur. Nam Et Mauris Adipiscing <br />Volutpat Sapien Ipsum Accumsan Pharetra. </p>
                    </div>
                </div>

                <div className='playDownBtn playDownBtnMobile'>
                    <button type="button" className="d-btn-play d-btn-playMobile py-1 mx-3">PLAY GAME</button>
                    <button type="button" className="  m-3 downloadBtn d-btn-Down  py-2 downloadBtnMobile">DOWNLOAD GAME</button>
                </div>

                <div>
                    <img src={mainCharacterBlur} className="mainCharacterBlur d-lg-block d-none" alt="" />
                </div>

                <div>
                    <img src={mainCharacter} className="mainCharacter d-md-block mainCharacterTab d-none" alt="" />
                </div>

                {/* mainCharacter Mobile */}

                <div className=''>
                    <img src={mainCharacter} className=" d-md-none d-block mainCharacterMobile  " alt="" />
                </div>

                <img src={pinkRect} className="pinkRect d-md-none d-block" alt="" />

                <img src={blueRect} className=" blueRect d-md-none d-block" alt="" />

                <img src={greyRect} className="d-md-none d-block greyRect " alt="" />

                <div className='priTextColor d-lg-block d-none'>
                    <h1 className='mainText' data-text="PUBG MOBILE">PUBG MOBILE</h1>
                </div>

                <div className='sliderDiv d-lg-block sliderDivMobile slick-trackT'>
                    <div className='sliderText '>
                        <h3 className='d-inline headLive headLiveMobile '>Live Streams</h3>
                        <h5 className='d-inline headSeeAll headSeeAllMobile '><a href="/LiveStreamScreen" className='text-reset text-decoration-none'> See All</a></h5>
                    </div>
                    <div className="row my-3 ">
                        <div className='col-7 '>

                            <div className='live-stream-slider sliderHeight '>

                                {/* -------------------------------------------- Banner SLider -------------------------------------------- */}

                                <Slider
                                    // asNavFor={nav1}
                                    // ref={slider2 => setNav2(slider2)}    
                                    slidesToShow={1.67}
                                    swipeToSlide={true}
                                    focusOnSelect={true}
                                    // autoplay={true}
                                    className="sliderHeight slick-slideBanner"

                                >
                                    {Array.isArray(props.videoImageUrlnew) && props.videoImageUrlnew.map((imageUrl, index) => (
                                        <img
                                            key={index}
                                            src={`https://jazzgameworld.com.pk/${imageUrl}`}
                                            className="w-100 tempSlider"
                                            alt="Banner Slider"
                                            onClick={() => Temp(index)}
                                        />
                                    ))}
                                </Slider>
                            </div>

                        </div>
                        <div className="col-5 "><img src={sliderImg3} className="sliderIcon sliderImg3Mobile" alt="" /></div>
                    </div>
                </div>

                {/* slider end */}

            </div>

            {/* -------------------------------------------- Center Mode SLider -------------------------------------------- */}


            <div className='withoutBannerBg'>
                <div className="row justify-content-center">
                    <div className="col-12">

                        <Slider className=' mx-auto my-5  centerSlider ' {...settingsCenterMode}>

                            {Array.isArray(props.videoImageUrl) && props.videoImageUrl.map((imageUrl, index) => (
                                // <a href={props.videoUrl[index]} key={index}>
                                <img
                                    key={index}
                                    src={`https://jazzgameworld.com.pk/${imageUrl}`}
                                    className="w-100 px-3 centerModeSlider"
                                    alt="Banner Slider"
                                    onClick={() => Temp(index)}
                                />
                                // </a>
                            ))}

                        </Slider>
                    </div>
                </div>

                {/* -------------------------------------------- Instant Games Section -------------------------------------------- */}

                <div className='container  d-none d-xl-block d-flex inlineHead mt-5'>
                    <h1 className='text-light opacity-25 mt-5  cardMainHead insHeading' data-text="INSTANT GAMES">INSTANT</h1>
                    <h1 className='text-light cardTransMainHead gameHeading'> GAMES</h1>
                </div>

                <div className="insGamesSec container mt-3 sliderRtPadding">
                    <div className='container my-2'>
                        <h6 className=' my- d-inline '> <a href="# " className='text-decoration-none text-muted' > PLAY INSTANT GAMES </a> </h6>
                        <h6 className=' my-0 d-inline float-end '> <a href="# " className='text-decoration-none text-muted' > See all </a></h6>
                    </div>
                    <div class="row justify-content-center ">

                        <div className="col-12  sliderRtPadding mb-5">
                            <Slider {...settingsInsGames} className=''>
                                {props.webGameData.map((stream, index) => (
                                    <div class="col-lg-2 col-md-6">
                                        <Card className='mt-3 mx-2 cardBrdRadius allCardBg'>
                                            <Card.Img key={index} variant="top" src={`https://jazzgameworld.com.pk${stream.image}`} className='instantGamesImgHeight' />
                                            <Card.Body>
                                                <Card.Title>{stream.title}</Card.Title>
                                                <button className='cardBtnShGame py-1'>Shooting games</button>
                                                <button className='cardBtnAction py-1 mx-2'>Action</button>
                                                <button className='cardBtnLvlUp py-1 '>Level UP</button>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                ))}
                            </Slider>
                        </div>

                    </div>
                </div>

                {/* -------------------------------------------- Download Games Section -------------------------------------------- */}

                <div className='container  d-none d-xl-block d-flex inlineHead mt-5'>
                    <h1 className='text-light opacity-25 mt-5 downGameHead  cardMainHead ' data-text="INSTANT GAMES">DOWNLOAD</h1>
                    <h1 className='text-light cardTransMainHead downGameHead'> GAMES</h1>
                </div>

                <div className="mt-2 container sliderRtPadding">
                    <div className='container my-2'>
                        <h6 className=' my- d-inline '> <a href="# " className='text-decoration-none text-muted' >DOWNLOAD GAMES </a> </h6>
                        <h6 className=' my-0 d-inline float-end '> <a href="# " className='text-decoration-none text-muted' > See all </a></h6>
                    </div>

                    <div class="row justify-content-center ">

                        <div className="col-12  sliderRtPadding mb-5">
                            <Slider {...settingsInsGames} className=''>
                                {props.gameData.map((stream, index) => (
                                    <div class="col-lg-2 col-md-6">
                                        <Card className='mt-3 mx-2 cardBrdRadius allCardBg'>
                                            <Card.Img key={index} variant="top" src={`https://jazzgameworld.com.pk${stream.image}`} className='instantGamesImgHeight' />
                                            <Card.Body>
                                                <Card.Title>{stream.title}</Card.Title>
                                                <button className='cardBtnShGame py-1'>Shooting games</button>
                                                <button className='cardBtnAction py-1 mx-2'>Action</button>
                                                <button className='cardBtnLvlUp py-1 '>Level UP</button>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                ))}
                            </Slider>
                        </div>

                    </div>

                    {/* <div className="row   ">
                        <Slider {...settingsDownGames} className='' >
                            <div className="col-lg-2 col-md-6 sliderRtPadding mb-5">
                                <Card style={{}} className='mx-2 cardBrdRadius allCardBg'>
                                    <img src={dwnGamesImg1} alt="" />
                                    <Card.Body>
                                        <Card.Title className='cTitleFontSize text-lg-center'>PUBG Mobile Game</Card.Title>
                                        <div className='d-flex my-3 mx-3'>
                                            <img src={cardPurpleStar} alt="" />
                                            <img src={cardPurpleStar} alt="" />
                                            <img src={cardPurpleStar} alt="" />
                                            <img src={cardTransStar} alt="" />
                                            <img src={cardTransStar} alt="" />
                                        </div>
                                        <button className='cardBtnShGame py-1 mx-2  '>Shooting games</button>
                                        <button className='cardBtnAction py-1 '>Action</button>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col-lg-2 col-md-6">
                                <Card style={{}} className='mx-2 cardBrdRadius allCardBg'>
                                    <img src={dwnGamesImg2} alt="" />
                                    <Card.Body>
                                        <Card.Title className='cTitleFontSize text-lg-center'>PUBG Mobile Game</Card.Title>
                                        <div className='d-flex my-3 mx-3'>
                                            <img src={cardPurpleStar} alt="" />
                                            <img src={cardPurpleStar} alt="" />
                                            <img src={cardPurpleStar} alt="" />
                                            <img src={cardTransStar} alt="" />
                                            <img src={cardTransStar} alt="" />
                                        </div>
                                        <button className='cardBtnShGame py-1 mx-2  '>Shooting games</button>
                                        <button className='cardBtnAction py-1 '>Action</button>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col-lg-2 col-md-6">
                                <Card style={{}} className='mx-2 cardBrdRadius allCardBg' >
                                    <img src={dwnGamesImg3} alt="" />
                                    <Card.Body>
                                        <Card.Title className='cTitleFontSize text-lg-center'>PUBG Mobile Game</Card.Title>
                                        <div className='d-flex my-3 mx-3'>
                                            <img src={cardPurpleStar} alt="" />
                                            <img src={cardPurpleStar} alt="" />
                                            <img src={cardPurpleStar} alt="" />
                                            <img src={cardTransStar} alt="" />
                                            <img src={cardTransStar} alt="" />
                                        </div>
                                        <button className='cardBtnShGame py-1 mx-2  '>Shooting games</button>
                                        <button className='cardBtnAction py-1 '>Action</button>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col-lg-2 col-md-6">
                                <Card style={{}} className='mx-2 cardBrdRadius allCardBg'>
                                    <img src={dwnGamesImg4} alt="" />
                                    <Card.Body>
                                        <Card.Title className='cTitleFontSize text-lg-center'>PUBG Mobile Game</Card.Title>
                                        <div className='d-flex my-3 mx-3'>
                                            <img src={cardPurpleStar} alt="" />
                                            <img src={cardPurpleStar} alt="" />
                                            <img src={cardPurpleStar} alt="" />
                                            <img src={cardTransStar} alt="" />
                                            <img src={cardTransStar} alt="" />
                                        </div>
                                        <button className='cardBtnShGame py-1 mx-2  '>Shooting games</button>
                                        <button className='cardBtnAction py-1 '>Action</button>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col-lg-2 col-md-6">
                                <Card style={{}} className='mx-2 cardBrdRadius allCardBg'>
                                    <img src={dwnGamesImg5} alt="" />
                                    <Card.Body>
                                        <Card.Title className='cTitleFontSize text-lg-center'>PUBG Mobile Game</Card.Title>
                                        <div className='d-flex my-3 mx-3'>
                                            <img src={cardPurpleStar} alt="" />
                                            <img src={cardPurpleStar} alt="" />
                                            <img src={cardPurpleStar} alt="" />
                                            <img src={cardTransStar} alt="" />
                                            <img src={cardTransStar} alt="" />
                                        </div>
                                        <button className='cardBtnShGame py-1 mx-2  '>Shooting games</button>
                                        <button className='cardBtnAction py-1 '>Action</button>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col-lg-2 col-md-6">
                                <Card style={{}} className='mx-2 cardBrdRadius allCardBg'>
                                    <img src={dwnGamesImg2} alt="" />
                                    <Card.Body>
                                        <Card.Title className='cTitleFontSize text-lg-center'>PUBG Mobile Game</Card.Title>
                                        <div className='d-flex my-3 mx-3'>
                                            <img src={cardPurpleStar} alt="" />
                                            <img src={cardPurpleStar} alt="" />
                                            <img src={cardPurpleStar} alt="" />
                                            <img src={cardTransStar} alt="" />
                                            <img src={cardTransStar} alt="" />
                                        </div>
                                        <button className='cardBtnShGame py-1 mx-2  '>Shooting games</button>
                                        <button className='cardBtnAction py-1 '>Action</button>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col-lg-2 col-md-6">
                                <Card style={{}} className='mx-2 cardBrdRadius allCardBg'>
                                    <img src={dwnGamesImg6} alt="" />
                                    <Card.Body>
                                        <Card.Title className='cTitleFontSize text-lg-center'>PUBG Mobile Game</Card.Title>
                                        <div className='d-flex my-3 mx-3'>
                                            <img src={cardPurpleStar} alt="" />
                                            <img src={cardPurpleStar} alt="" />
                                            <img src={cardPurpleStar} alt="" />
                                            <img src={cardTransStar} alt="" />
                                            <img src={cardTransStar} alt="" />
                                        </div>
                                        <button className='cardBtnShGame py-1 mx-2  '>Shooting games</button>
                                        <button className='cardBtnAction py-1 '>Action</button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Slider >
                    </div> */}

                </div>

                {/* -------------------------------------------- Market Place Section -------------------------------------------- */}

                <div className='container  d-none d-xl-block d-flex inlineHead mt-5'>
                    <h1 className='text-light opacity-25 mt-5  cardMainHead marketPlaceHead' data-text="INSTANT GAMES">MARKET</h1>
                    <h1 className='text-light cardTransMainHead marketPlaceHead'> PLACE</h1>
                </div>

                <div className="insGamesSec mt-2 container sliderRtPadding">
                    <div className='container my-2 '>
                        <h6 className='mx-3 my- d-inline '> <a href="# " className='text-decoration-none text-muted' >MARKET PLACE</a> </h6>
                        <h6 className='mx-3 my-0 d-inline float-end '> <a href="# " className='text-decoration-none text-muted' > See all </a></h6>
                    </div>
                    <div className="row  d-flex justify-content-center ">
                        <Slider {...settingsInsGames} className='' >

                            <div className="col-lg-2 col-md-6 sliderRtPadding">
                                <Card style={{}} className='mx-2 cardBrdRadius allCardBg'>
                                    <img src={marketPlaceImg1} alt="" />
                                    <Card.Body className=''>
                                        <Card.Title className='cardTitle'>PUBG Mobile Game</Card.Title>
                                        <div className='cardSecText mb-3'>PUBG Mobile Game</div>

                                        <div className='d-flex cardBtnSpace'>
                                            <div className=''>
                                                <div className='cardSecText'>Rs 1500</div>
                                                <div className='cardSecText'> Per gift</div>
                                            </div>
                                            <button type="button" className="d-btn  btnMobile d-flex cardBtnMrktPlace ">BUY NOW</button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col-lg-2 col-md-6">
                                <Card style={{}} className='mx-2 cardBrdRadius allCardBg'>
                                    <img src={marketPlaceImg2} alt="" />
                                    <Card.Body className=''>
                                        <Card.Title className='cardTitle'>PUBG Mobile Game</Card.Title>
                                        <div className='cardSecText mb-3'>PUBG Mobile Game</div>

                                        <div className='d-flex cardBtnSpace'>
                                            <div className=''>
                                                <div className='cardSecText'>Rs 1500</div>
                                                <div className='cardSecText'> Per gift</div>
                                            </div>
                                            <button type="button" className="d-btn  btnMobile d-flex cardBtnMrktPlace ">BUY NOW</button>
                                        </div>

                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col-lg-2 col-md-6">
                                <Card style={{}} className='mx-2 cardBrdRadius allCardBg'>
                                    <img src={marketPlaceImg3} alt="" />
                                    <Card.Body className=''>
                                        <Card.Title className='cardTitle'>PUBG Mobile Game</Card.Title>
                                        <div className='cardSecText mb-3'>PUBG Mobile Game</div>

                                        <div className='d-flex cardBtnSpace'>
                                            <div className=''>
                                                <div className='cardSecText'>Rs 1500</div>
                                                <div className='cardSecText'> Per gift</div>
                                            </div>
                                            <button type="button" className="d-btn  btnMobile d-flex cardBtnMrktPlace ">BUY NOW</button>
                                        </div>

                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col-lg-2 col-md-6">
                                <Card style={{}} className='mx-2 cardBrdRadius allCardBg'>
                                    <img src={marketPlaceImg4} alt="" />
                                    <Card.Body className=''>
                                        <Card.Title className='cardTitle'>PUBG Mobile Game</Card.Title>
                                        <div className='cardSecText mb-3'>PUBG Mobile Game</div>

                                        <div className='d-flex cardBtnSpace'>
                                            <div className=''>
                                                <div className='cardSecText'>Rs 1500</div>
                                                <div className='cardSecText'> Per gift</div>
                                            </div>
                                            <button type="button" className="d-btn  btnMobile d-flex cardBtnMrktPlace ">BUY NOW</button>
                                        </div>

                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col-lg-2 col-md-6">
                                <Card style={{}} className='mx-2 cardBrdRadius allCardBg'>
                                    <img src={insGamesImg3} alt="" />
                                    <Card.Body className=''>
                                        <Card.Title className='cardTitle'>PUBG Mobile Game</Card.Title>
                                        <div className='cardSecText mb-3'>PUBG Mobile Game</div>

                                        <div className='d-flex cardBtnSpace'>
                                            <div className=''>
                                                <div className='cardSecText'>Rs 1500</div>
                                                <div className='cardSecText'> Per gift</div>
                                            </div>
                                            <button type="button" className="d-btn  btnMobile d-flex cardBtnMrktPlace ">BUY NOW</button>
                                        </div>

                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col-lg-2 col-md-6">
                                <Card style={{}} className='mx-2 cardBrdRadius allCardBg'>
                                    <img src={marketPlaceImg2} alt="" />
                                    <Card.Body className=''>
                                        <Card.Title className='cardTitle'>PUBG Mobile Game</Card.Title>
                                        <div className='cardSecText mb-3'>PUBG Mobile Game</div>

                                        <div className='d-flex cardBtnSpace'>
                                            <div className=''>
                                                <div className='cardSecText'>Rs 1500</div>
                                                <div className='cardSecText'> Per gift</div>
                                            </div>
                                            <button type="button" className="d-btn  btnMobile d-flex cardBtnMrktPlace ">BUY NOW</button>
                                        </div>

                                    </Card.Body>
                                </Card>
                            </div>
                        </Slider>
                    </div>
                </div>

                {/* -------------------------------------------- Games Competition Section -------------------------------------------- */}

                <div className="mt-5 tornamentBanner">
                    <img src={tornamentBanner} className="w-100" alt="" />

                    <div className=" text-center mx-auto gamesCompSec  my-2">
                        <h2 className='gcFontMob gcFontWeb '>GAMES  <br />
                            COMPETITION
                        </h2>

                        <h6 className='mt-lg-5 gcTextFontMob gcTextFontWeb'>Compete to be Top in Leader <br />
                            board and Win Cash Prizes.
                        </h6>

                        <div className='playDownBtn playDownBtnMobile mx-auto'>
                            <button type="button" className="d-btn-play d-btn-playMobile py-1 mx-3 mt-3 btnWidthMob">SIGN UP </button>
                        </div>
                    </div>

                </div>

                <div className='mx-auto text-center'>
                    <p className='d-inline text-light'>
                        Newsletter
                    </p>

                    &nbsp; &nbsp;

                    <div className='d-inline text-center mx-auto'>
                        <input type="email" className='footerInput py-2 px-3 border-0 inputEmail ' placeholder='Your email' />
                    </div>
                </div>

                <hr className='horLine container my-4 d-' />

                {/* -------------------------------------------- Footer Section -------------------------------------------- */}

                <div className="container mx-auto pb-3">
                    <div className="row">

                        <div className="col-4 text-center">
                            <img src={GW_logo} className="gwLogoDim  mx-auto" alt="" />
                        </div>

                        <div className="col-4 text-center pt-4 mx-0 text-light">
                            © 2023 ABC. All Rights Reserved.
                        </div>

                        <div className="col-4 text-center pt-3 mx-auto">

                            <div className='d-inline d-flex mx-auto'>
                                <SocialIcon url="https://facebook.com/jaketrent" className='mx-1 border-0' bgColor="#4a4a51" />
                                <SocialIcon url="https://linkedin.com/jaketrent" bgColor="#4a4a51" fill="#4a4a51" className='mx-1 border-0' />
                                <SocialIcon url="https://twitter.com/jaketrent" bgColor="#4a4a51" className='mx-1' />
                            </div>

                            {/* <img src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-square2-512.png" alt="Facebook icon with black background" width="50" /> */}

                            {/* <SocialIcon className='mx-1' url="https://facebook.com/jaketrent" />
                                <SocialIcon className='mx-1' url="https://linkedin.com/jaketrent" />
                                <SocialIcon className='mx-1' url="httNewsletter   ps://twitter.com/jaketrent" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )

}

export default Landing;