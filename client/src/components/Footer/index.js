import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from '../Navbar';

function Footer() {
    const footerNavOne = [
        {id: 1, text: 'Application General Information'},
        {id: 2, text: 'What Can The Application Do'},
        {id: 3, text: 'Application Creator Information'}
    ];

    const footerNavTwo = [
        {id: 1, text: 'NKF General Information'},
        {id: 2, text: 'NKF Website'},
        {id: 3, text: 'NKF Program 1 Information'},
        {id: 4, text: 'NKF Program 2 Information'},
        {id: 5, text: 'NKF Program 3 Information'}
    ];

    const footerNavThree = [
        {id: 1, text: 'Brit LinkedIn'},
        {id: 2, text: 'Brit Github'}
    ];

    return(
        <section class='footer'>
            <div class="container text-center">
                <div class="row align-items-center">
                    <div class="col">
                        <Navbar navElements={footerNavOne} />
                    </div>
                    <div class="col">
                        <Navbar navElements={footerNavTwo} />
                    </div>
                    <div class="col">
                        <Navbar navElements={footerNavThree} />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Footer;