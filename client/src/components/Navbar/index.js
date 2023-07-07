import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = ({navElements}) => {
    return(
        <section class='navbar'>
            <div class='navbar-choices'>
                <nav class='nav flex-column'>
                    {navElements.map((navChoices) => (
                        <p class='nav-link' key={navChoices.id}>{navChoices.text}</p>
                    ))}
                </nav>
            </div>
        </section>
    )
};

export default Navbar;