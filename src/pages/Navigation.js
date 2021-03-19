import React, { useState } from 'react';
import { Container, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function Navigation() {
  const [input, setInput] = useState('');

  const changeInput = (e) => {
    e.preventDefault();

    setInput(e.target.value);
  }

  return (
    <div className='w-100 blue-background mb-5'>
      <Container className='navigation'>
        <Col className='py-2 navigation'>
          <Link to={'/'}>
            <img src='/walter-code-logo.png' alt='logo'/>
          </Link>
          <Col md={4} className='search'>
            <input type='text' onChange={(e) => {changeInput(e)}} />
            <Link to={`/search/${input}`}>
              <Button>Search</Button>
            </Link>
          </Col>
        </Col>
      </Container>
    </div>
  );
}

export default Navigation;
