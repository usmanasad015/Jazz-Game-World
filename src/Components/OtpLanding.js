import React, { useEffect, useState } from 'react'
import OTPInput, { ResendOTP } from "otp-input-react";
import GW_logo from "../Assets/Images/GW-logo.png";
import otpImg1 from "../Assets/Images/otpImg1.png"

function OtpLanding(props) {
    // ph number input box valications
    function keyFunction(event) {
        const keyCode = event.keyCode || event.which;
        const keyValue = String.fromCharCode(keyCode);
        const validChars = /^[0-9]+$/;

        if (!validChars.test(keyValue)) {
            event.preventDefault();
        }
    }

    return (
        <div className="px-0">
            <div className=' outerDiv outerDivMobile'>
                <div className="container">
                    <nav className="navbar  navbar-expand-lg navbar-light  border-0 navbarColor navMargin navbar-dark otpBoxMargin">
                        <div className="container-fluid nav-transparent navbarColor navMobile">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div>
                                <img src={GW_logo} className="gwLogoDim d-md-block   d-none" alt="" />
                            </div>

                            <div className="collapse mt-2 navbar-collapse justify-content-center" id="navbarNav">
                                <ul className="navbar-nav ">
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

                    {/* ------------------------------- Enter Ph number -------------------------------  */}

                    {props.otpBox ?
                        <div className='border rounded p-5 my-5 text-center mainBox'>
                            <div className='priTextColor'>
                                <h3>Kheelo or Jeeto <br />
                                    Upto Rs 10,000
                                </h3>
                                <p className='secTextColor py-4'>Please input number to get OTP</p>
                            </div>

                            <form action="" onSubmit={props.phNumber ? props.SignUp : (e) => e.preventDefault()}>
                                <div className="mb-3 text-center mx-auto">
                                    <div className="input-group">
                                        <div className="input-group-prepend mx-2">
                                            <span className="input-group-text">+92</span>
                                        </div>
                                        <input
                                            type='tel'
                                            autoComplete='off'
                                            className="form-control rounded"
                                            placeholder='XXX - XXX - XXXX'
                                            value={props.phNumber}
                                            onChange={props.handleTextChange}
                                            maxLength='10'
                                            onKeyPress={keyFunction}
                                            pattern='3[0-9]{9}'
                                        />
                                    </div>
                                </div>

                                <div className="input-group-append py-3">
                                    <button
                                        className="d-btn btnMobile btn btn-outline-secondary rounded-4 w-100"
                                        type="submit"
                                        id="button-addon2"
                                    >
                                        GET OTP
                                    </button>
                                </div>
                            </form>

                            <p className='secTextColor py-2 mainBoxText'>* Only for Rs. 3.5 + Tax/Day (Prepaid)  /  & Rs. 35.85 + <br /> Tax/Month (Postpaid) *</p>
                        </div> :

                        // -------------------------- Otp Number Div -------------------------- 
                        <div className='border rounded p-5 my-5 text-center mainBox'>
                            <div className='priTextColor'>
                                <h3>Kheelo or Jeeto <br />
                                    Upto Rs 10,000
                                </h3>
                                <p className='secTextColor py-4'>Please input number to get OTP</p>
                            </div>

                            <form action="" onSubmit={props.Verify}>
                                <div className="mb-3 text-center  d-flex justify-content-center">
                                    <OTPInput
                                        value={props.OTP}
                                        onChange={(value) => props.handleChange(value)}
                                        // onChange={props.setOTP}

                                        autoFocus OTPLength={4} otpType="number" disabled={false} />
                                </div>

                                <div className="input-group-append py-3">
                                    <button
                                        className="d-btn btnMobile btn btn-outline-secondary rounded-4 w-100"
                                        type="submit"
                                        id="button-addon2"
                                    >
                                        CONFIRM
                                    </button>
                                </div>
                            </form>
                            <p className='secTextColor py-2 mainBoxText'>* Only for Rs. 3.5 + Tax/Day (Prepaid)  /  & Rs. 35.85 + <br /> Tax/Month (Postpaid) *</p>
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default OtpLanding