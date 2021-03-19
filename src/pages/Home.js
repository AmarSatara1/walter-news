import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Button } from 'reactstrap';

import PostCard from '../components/PostCard';
import { setTopNews } from '../actions';
import '../App.css';

function Home({ dispatch }) {

  const [limit, setLimit] = useState(20);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getTopHeadlines();
  },[])

  const loadMore = () => {
    setLimit(limit+20);
  }

  const getTopHeadlines = async () => {
    const data = await fetch(`https://newsapi.org/v2/top-headlines?country=us`, {
      headers: new Headers({
        'X-Api-Key': process.env.REACT_APP_NEWS_API_KEY
      })
    }).then(response => response.json());

    dispatch(setTopNews(data.articles));
    setArticles(data.articles.concat(data.articles));
  }

  return (
    <Container className='top-container'>
      <Row>
        {articles &&
        articles.slice(0, limit).map((item, index) =>
          <PostCard item={item} index={index} key={index}/>
        )}
      </Row>
      {articles.length > 20 && articles.length > limit  && 
        <Row className='d-flex justify-content-center my-5 w-100'>
          <Button onClick={() => loadMore()}>Load more</Button>
        </Row>
      }
    </Container>
  );
}

export default connect()(Home);
