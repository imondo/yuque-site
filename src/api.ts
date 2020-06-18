import request from 'umi-request';

export const getList = async () => {
  return request
    .get(`/yuque/docs`, {
      credentials: 'include',
      headers: {
        'X-Auth-Token': '40npAi5UUATRX6PqmbQQ6aT8A98S0GoAwRYI5DMM',
      },
    })
    .then(res => res.data);
};

export const getArticle = async (slug: any) => {
  return request
    .get(`/yuque/docs/${slug}?raw=1`, {
      credentials: 'include',
      headers: {
        'X-Auth-Token': '40npAi5UUATRX6PqmbQQ6aT8A98S0GoAwRYI5DMM',
      },
    })
    .then(res => res.data);
};
