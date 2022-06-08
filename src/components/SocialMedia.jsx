import React from 'react';
import {BsInstagram} from "react-icons/bs";
import {ImLinkedin2} from "react-icons/im";
import {SiGithub} from "react-icons/si";


function SocialMedia(props) {
    return (
        <div className={"app__social"}>
            <div>
                <a href="https://www.instagram.com/berkaygulsen/">
                    <BsInstagram/>
                </a>
            </div>
            <div>
                <a  href="https://www.linkedin.com/in/berkaygulsen/">
                    <ImLinkedin2/>
                </a>
            </div>
            <div>
                <a  href="https://github.com/berkaygulsen">
                    <SiGithub/>
                </a>
            </div>
        </div>
    );
}

export default SocialMedia;
