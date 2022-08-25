import express from 'express';
import cors from 'cors';

interface Record {
  timestamp: number,
  type: number,
  record: any,
}

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

/**
 * 登录
 */
app.get('/v1/system/login', (req, res) => {
  res.contentType('application/json');

  const { code } = req.query;
  const timestamp = new Date().getTime().toString();
  const buffer = Buffer.from(JSON.stringify({ code, timestamp }), 'utf-8');
  const id = buffer.toString('base64');

  if (code) {
    res.send({
      success: true,
      data: id,
      message: '请求成功',
    });
  } else {
    res.send({
      success: false,
      data: null,
      message: '请求失败',
    });
  }

  res.end();
});

/**
 * 接受记录并缓存
 */
app.post('/v1/data/post', (req, res) => {
  res.contentType('application/json');

  const { type, data } = req.body;

  if([0, 1, 2].includes(type) && ['object', 'string'].includes(typeof data)) {

    if (type === 0) {
      cache.appInfo = { ...data };
    } else {
      cache.records.push({
        timestamp: new Date().getTime(),
        type: type,
        record: data,
      });
    }

    res.send({
      success: true,
      data: null,
      message: '请求成功',
    });
  } else {
    res.send({
      success: false,
      data: null,
      message: '请求失败',
    });
  }

  res.end();
});

/**
 * 接受记录请求并返回缓存
 */
app.get('/v1/data/get', (req, res) => {
  res.contentType('application/json');

  const { type } = req.query;

  if(typeof type === 'string') {

    const records = cache.records.filter(v => v.type === parseInt(type as string));
    // cache.records = cache.records.filter(v => v.type !== parseInt(type as string));

    res.send({
      success: true,
      data: records,
      message: '请求成功',
    });
  } else {
    res.send({
      success: false,
      data: null,
      message: '请求失败',
    });
  }

  res.end();
});

app.listen(8080);

const Cache = class Cache {
  public appInfo: object = {};
  public records: Record[] = [];
};

const cache = new Cache();
