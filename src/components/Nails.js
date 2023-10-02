import { Component } from "react";
import Card from './NailCards';
import longset from '../app/assets/img/longset.jpg';
import shortset from '../app/assets/img/shortset.jpg'
import mediumnails from '../app/assets/img/mediumnails.jpeg';

class Nails extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row mb-5">
                    <div className="col-md-4">
                        <Card imgsrc={shortset} title="Short Set" paragraph="Short and simple, you can't ever go wrong with this."/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={mediumnails} title="Medium Set" paragraph="Add a bit of flavor with a medium set."/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={longset} title="Long Set" paragraph="Will catch the attention of everyone, guaranteed."/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nails;