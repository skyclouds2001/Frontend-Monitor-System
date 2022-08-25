import request from '@/lib/request';

export const postAppInfo = async (info: object) => {
  return (await request.post('/v1/data/post', {
    type: 0,
    data: info,
  }, {
    headers: {
      'Content-Type': 'application/json',
    },
  })).data;
}
