import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';

import PostCard from '../components/PostCard';
import '../App.css';

function Search({ match }) {

  const [articles, setArticles] = useState([]); // ograniciti na 20 clanaka, opcija da se ucita jos

  useEffect(() => {
    getSearchResults();
  },[]);

  const getSearchResults = async () => {
    const data = await fetch(`https://newsapi.org/v2/everything?q=${match.params.term}`, {
      headers: new Headers({
        'X-Api-Key': process.env.REACT_APP_NEWS_API_KEY
      })
    }).then(response => response.json());

    setArticles(data.articles);
  }

  return (
    <Container className='app-container'>
      {articles &&
      articles.map((item, index) =>
        <PostCard item={item} index={index} key={index}/>
      )}
    </Container>
  );
}

export default connect()(Search);
