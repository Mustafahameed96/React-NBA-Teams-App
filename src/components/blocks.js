import React from 'react';
import {Link} from 'react-router-dom';
import Reveal from 'react-reveal'; // REACT REVEAL
import 'animate.css/animate.css'; //  REACT REVEAL

const generateBlocks = ({blocks}) => {

    if (blocks) {
        if (blocks) {
            return (
                <div className="home_block">
                    {generateBlocks1(blocks)}
                </div>
            )
        } else {
            alert("hi");
        }

    }
}

const generateBlocks1 = (blocks) => {
    return blocks.map((item) => {
        return (
            <div className={`item ${item.type} `}>
                <Reveal key={item.id} effect="animated fadeInUp">
                    
                    <div
                        className="veil image"
                        style={{
                        background: `url(/images/blocks/${item.image}) no-repeat`
                    }}></div>
                    <div className="title">
                        <Link to={item.link}>{item.title}</Link>
                    </div>
                </Reveal>
            </div>
        )
    })
}
const Blocks = (props) => {
    return (
        <div >
            {generateBlocks(props)}
        </div>
    )
}

export default Blocks;