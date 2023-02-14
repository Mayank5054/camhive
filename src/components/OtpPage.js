import React from 'react'
import Button from './Button'
import Compartment01 from './Compartment01'

export default function OtpPage() {
    return (
        <>
            <div className="Otp_Page_main_container">
                <Compartment01 />
                <div className="Otp_page_Inner">
                    <div className="Otp_page_title">
                        <h2 className="head">Verify Account</h2>
                    </div>
                    <div className="Otp_page_content">
                        <p>We will send you a One Time Password (OTP) on ypur email address</p>
                        <span>xyz@gmail.com</span>
                        <div className="Otp_boxes">
                            <input type="text"></input>
                            <input type="text"></input>
                            <input type="text"></input>
                            <input type="text"></input>
                        </div>
                        <Button value="Validate OTP" />
                        <div className="resendOtpDiv">
                            <p>Wait 30sec before resending OTP</p>
                            <button className="resendOtpBtn">Resend OTP</button>
                        </div>

                    </div>
                    <div className="goBackDiv">
                        <button>Go Back</button>
                    </div>
                </div>
            </div>

        </>
    )
}
