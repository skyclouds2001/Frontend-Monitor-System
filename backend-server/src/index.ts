import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/v1/system/login', (req, res) => {
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

app.post('/v1/data/post', (req, res) => {
  console.log(req.body);

  res.send();
  res.end();
});

app.get('v1/data/get', (req, res) => {
  console.log(req.params);

  res.send();
  res.end();
});

app.listen(8000, () => {
  console.log('App is running at http://localhost:8000.')
});
