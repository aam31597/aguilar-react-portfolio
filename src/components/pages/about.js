import React from 'react';
import profilePicture from '../../../static/assets/images/about/devcamp.jpg'

export default function() {
    return (
        <div className="content-page-wrapper">
            <div
                className="left-column"
                   style={{
                    background: "url(" + profilePicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            />

            <div className="right-column">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim cras tincidunt lobortis feugiat vivamus at. Molestie a iaculis at erat. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Non tellus orci ac auctor augue mauris augue. Diam vel quam elementum pulvinar etiam. Blandit libero volutpat sed cras. Orci eu lobortis elementum nibh tellus. Quisque sagittis purus sit amet volutpat consequat mauris nunc. At volutpat diam ut venenatis tellus in metus vulputate. Ullamcorper malesuada proin libero nunc consequat interdum. Nunc vel risus commodo viverra maecenas accumsan lacus. Risus nec feugiat in fermentum posuere urna nec. Morbi non arcu risus quis varius.
            </div>
        </div>
    )
}