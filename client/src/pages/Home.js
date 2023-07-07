import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Typewriter } from 'react-simple-typewriter';

// Component Imports
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {
    const words = [
                        'Can you tell me how many videos per FY the NKF has uploaded?', 
                        'PROC FREQ data=work.original_nkf_youtube; TITLE "Videos per FY"; table fy; RUN;', 
                        'We have released 10 videos in 2021, 20 videos in 2022, and 30 videos in 2023', 
                        'What about how many people have filled out a baseline transplant survey?',
                        'DATA work.transplant_s1; SET work.original_nkf_transplant; IF survey_number=1 THEN OUTPUT; RUN;',
                        'There were 26 people who completed a baseline trasnplant survey!',
                    ];
    
    const homeNavbar = [
        {id: 1, text: 'YouTube'},
        {id: 2, text: 'RRT'},
        {id: 3, text: 'Clinical Bulletins'},
        {id: 4, text: 'CME'},
        {id: 5, text: 'Transplant Program'},
        {id: 6, text: 'Submit Suggestion/Error'}
    ];
  
    return(
        <section class='home'>
            <header>
                <Header  />
            </header>
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
                    <div class='navbar-intro'>
                        <h1>Navbar</h1>
                        <p>What would you like to look at:</p>
                    </div>
                    <div className="col-sm-3"><Navbar navElements={homeNavbar}/></div>
                    <div className="col-sm-5">
                        <img
                        class="logo"
                        src={require("../pictures/nkf_logo.jpg")}
                        alt="National Kidney Foundation Image"
                        />
                    </div>
                </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </section>
    )
};

export default Home;