import React from 'react';
import nailartist from "../app/assets/img/nail-artist.png";
import './nailcolumn-style.css';
import sanitary from "../app/assets/img/sanitary.png";
import nailpolish from "../app/assets/img/nail-polish.png"
import nailsdesigns from "../app/assets/img/naildesigns.png"

function NailColumns() {
    const iconStyle = {
        fontSize: '48px',
        marginRight: '30px',
    };


    return (
        <div className='container mt-5'>
            <div className='row align-stretch'>
                <div className='col-md-6'>
                    <div className='d-flex'>
                            <img className='nailcolumn-pics' src={nailartist}>
                            </img>
                        <div>
                            <h4>Exceptional Skill and Artistry</h4>
                            <p>As a seasoned nail technician, I've honed my craft over the years, ensuring that each nail treatment is a work of art.</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='d-flex'>
                        <img className='nailcolumn-pics' src={sanitary}>
                        </img>
                        <div>
                            <h4>Hygiene and Safety Priority</h4>
                            <p>Your health and safety are my top priorities. I follow strict hygiene protocols, including proper sanitization of tools and equipment, to ensure a clean and safe environment for every client.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row align-stretch mt-4'>
                <div className='col-md-6'>
                    <div className='d-flex'>
                        <img className='nailcolumn-pics' src={nailpolish}>
                        </img>
                        <div>
                            <h4>Personalized Service</h4>
                            <p>Whether you're looking for a classic manicure, a trendy nail art design, or specific nail care advice, I provide personalized service that caters to your unique needs, ensuring a satisfying and enjoyable experience.</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='d-flex'>
                        <img className='nailcolumn-pics' src={nailsdesigns}>
                        </img>
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

