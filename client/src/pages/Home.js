import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
    const words = [
                        'Can you tell me how many videos per FY the NKF has uploaded?', 
                        'PROC FREQ data=work.original_nkf_youtube; TITLE "Videos per FY"; table fy; RUN;', 
                        'We have released 10 videos in 2021, 20 videos in 2022, and 30 videos in 2023', 
                        'What about how many people have filled out a baseline transplant survey?',
                        'DATA work.transplant_s1; SET work.original_nkf_transplant; IF survey_number=1 THEN OUTPUT; RUN;',
                        'There were 26 people who completed a baseline trasnplant survey!',
                    ];
  
    return(
        <section class='home'>
            <div>
                HEADER HERE WITH "NKF Data Dashboard", "Designed, Coded, and Devloped By Brit Sovic" and "Last Updated" Sections
            </div>
            <div>
                <Typewriter 
                    words={words}
                    typeSpeed={20}
                    deleteSpeed={10}
                    delaySpeed={2000}
                />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">NAV BAR WILL GO IN THIS COLUMN SINCE SMALLER</div>
                    <div className="col-sm-8">
                        <img
                        class="logo"
                        src={require("../pictures/nkf_logo.jpg")}
                        alt="National Kidney Foundation Image"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Home;