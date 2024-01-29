import './nailservice-style.css';
import longset from "../../app/assets/img/longset.jpg"

const nailservice = () => {
    return (
        <div className='container'>
            <div className='servicetitle'>
                <h1 className='servicetitlefont'>SERVICES ALWAYS DONE RIGHT.</h1>
                <div>
                    "Precision Pedicures. Dry-Pedicure Excellence. Cutting-edge formulations. Skilled professionals at your service. Sterilization at the highest standards. Technology-integrated treatments. Crafted with your satisfaction in mind."
                </div>
            </div>
            <div className='row'>
                <div className="servicebox col-md-6 text-center text-md-start">
                    <img className='serviceimage' src={longset} alt="longnails"></img>
                    <div>
                        <div className='serviceboxtitle'>MANICURE/CLEAN UP</div>
                        <div className='serviceSpacing'>
                            Performance-based products meet technicians who are passionate about their craft. This is the efficient, yet high-quality mani of your dreams.
                        </div>
                        <div>(Adding nail polish is an additional $15 on top of the manicure service)
                        </div>
                        <ul className='list-unstyled'>
                            <li className='serviceSpacing'>$25 | ~30 min</li>
                        </ul>
                        <button className='bookserviceButton serviceSpacing'>Book</button>
                    </div>
                </div>
                <div className="servicebox col-md-6 text-center text-md-start">
                    <img className='serviceimage' src={longset} alt="longnails"></img>
                    <div>
                        <div className='serviceboxtitle'>FILL IN</div>
                        <div className='serviceSpacing'>
                            Fills on my work ONLY, a fill only on your previous set, a month grown out set maximum, a month past is considered a new set
                        </div>
                        <div>(Added charms / rhinestones are an extra charge on top of the $35)</div>
                        <ul className='list-unstyled'>
                            <li className='serviceSpacing'>$35 | ~ 1hr 30 min</li>
                        </ul>
                        <button className='bookserviceButton serviceSpacing'>Book</button>
                    </div>
                </div>
                <div className="servicebox col-md-6 text-center text-md-start">
                    <img className='serviceimage' src={longset} alt="longnails"></img>
                    <div>
                        <div className='serviceboxtitle'>SHORT SET</div>
                        <div className='serviceSpacing'>Short length nails</div>
                        <ul className='list-unstyled'>
                            <li className='serviceSpacing'>price varies | ~ 1 hr 30 min</li>
                        </ul>
                        <button className='bookserviceButton serviceSpacing'>Book</button>
                    </div>
                </div>
                <div className="servicebox col-md-6 text-center text-md-start">
                    <img className='serviceimage' src={longset} alt="longnails"></img>
                    <div>
                        <div className='serviceboxtitle'>MEDIUM SET</div>
                        <div className='serviceSpacing'>Medium Length Nails</div>
                        <ul className='list-unstyled'>
                            <li className='serviceSpacing'>price varies | ~ 2 hrs</li>
                        </ul>
                        <button className='bookserviceButton serviceSpacing'>Book</button>
                    </div>
                </div>
                <div className="servicebox col-md-6 text-center text-md-start">
                    <img className='serviceimage' src={longset} alt="longnails"></img>
                    <div>
                        <div className='serviceboxtitle'>LONG SET</div>
                        <div className='serviceSpacing'>Long Length Nails</div>
                        <ul className='list-unstyled'>
                            <li className='serviceSpacing'>price varies | ~ 2 hrs 15 min</li>
                        </ul>
                        <button className='bookserviceButton serviceSpacing'>Book</button>
                    </div>
                </div>
                <div className="servicebox col-md-6 text-center text-md-start">
                    <img className='serviceimage' src={longset} alt="longnails"></img>
                    <div>
                        <div className='serviceboxtitle'>XL SET</div>
                        <div className='serviceSpacing'>Extra Long Length Nails</div>
                        <ul className='list-unstyled'>
                            <li className='serviceSpacing'>price varies | ~ 2 hrs 30 min</li>
                        </ul>
                        <button className='bookserviceButton serviceSpacing'>Book</button>
                    </div>
                </div>
                <div className="servicebox col-md-6 text-center text-md-start">
                    <img className='serviceimage' src={longset} alt="longnails"></img>
                    <div>
                        <div className='serviceboxtitle'>REMOVALS / SOAKOFFS</div>
                        <div className='serviceSpacing'>Soak Off / Removal of Acrylic Nails (sets only done by me)</div>
                        <ul className='list-unstyled'>
                            <li className='serviceSpacing'>$25 | ~ 30 min</li>
                        </ul>
                        <button className='bookserviceButton serviceSpacing'>Book</button>
                    </div>
                </div>
                <div className="servicebox col-md-6 text-center text-md-start">
                    <img className='serviceimage' src={longset} alt="longnails"></img>
                    <div>
                        <div className='serviceboxtitle'>FREESTYLE SET</div>
                        <div className='serviceSpacing'>
                            A freestyle set is a set I do with my full creativity and ideas. I pick the design, shape, length, etc.
                        </div>
                        <ul className='list-unstyled'>
                            <li className='serviceSpacing'>price varies | ~ 2 hrs 15 min</li>
                        </ul>
                        <button className='bookserviceButton serviceSpacing'>Book</button>
                    </div>
                </div>
                <div className="servicebox col-md-6 text-center text-md-start">
                    <img className='serviceimage' src={longset} alt="longnails"></img>
                    <div>
                        <div className='serviceboxtitle'>GEL X</div>
                        <div className='serviceSpacing'>
                            Full nail tips applied with soft gel to create a long lasting and healthier method for your nails
                        </div>
                        <ul className='list-unstyled'>
                            <li className='serviceSpacing'>price varies | ~ 2 hrs 15 min</li>
                        </ul>
                        <button className='bookserviceButton serviceSpacing'>Book</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default nailservice;