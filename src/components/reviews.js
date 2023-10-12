import { Card, CardTitle, CardBody, CardText } from "reactstrap";
import './review-style.css';
import Row from 'react-bootstrap/Row';

const Reviews = () => {

    return (
        <Row xs={1} md={3} className="review-card">
            <Card className="review-card">
                <CardBody className="review-body">
                    <CardTitle className="review-card-title">
                        Sarah V.
                    </CardTitle>
                    <CardText>
                        "I recently had my nails done by an exceptional nail tech, and I couldn't be happier with the results. She is not only a true professional but also a genuinely warm and welcoming person. From the moment I sat down in her chair, I felt like I was in capable hands."
                    </CardText>
                </CardBody>
            </Card>
            <Card className="review-card">
                <CardBody className="review-body">
                    <CardTitle className="review-card-title">
                        Sarah V.
                    </CardTitle>
                    <CardText>
                        "I recently had my nails done by an exceptional nail tech, and I couldn't be happier with the results. She is not only a true professional but also a genuinely warm and welcoming person. From the moment I sat down in her chair, I felt like I was in capable hands."
                    </CardText>
                </CardBody>
            </Card>
            <Card className="review-card">
                <CardBody className="review-body">
                    <CardTitle className="review-card-title">
                        Sarah V.
                    </CardTitle>
                    <CardText>
                        "I recently had my nails done by an exceptional nail tech, and I couldn't be happier with the results. She is not only a true professional but also a genuinely warm and welcoming person. From the moment I sat down in her chair, I felt like I was in capable hands."
                    </CardText>
                </CardBody>
            </Card>
        </Row>
    );
};

export default Reviews;