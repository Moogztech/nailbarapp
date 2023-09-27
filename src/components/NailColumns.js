import React from 'react';
import { LiaSeedlingSolid, LiaHeart, LiaAmericanSignLanguageInterpretingSolid, LiaBrushSolid } from "react-icons/lia";

function NailColumns() {
    const iconStyle = {
        fontSize: '48px',
        marginRight: '10px',
    };

    return (
        <div className='container'>
            <div className='row align-stretch'>
                <div className='col-md-6 margin-bottom-xl'>
                    <div className='display-flex margin-top-md'>
                        <div style={iconStyle} className='margin-right-xl'>
                            <LiaBrushSolid />
                        </div>
                        <div>
                            <h4>Exceptional Skill and Artistry</h4>
                            <p>As a seasoned nail technician, I've honed my craft over the years, ensuring that each nail treatment is a work of art.</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 margin-bottom-xl'>
                    <div className='display-flex margin-top-md'>
                        <div style={iconStyle} className='margin-right-xl'>
                            <LiaSeedlingSolid />
                        </div>
                        <div>
                            <h4>Hygiene and Safety Priority</h4>
                            <p>Your health and safety are my top priorities. I follow strict hygiene protocols, including proper sanitization of tools and equipment, to ensure a clean and safe environment for every client.</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 margin-bottom-xl'>
                    <div className='display-flex margin-top-md'>
                        <div style={iconStyle} className='margin-right-xl'>
                            <LiaHeart />
                        </div>
                        <div>
                            <h4>Personalized Service</h4>
                            <p>Whether you're looking for a classic manicure, a trendy nail art design, or specific nail care advice, I provide personalized service that caters to your unique needs, ensuring a satisfying and enjoyable experience.</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 margin-bottom-xl'>
                    <div className='display-flex margin-top-md'>
                        <div style={iconStyle} className='margin-right-xl'>
                            <LiaAmericanSignLanguageInterpretingSolid />
                        </div>
                        <div>
                            <h4>Continual Learning and Innovation</h4>
                            <p>Staying at the forefront of nail care trends and techniques is essential to me. Whether you want to try the latest nail trend or stick with a timeless classic, I'm equipped to make it happen.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NailColumns;

