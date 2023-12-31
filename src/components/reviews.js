import { Grid } from '@mui/material';
import './review-style.css';
import { Card, CardTitle, CardText, Container, Carousel } from "reactstrap";

const Reviews = () => {

    return (
        <Container>
            <div className='review-headline'>
            <h1>TESTIMONIALS</h1>
            </div>
            <div className='review-list-position'>
                <ol className='review-list'>
                    <li className='review-filter'>All</li>
                    <li className='review-filter'>Service</li>
                    <li className='review-filter'>Designs</li>
                    <li className='review-filter'>Cleanliness</li>
                </ol>
            </div>
            <Grid container spacing={5}>
                <Grid item xs={12} md={4}>
                    <Card className='review-body'>
                        <div className='review-stars'>
                            <i class="fa fa-solid fa-star"></i>
                            <i class="fa fa-solid fa-star"></i>
                            <i class="fa fa-solid fa-star"></i>
                            <i class="fa fa-solid fa-star"></i>
                            <i class="fa fa-solid fa-star"></i>
                        </div>
                        <CardTitle className='review-card-title'>Shelly G</CardTitle>
                        <CardText className='review-text'>
                            "Vic was incredible and did an amazing job on my nails. 10/10 would recommend if you want quality nails!"
                        </CardText>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card className='review-body'>
                        <div className='review-stars'>
                            <i class="fa fa-solid fa-star"></i>
                            <i class="fa fa-solid fa-star"></i>
                            <i class="fa fa-solid fa-star"></i>
                            <i class="fa fa-solid fa-star"></i>
                            <i class="fa fa-solid fa-star"></i>
                        </div>
                        <CardTitle className='review-card-title'>Amanda B</CardTitle>
                        <CardText className='review-text'>
                            "Vic was incredible and did an amazing job on my nails. 10/10 would recommend if you want quality nails!"
                        </CardText>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card className='review-body'>
                        <div className='review-stars'>
                            <i class="fa fa-solid fa-star"></i>
                            <i class="fa fa-solid fa-star"></i>
                            <i class="fa fa-solid fa-star"></i>
                            <i class="fa fa-solid fa-star"></i>
                            <i class="fa fa-solid fa-star"></i>
                        </div>
                        <CardTitle className='review-card-title'>Jessica G</CardTitle>
                        <CardText className='review-text'>
                            "Vic was incredible and did an amazing job on my nails. 10/10 would recommend if you want quality nails!"
                        </CardText>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Reviews;