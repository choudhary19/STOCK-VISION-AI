import axios from 'axios';
import React, { useState, useEffect } from 'react';

const StockNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/company-news', {
          params: { stockName:  'AAPL'  }
        });
        
        // Filter and keep only 5-6 valid articles
        const validArticles = data
          .filter(article => article.headline && article.url)
          .slice(0, 6);
        
        setNews(validArticles);
        setLoading(false);
      } catch (err) {
        setError('Failed to load news');
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="bg-gray-800 w-fit ml-3 mt-5 p-4 rounded-lg text-white">
      <h2 className="text-lg font-semibold mb-4">
        Stock News
      </h2>
      
      {loading ? (
        <div className="text-center text-gray-500">Loading News...</div>
      ) : error ? (
        <div className="text-center text-red-400">{error}</div>
      ) : news.length === 0 ? (
        <div className="text-center text-gray-500">No News Found</div>
      ) : (
        <ul className="space-y-3">
          {news.map((article, index) => (
            <li key={index} className="border-b border-gray-700 pb-2 last:border-b-0">
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline line-clamp-2"
              >
                {article.headline}
              </a>
              <p className="text-gray-500 text-sm mt-1">
                {article.source || "Unknown source"} • {new Date(article.datetime).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StockNews;