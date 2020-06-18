import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { BackTop, Skeleton } from 'antd';
import { getArticle } from '../api';
import './article.css';

document.title = 'Mondo';

export default () => {
  document.title = 'Mondo';
  const { hash } = window.location;
  const params: any = hash.match(/#\/(\w+)/);
  const sulg: string | null = params[1];
  const [info, setInfo] = useState({ body: '', title: '', created_at: '' });
  useEffect(() => {
    getArticle(sulg).then(article => {
      setInfo(article);
      document.title = `Mondo | ${article.title}`;
    });
  }, []);
  return (
    <div className="article-container">
      <BackTop></BackTop>
      <header>
        <h1 className="title">{info.title}</h1>
        <time className="time">{info.created_at.substr(0, 10)}</time>
      </header>
      {info.body ? (
        <ReactMarkdown
          className="markdown"
          source={info.body}
          escapeHtml={false}
        />
      ) : (
        <Skeleton active />
      )}
    </div>
  );
};
