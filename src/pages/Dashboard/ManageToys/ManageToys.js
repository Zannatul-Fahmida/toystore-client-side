import React, { useEffect, useState } from 'react';
import { Container, Button, Row, Spinner } from 'react-bootstrap';
import AllToys from '../AllToys/AllToys';

const ManageToys = () => {
    const [allToys, setAllToys] = useState({});

    useEffect(() => {
        fetch('https://frozen-hollows-26442.herokuapp.com/toys')
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, []);

    return (
        <Container className="my-4 text-center">
            <h2 className="mb-4 fw-bold">Manage Toys</h2>
            {
                allToys.length > 0 ?
                    <Row xs={1} md={3} className="g-4">
                        {
                            allToys.map(toy => <AllToys
                                key={toy._id}
                                toy={toy}
                            ></AllToys>
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

export default ManageToys;