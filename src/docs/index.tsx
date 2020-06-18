import React, { useState, useEffect } from 'react';
import { getList } from '../api';
import { BackTop, Skeleton } from 'antd';
import './style.css';

interface Article {
  id: string | number;
  slug: string | number;
  title: string;
  created_at: string;
  description: string;
}

export default () => {
  document.title = 'Mondo';

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getList().then(res => {
      setArticles(res);
    });
  }, []);

  return (
    <main className="container">
      <ul className="list">
        {articles.length
          ? articles.map((article: Article) => {
              return (
                <li className="list-item" key={article.id}>
                  <a
                    className="list-item-content"
                    href={`article/#/${article.slug}`}
                  >
                    <h2 className="font-bold text-lg md:text-2xl text-gray-900">
                      {article.title}
                    </h2>
                    <time className="block mb-4 text-gray-700">
                      {article.created_at.substr(0, 10)}
                    </time>
                    <p className="text-gray-800 leading-relaxed">
                      {article.description}
                    </p>
                  </a>
                </li>
              );
            })
          : [1, 2, 3, 4, 5].map(v => <Skeleton active key={v} />)}
      </ul>
      <BackTop></BackTop>
    </main>
  );
};
