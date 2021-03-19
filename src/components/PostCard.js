import React from 'react';
import { Link } from 'react-router-dom';
import {
  Col,
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';

function App({item, index}) {
  return (
    <Col xs={12} sm={12} md={6} lg={4} className='app-card' >
      <Card className='mx-1 mt-2 justify-content-between'>
        {item.urlToImage ? 
          <CardImg top className='app-card-img' src={item.urlToImage} alt='Item image' /> : 
          <CardImg top className='app-card-img' src={'/no_img.jpg'} alt='Item image' />
        }
        <CardBody className='app-card-body'>
          <CardTitle tag='h5'>{item.title}</CardTitle>
          {item.description && <CardText>{item.description.substring(0, 100) + '...'}</CardText>}
          <Link to={`/article/${index}`}>
            <Button>Read Full Article</Button>
          </Link>
        </CardBody>
      </Card>
    </Col>
  );
}

export default App;