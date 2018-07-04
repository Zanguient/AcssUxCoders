import React, { Component } from 'react';
import '../App.css';


class Home extends Component {
    render() {
        return (
            <div id="CarrerBanner">
                <h2 className="darkGreyText"> Careers at V</h2>
                <p className="homeText lightGreyText">Why do people join, stay and thrive? We ask our employees what matters most. They tell us it’s better here because they make an impact, have the opportunity to work differently, enjoy great pay and benefits, love the people they work with and learn and grow.</p>
                <div className="mgn-top-small">
                    <div className="iBlock homeIntroList">
                        <h3 className="darkGreyText">Make an impact</h3>
                        <p className="lightGreyText">Change the way people live, work and play. Do work that matters.</p>
                    </div>
                    <div className="iBlock homeIntroList">
                        <h3 className="darkGreyText">Enjoy great pay and benefits</h3>
                        <p className="lightGreyText">Wherever you are in life, the whole you is cared for.</p>
                    </div>
                    <div className="iBlock homeIntroList">
                        <h3 className="darkGreyText">Work differently</h3>
                        <p className="lightGreyText">Whether you think in code, words, pictures or numbers - find your future Here.</p>
                    </div>
                    <div className="iBlock homeIntroList">
                        <h3 className="darkGreyText">Learn. Grow. Repeat!</h3>
                        <p className="lightGreyText">Craft your own path to greatness..</p>
                    </div>
                    <div className="iBlock homeIntroList">
                        <h3 className="darkGreyText">Love the people you work with</h3>
                        <p className="lightGreyText">Join a community of talented, driven individuals.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
