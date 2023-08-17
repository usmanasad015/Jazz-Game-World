import React, { useEffect, useState } from 'react'
import OtpLanding from '../Components/OtpLanding'

const OtpLandingScreen = (props) => {
    const [phNumber, setPhNumber] = useState("")
    const [otpBox, setOtpBox] = useState(true)
    const [otpBoxCode, setOtpBoxCode] = useState(false)
    const [otp, setOtp] = useState("")
    const [OTP, setOTP] = useState("")

    const handleChange = (otp) => {
        setOTP(otp);
    };


    useEffect(() => {
        if (props.Token)
            SignUp()
        Verify()
    }, [props.Token])

    const handleTextChange = (e) => {
        setPhNumber(e.target.value);
    };

    // --------------------------------------------------  Sign Up API -------------------------------------------------- 

    const SignUp = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        try {
            const response = await fetch('user/signup/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${props.Token}`,
                },
                body: JSON.stringify({
                    msisdn: phNumber,
                    sourceInfo: 'android version 7.9',
                    os: 'android',
                    gameId: 5,
                }),
            });

            const data = await response.json();
            setOtp(data.otp)
            console.log('Sign up Api OTP is', data.otp);

            // setOTP(data.otp)   // ------------------- SETTING OTP FOR VERIFY API ------------------- 
            setOtpBox(false)
        } catch (err) {
            console.log('OTP API error is', err);
        }
    }

    // -------------------------------------------------- Verify API  -------------------------------------------------- 

    const Verify = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('user/verifyOtp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${props.Token}`,
                },
                body: JSON.stringify({
                    msisdn: phNumber,
                    otp: OTP
                    // sourceInfo: 'android version 7.9',
                    // os: 'android',
                    // gameId: 5,
                }),
            });


            const data = await response.json();
            if (data.result == "Success") {
                alert("User Subscribed Successfully")
            }
            else {
                alert("Invalid OTP")
            }

            console.log('Verify Api Output is', data);
            // setOTP(data.status)

        } catch (err) {
            console.log('OTP API error is', err);
        }
    }

    // const handleTextChange = (e) => {
    //     setPhNumber(e.target.value);
    //     console.log(e.target.value);
    // }

    return (
        <OtpLanding SignUp={SignUp} handleTextChange={handleTextChange} phNumber={phNumber} otpBox={otpBox} Verify={Verify} OTP={OTP} setOTP={setOTP} otp={otp}
            handleChange={handleChange} />
    )
}

export default OtpLandingScreen
