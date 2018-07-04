import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import content from '../content/autoplayContent';

function AutoplaySlider() {
    return (
        <div>
            <Slider autoplay={3000}>
                {content.map((item, index) => (
                    <div
                        key={index}

                        style={{ background: `url('${item.image}') no-repeat center center` }}
                    >
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default AutoplaySlider;