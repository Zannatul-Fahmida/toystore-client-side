import React, { useEffect, useState } from 'react';
import { Button, Container, Row, Spinner } from 'react-bootstrap';
import Review from '../Review/Review';

const ReviewManage = () => {
    const [reviews, setReviews] = useState({});

    useEffect(() => {
        fetch('https://frozen-hollows-26442.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    
    return (
        <Container className="my-4 text-center">
            <h2 className="mb-4 fw-bold">Manage Reviews</h2>
            {
                reviews.length > 0 ?
                    <Row xs={1} md={3} className="g-4">
                        {
                            reviews.map(review => <Review
                                key={review._id}
                                review={review}
                            ></Review>
                            )
                        }
                    </Row>
                    :
                    <div className="text-center">
                        <Button variant="primary" disabled>
                            <Spinner
                                as="span"
                                animation="grow"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                            Loading...
                        </Button>
                    </div>
            }
        </Container>
    );
};

export default ReviewManage;