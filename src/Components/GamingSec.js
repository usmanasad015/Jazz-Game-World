import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle'
import GW_logo from '../Assets/Images/GW-logo.png'
import mainCharacter from '../Assets/Images/pngegg.png'
import mainCharacterBlur from '../Assets/Images/mainCharacterBlur.png'

import pinkRect from '../Assets/Images/pinkRect.png'
import greyRect from '../Assets/Images/greyRect.png'
import blueRect from '../Assets/Images/blueRect.png'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

function GamingSec(props) {
    return (
        <div className='px-0 withoutBannerBg'>
            <div className=' outerDiv outerDivMobile '>
                <div className='container'>
                    <nav className='navbar  navbar-expand-lg navbar-light  border-0 navbarColor navMargin navbar-dark '>
                        <div className='container-fluid nav-transparent navbarColor navMobile'>
                            <button
                                className='navbar-toggler'
                                type='button'
                                data-bs-toggle='collapse'
                                data-bs-target='#navbarNav'
                                aria-controls='navbarNav'
                                aria-expanded='false'
                                aria-label='Toggle navigation'
                            >
                                <span className='navbar-toggler-icon'></span>
                            </button>

                            <div>
                                <img
                                    src={GW_logo}
                                    className='gwLogoDim d-md-block   d-none'
                                    alt=''
                                />
                            </div>

                            <div
                                className='collapse mt-2 navbar-collapse justify-content-center'
                                id='navbarNav'
                            >
                                <ul className='navbar-nav '>
                                    <li className='nav-item mx-4'>
                                        <a
                                            className='nav-link navLiColor '
                                            aria-current='page'
                                            href='/'
                                        >
                                            HOME
                                        </a>
                                    </li>

                                    <li className='nav-item mx-4 active'>
                                        <a
                                            className='nav-link navLiColor '
                                            aria-current='page'
                                            href='# '
                                        >
                                            GAMES
                                        </a>
                                    </li>

                                    <li className='nav-item mx-4'>
                                        <a
                                            className='nav-link navLiColor'
                                            href=' /LiveStreamScreen'
                                        >
                                            LIVE STREAM
                                        </a>
                                    </li>

                                    <li className='nav-item mx-4'>
                                        <a className='nav-link navLiColor' href='# '>
                                            TOURNAMENTS
                                        </a>
                                    </li>

                                    <li className='nav-item mx-4'>
                                        <a className='nav-link navLiColor' href='# '>
                                            SPIN AND WIN
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* <div className
="input-group search-icon"> */}

                            <button
                                className='btn btn-outline shadow-lg border-0 border-start-0 border rounded-pill ms-n3 searchIcon btnSearchMobile'
                                type='button'
                            >
                                <svg
                                    stroke='white'
                                    stroke-width='0.3'
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='16'
                                    height='16'
                                    fill='currentColor'
                                    className=' bi bi-search header__button-icon iconMobile'
                                    viewBox='0 0 16 16'
                                >
                                    <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
                                </svg>
                            </button>

                            <button type='button' className='d-btn  btnMobile '>
                                SUBSCRIBE
                            </button>

                            {/* </div> */}
                        </div>
                    </nav>

                    <div className='popGameDim secTextColor popGameDimMobile'>
                        <h5 className='popGamesMobile popGameDim992'>POPULAR GAMES</h5>
                    </div>

                    {/* for Mobile view  */}
                    <div className='priTextColor d-lg-none d-block'>
                        <h1 className='mainTextMobile' data-text='PUBG MOBILE'>
                            PUBG MOBILE
                        </h1>
                    </div>

                    <div className='paraDim sec secTextColor d-none d-lg-block'>
                        <p className='dummyText'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.{' '}
                        </p>
                        <p>
                            Lorem Ipsum has been the industry's standard dummy text ever
                            since.
                        </p>
                    </div>

                    {/* for Mobile view  */}
                    <div className='paraDimMobile sec secTextColor d-block d-lg-none mt-4'>
                        <p className='dummyTextMobile'>
                            Lorem Ipsum Dolor Sit Amet Consectetur. Nam Et Mauris Adipiscing{' '}
                            <br />
                            Volutpat Sapien Ipsum Accumsan Pharetra.{' '}
                        </p>
                    </div>
                </div>

                <div className='playDownBtn playDownBtnMobile'>
                    <button
                        type='button'
                        className='d-btn-play d-btn-playMobile py-1 mx-3'
                    >
                        PLAY GAME
                    </button>
                    <button
                        type='button'
                        className='  m-3 downloadBtn d-btn-Down  py-2 downloadBtnMobile'
                    >
                        DOWNLOAD GAME
                    </button>
                </div>

                <div>
                    <img
                        src={mainCharacterBlur}
                        className='mainCharacterBlur d-lg-block d-none'
                        alt=''
                    />
                </div>

                <div>
                    <img
                        src={mainCharacter}
                        className='mainCharacter d-md-block mainCharacterTab d-none'
                        alt=''
                    />
                </div>

                {/* mainCharacter Mobile */}

                <div className=''>
                    <img
                        src={mainCharacter}
                        className=' d-md-none d-block mainCharacterMobile  '
                        alt=''
                    />
                </div>

                <img src={pinkRect} className='pinkRect d-md-none d-block' alt='' />

                <img src={blueRect} className=' blueRect d-md-none d-block' alt='' />

                <img src={greyRect} className='d-md-none d-block greyRect ' alt='' />

                <div className='priTextColor d-lg-block d-none'>
                    <h1 className='mainText' data-text='PUBG MOBILE'>
                        PUBG MOBILE
                    </h1>
                </div>

                {/* 3x4 Game Section */}
            </div>

            <Tabs
                defaultActiveKey='profile'
                id='uncontrolled-tab-example'
                className='mb-3 container gameTabBtn my-5  border-0'
            >

                {/* --------------------------- Play Instant Games tab ---------------------------  */}

                <Tab eventKey='home' title='PLAY INSTANT GAMES' className='gameTabBtn '
                //  onClick={props.webGames()}
                >
                    <div className=' py-4 '>
                        <Container className='my-3 '>
                            <Row xs={1} sm={2} md={4} className='g-4 '>
                                {props.webGameData.map((stream, index) => (
                                    <Col key={index}>
                                        <Card className='mt-3 border-0 rounded-4 my-5 gamingCard'>
                                            <Card.Img
                                                variant='top'
                                                src={`https://jazzgameworld.com.pk/${stream.image}`}
                                                className='gameCardImg'
                                            />

                                            <Card.Body className='cardBodyMob'>
                                                <Card.Title className='priTextColor titBtnSpace'>
                                                    {stream.title}
                                                    {/* <button type="button" className="d-btn  btnMobile  cardGamBtnMrktPlace ">BUY NOW</button> */}
                                                    <div className='d-none d-md-block '>
                                                        <button type="button" className="d-btn  btnMobile  cardGamBtnMrktPlace ">Play Now</button>
                                                    </div>

                                                </Card.Title>

                                                {/* <Card.Text>{stream.description}</Card.Text>
                                                <Card.Text>{stream.viewsCount}</Card.Text> */}
                                                <button className='cardBtnShGame py-1 d-inline'>
                                                    Shooting games
                                                </button>
                                                <button className='cardBtnAction py-1 mx-2 d-inline'>
                                                    Action
                                                </button>
                                                {/* <button className='cardBtnLvlUp py-1 d-none d-sm-block d-inline'>Level UP</button> */}

                                                <div className='d-block d-sm-block d-md-none'>
                                                    <button type="button" className="d-btn  btnMobile  cardGamBtnMrktPlace ">Play NOW</button>
                                                </div>

                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </div>
                </Tab>

                {/* --------------------------- Mobile Games tab ---------------------------  */}

                <Tab eventKey='profile' title='MOBILE GAMES'
                // onClick={props.mobileGames()}
                >
                    <div className=' py-4 '>
                        <Container className='my-3 '>
                            <Row xs={1} sm={2} md={4} className='g-4 '>
                                {props.mobGameData.map((stream, index) => (
                                    <Col key={index}>
                                        <Card className='mt-3 border-0 rounded-4 my-5 gamingCard'>
                                            <Card.Img
                                                variant='top'
                                                src={`https://jazzgameworld.com.pk/${stream.image}`}
                                                className='gameCardImg'
                                            />
                                            <Card.Body className='cardBodyMob'>
                                                <div className='d-inline'>
                                                    <Card.Title className='priTextColor  titBtnSpace'>
                                                        {stream.title}
                                                        {/* <button type="button" className="d-btn  btnMobile  cardGamBtnMrktPlace ">BUY NOW</button> */}
                                                        <div className='d-none d-md-block '>
                                                            <button type="button" className="d-btn  btnMobile  cardGamBtnMrktPlace ">Play NOW</button>
                                                        </div>
                                                    </Card.Title>
                                                </div>

                                                {/* <Card.Text>{stream.description}</Card.Text>
                                                <Card.Text>{stream.viewsCount}</Card.Text> */}
                                                <button className='cardBtnShGame py-1 d-inline'>
                                                    Shooting games
                                                </button>
                                                <button className='cardBtnAction py-1 mx-2 d-inline'>
                                                    Action
                                                </button>
                                                {/* <button className='cardBtnLvlUp py-1 '>Level UP</button> */}

                                                <div className='d-block d-sm-block d-md-none'>
                                                    <button type="button" className="d-btn  btnMobile  cardGamBtnMrktPlace ">Play NOW</button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </div>
                </Tab>

                {/* --------------------------- MULTIPLAYER GAMES tab ---------------------------  */}


                <Tab eventKey='contact' title='MULTIPLAYER GAMES'
                // onClick={props.multiplayerGames()}
                >
                    <div className=' py-4 '>
                        <Container className='my-3 '>
                            <Row xs={1} sm={2} md={4} className='g-4 '>
                                {props.mPlayerGameData.map((stream, index) => (
                                    <Col key={index}>
                                        <Card className='mt-3 border-0 rounded-4 my-5 gamingCard'>
                                            <Card.Img
                                                variant='top'
                                                src={`https://jazzgameworld.com.pk/${stream.image}`}
                                                className='gameCardImg'
                                            />
                                            <Card.Body className=''>
                                                <Card.Title className='priTextColor titBtnSpace'>
                                                    {stream.title}
                                                    {/* <button type="button" className="d-btn  btnMobile  cardGamBtnMrktPlace ">BUY NOW</button> */}
                                                    <div className='d-none d-md-block '>
                                                        <button type="button" className="d-btn  btnMobile  cardGamBtnMrktPlace ">Play NOW</button>
                                                    </div>
                                                </Card.Title>

                                                {/* <Card.Text>{stream.description}</Card.Text>
                                                <Card.Text>{stream.viewsCount}</Card.Text> */}
                                                <button className='cardBtnShGame py-1 d-inline'>
                                                    Shooting games
                                                </button>
                                                <button className='cardBtnAction py-1 mx-2 d-inline'>
                                                    Action
                                                </button>
                                                {/* <button className='cardBtnLvlUp py-1 '>Level UP</button> */}
                                                <div className='d-block d-sm-block d-md-none'>
                                                    <button type="button" className="d-btn  btnMobile  cardGamBtnMrktPlace ">Play NOW</button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </div>
                </Tab>
            </Tabs>

            <div className='mx-auto text-center'>
                <p className='d-inline text-light'>Newsletter</p>
                &nbsp; &nbsp;
                <div className='d-inline text-center mx-auto'>
                    <input
                        type='email'
                        className='footerInput py-2 px-3 border-0 inputEmail '
                        placeholder='Your email'
                    />
                </div>
            </div>

            <hr className='horLine container my-4 d-' />

            {/* -------------------------------------------- Footer Section -------------------------------------------- */}

            <div className='container mx-auto pb-3 '>
                <div className='row'>
                    <div className='col-4 text-center'>
                        <img src={GW_logo} className='gwLogoDim  mx-auto' alt='' />
                    </div>

                    <div className='col-4 text-center pt-4 mx-0 text-light'>
                        © 2023 ABC. All Rights Reserved.
                    </div>

                    <div className='col-4 text-center pt-3 mx-auto'>
                        <div className='d-inline d-flex mx-auto'>
                            <SocialIcon
                                url='https://facebook.com/jaketrent'
                                className='mx-1 border-0'
                                bgColor='#4a4a51'
                            />
                            <SocialIcon
                                url='https://linkedin.com/jaketrent'
                                bgColor='#4a4a51'
                                fill='#4a4a51'
                                className='mx-1 border-0'
                            />
                            <SocialIcon
                                url='https://twitter.com/jaketrent'
                                bgColor='#4a4a51'
                                className='mx-1'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GamingSec
