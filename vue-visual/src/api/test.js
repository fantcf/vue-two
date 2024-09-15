import request from '@/api/index';

export function getTest(name, age) {
  return request({
    url: `/test?name=${name}&age=${age}`,
    baseURL: '/api',
  });
}

export function getFruit() {
  return request({
    url: '/testPost',
    baseURL: '/api',
    method: 'POST',
  });
}

export function getTimeout() {
  return request({
    url: '/timeout',
    baseURL: '/api',
    method: 'GET',
    timeout: 1 * 1000,
  });
}
