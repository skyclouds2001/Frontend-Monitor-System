import express from 'express';

interface Response {
  data: null | string | object,
  success: boolean,
  message: string,
}

const app = express();

app.get('/v1/system/login', (req, res) => {
  const { code } = req.query;
  const timestamp = new Date().getTime().toString();
  const buffer = Buffer.from(JSON.stringify({ code, timestamp }), 'utf-8');
  const id = buffer.toString('base64');

  let response: Response;
  if (code) {
    response = {
      success: true,
      data: id,
      message: '请求成功',
    };
  } else {
    response = {
      success: false,
      data: null,
      message: '请求失败',
    };
  }
  res.send(response);
});

app.post('/v1/data/post', (req, res) => {
  console.log(req.body);
  console.log(res);
});

app.get('v1/data/get', (req, res) => {
  console.log(req.params);
  console.log(res);
})

app.listen(8000, () => {
  console.log('App is running at http://localhost:8000.')
})
