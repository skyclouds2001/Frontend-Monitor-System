import http from '@/http/index';
import ServerResponseType from '@/http/ResponseType';

export const getRecords: () => Promise<ServerResponseType<Array<object>>> = async () => {
  return (await http.get('/v1/data/get', {
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      type: 1,
    }
  })).data;
};
