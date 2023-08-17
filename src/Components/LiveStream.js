import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import GW_logo from "../Assets/Images/GW-logo.png";
import { useNavigate } from "react-router-dom";

function LiveStream(props) {

    // const navigate = useNavigate();

    // const Temp = (index) => {
    //     console.log("Temp called and stream data is ", props.videoUrl[index]);
    //     navigate('VideoLiveStream', {
    //         state: {
    //             streamData1: props.videoUrl[index]
    //         }
    //     });
    // };

    return (
        <div className='withoutBannerBg'>
            <div className=' outerDivLiveStrm outerDivMobile'>
                <div className="container">
                    <nav className="navbar  navbar-expand-lg navbar-light  border-0 navbarColor navMargin navbar-dark ">
                        <div className="container-fluid nav-transparent navbarColor navMobile">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div>
                                <a href='/'>
                                    <img src={GW_logo} className="gwLogoDim d-md-block d-none" alt="" />
                                </a>
                            </div>

                            <div className="collapse mt-2 navbar-collapse justify-content-center" id="navbarNav">
                                <ul className="navbar-nav " >
                                    <li className='nav-item mx-4'>
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

                                    <li className="nav-item mx-4 active">
                                        <a className="nav-link navLiColor" href="#">LIVE STREAM</a>
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
                        </div>
                    </nav>
                </div>
                {/* slider end */}

                <div className='container  d-none d-xl-block d-flex inlineHead text-center '>
                    <h1 className='text-light opacity-25 mt-5  cardMainHead liveStrSecHead' data-text="INSTANT GAMES">LIVE</h1>
                    <h1 className='text-light cardTransMainHead liveStrSecHead'> STREAMS</h1>
                </div>
                <Container>
                    <Row xs={1} sm={2} md={4} className="g-4 mobileCenterLiveStrm">
                        {props.streamData.map((stream, index) => (
                            <Col key={index}>
                                <Card className='mt-3 allCardBg cardLiveStrm'

                                >
                                    <Card.Img variant="top" className='cardImgLiveStrm' src={`https://jazzgameworld.com.pk/${stream.videoImage}`}
                                    // onClick={() => Temp(index)} 
                                    />
                                    <Card.Body className='LiveStrmBodyFont'>
                                        <Card.Title className='LiveStrmTitFont'>{stream.title}</Card.Title>
                                        <Card.Text>{stream.channelTitle}</Card.Text>
                                        <Card.Text>{stream.viewsCount} views</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default LiveStream