import axios from 'axios';
import React, { useState, useEffect } from 'react';

const StockNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchStockNews = async () => {
    const apiKey = 'd209e2fdffef4b3a86aa8d934a0ad62a';
    const url = `https://newsapi.org/v2/everything?q=stocks&apiKey=${apiKey}`;

    try {
      const response = await axios.get(url);
      setNews(response.data.articles.slice(0, 5)); // Get the top 5 articles
      setLoading(false);
    } catch (error) {
      console.error('Error fetching stock news:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStockNews();
  }, []);

  return (
    <div className="bg-gray-200 w-fit ml-3 mt-5 dark:bg-gray-800 p-4 rounded-lg text-white">
      <h2 className="text-lg font-semibold mb-4">Stock News</h2>
      {loading ? (
        <div className="text-center text-gray-500">Loading News...</div>
      ) : news.length === 0 ? (
        <div className="text-center text-gray-500">No News Found</div>
      ) : (
        <ul className="space-y-3">
          {news.map((article, index) => (
            <li key={index} className="border-b border-gray-300 pb-2">
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                {article.title}
              </a>
              <p className="text-gray-500 dark:text-gray-400">{article.source.name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StockNews;
