import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return(
        <section class='navbar'>
            <div class='navbar-intro'>
                <h1>Navbar</h1>
                <p>What would you like to look at:</p>
            </div>
            <div class='navbar-choices'>
                <nav class="nav flex-column">
                    <p class="nav-link">YouTube</p>
                    <p class="nav-link">RRT</p>
                    <p class="nav-link">Clinical Bulletins</p>
                    <p class="nav-link">CME</p>
                    <p class="nav-link">Transplant Program</p>
                    <p class="nav-link disabled">Submit Suggestion/Error</p>
                </nav>
            </div>
        </section>
    )
};

export default Navbar;