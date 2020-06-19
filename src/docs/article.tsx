import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { BackTop, Skeleton } from 'antd';
import { getArticle } from '../api';
import './article.css';
import 'gitalk/dist/gitalk.css';
import './comment.css';
import GitalkComponent from 'gitalk/dist/gitalk-component';

document.title = 'Mondo';

export default () => {
  document.title = 'Mondo';
  const { hash } = window.location;
  if (!hash) {
    window.location.href = '/';
    return;
  }
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
      <div className="gitalk-comment">
        <GitalkComponent
          options={{
            enable: true,
            clientID: 'fbf45399bec1444ee728',
            clientSecret: '8fd7869143b702a506f681eaa03ffe833dde5ab4',
            repo: 'yuque-site',
            owner: 'one-pupil',
            admin: ['one-pupil'],
            labels: ['comment'],
            id: hash, // Ensure uniqueness and length less than 50
            distractionFreeMode: false, // Facebook-like distraction free mode
            createIssueManually: true,
          }}
        />
      </div>
    </div>
  );
};
