import React from 'react';

const NewsCard = ({ title, description, url, urlToImage, source }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
      <img
        className="w-full h-48 object-cover"
        src={urlToImage || 'https://via.placeholder.com/150'}
        alt={title}
      />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="text-sm text-gray-600">Source: {source}</span>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-2 text-blue-500 hover:underline"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
