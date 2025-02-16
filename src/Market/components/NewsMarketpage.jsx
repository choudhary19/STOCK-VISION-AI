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
        } 
        finally {
          setLoading(false);
        }
      };
  
      fetchNews();
    }, []);
  
    if (loading) {
      return (
        <div className="text-center text-white mt-10 text-xl">
          <svg
            aria-hidden="true"
            className="inline mx-4 w-6 h-6 animate-spin fill-current"
            viewBox="0 0 100 101"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentColor"
            />
          </svg>
          Loading news...
        </div>
      );
    }
  
    if (error) {
      return <div className="text-center mt-10 text-red-500">Error: {error}</div>;
    }
  
    return (
      <section className=" w-50 h-50" style={{ backgroundImage: "url('public/img/Banner/banner_bg.jpg')" }}>
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
      </section>
    );
}

export default NewsMarketpage
