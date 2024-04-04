/*create a component that should fetch data from the state and render a list by iterating over the array of objects stored in the state , utilizing either Bootstrap or material UI for styling*/
import React, { useState } from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

const Cars = () => {
  const [data] = useState([
    //data state variable holds an array  representing cars, Each car object has  id and name
    { id: 1, name: 'Toyota Camry' },
    { id: 2, name: 'Honda Civic' },
    { id: 3, name: 'Ford Mustang' },
  ]);

  return (
    //use container,row,and col to structure the layout
    <Container>
      <Row>
        <Col>
    <h2>My List of Cars</h2>
          <ListGroup>  
            {data.map(car => ( 
              <ListGroup.Item key={car.id}>{car.name}</ListGroup.Item>
            ))}
          </ListGroup>
    </Col>
        </Row>
 </Container>
  );
}

export default Cars;



