import request from '@/lib/request';

export const postRecord = async (record: object, type: number) => {
  return (await request.post('/v1/data/post', {
    type: type,
    data: record,
  }, {
    headers: {
      'Content-Type': 'application/json',
    },
  })).data;
};
