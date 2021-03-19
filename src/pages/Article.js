import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col,   
  Card, CardImg, CardBody, CardTitle
} from 'reactstrap';

import '../App.css';

function Article({ match, news }) {

  const [post, setPost] = useState({});

  useEffect(() => {
    setPost(news[match.params.id]);
  },[]);

  return (
    <Container>
      <Row>
        <Col Col md={9} xs={12}>
          {post.title && <h3>{post.title}</h3>}
          <div className='post-image-container'>
            {post.urlToImage && <img src={post.urlToImage} className='mb-3' alt={post.title}/>}
            <p>{post.publishedAt && 'Published: ' + post.publishedAt.substring(0, 10).replaceAll('-','/') } Source: {post.source ? post.source.name : ''}, Author: {post.author}</p>
          </div>
          <p>{post.content}</p>
          <p>{post.description}</p>
        </Col>
        <Col md={3} className='d-none d-md-block'>
          <h5 className='article-top-news-header'>Top news</h5>
          <Col className='article-top-news'>
            {news &&
              news.map((item, index) =>
              <Col xs={12} key={index}>
                <Card className='mx-1 mt-2'>
                  {item.urlToImage ? 
                    <CardImg top className='app-card-img' src={item.urlToImage} alt='Item image' /> : 
                    <CardImg top className='app-card-img' src={'/no_img.jpg'} alt='Item image' />
                  }
                  <CardBody className='article-card-body'>
                    <CardTitle>{item.title}</CardTitle>
                  </CardBody>
                </Card>
              </Col>
              )}
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

const getPost = (news) => {
  return news;
}

const mapStateToProps = state => ({
  news: getPost(state.news)
});

export default connect(mapStateToProps)(Article);
