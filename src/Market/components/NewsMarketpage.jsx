import React from 'react'
import NewsCard from './NewsCard'
import  { useState, useEffect } from 'react';

const NewsMarketpage = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const newsapi = import.meta.env.VITE_NEWS_API_KEY
    const apiKey = newsapi;
    const url = `https://newsapi.org/v2/everything?q=stocks&apiKey=${apiKey}`;
  
    useEffect(() => {
      const fetchNews = async () => {
        try {
          const response = await fetch(url);
          const data = await response.json();
  
          if (data.status === 'ok') {
            setArticles(data.articles);
          } else {
            throw new Error('Failed to fetch news');
          }
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchNews();
    }, []);
  
    if (loading) {
      return <div className="text-center text-white mt-10 text-xl">Loading news...</div>;
    }
  
    if (error) {
      return <div className="text-center mt-10 text-red-500">Error: {error}</div>;
    }
  
    return (
      <div className="bg-gray-100 min-h-screen" style={{ backgroundImage: "url('public/img/Banner/banner_bg.jpg')" }}>
        <h1 className="text-center text-3xl font-bold font-serif text-white py-6">Stock Market News</h1>
        <div className="flex flex-wrap justify-center">
          {articles.map((article, index) => (
            <NewsCard
              key={index}
              title={article.title}
              description={article.description}
              url={article.url}
              urlToImage={article.urlToImage}
              source={article.source.name}
            />
          ))}
        </div>
      </div>
    );
}

export default NewsMarketpage
