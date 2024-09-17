import request from '@/api/index';

export function getBaseCode() {
  return request({
    url: '/baseExpress/code/query',
    method: 'GET',
    baseURL: '/api',
  });
}

export function createArticleItem(data) {
  console.log(data);

  return request({
    url: '/baseExpress/code/create',
    method: 'POST',
    baseURL: '/api',
    params: data,
  });
}

export function deleteArticleItem(id) {
  return request({
    url: `/baseExpress/code/delete?id=${id}`,
    method: 'DELETE',
    baseURL: '/api',
  });
}

export function updateArticleItem(data) {
  return request({
    url: `/baseExpress/code/update`,
    method: 'POST',
    baseURL: '/api',
    params: data,
  });
}
