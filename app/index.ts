import express from 'express';

const app = express();

app.get('/hello', function (request, response) {
  console.log('got hello');
  response.json({ hello: 'guard' });
});

app.get('/where', function (request, response) {
  const location = request.query?.location?.toString();
  if (location) {
    console.log(`got location for ${location}`);
    response.json({ location });
  } else {
    console.log('got request but no location');
    response.sendStatus(404);
  }
});

app.listen(5050, () => {
  console.log('server started at http://localhost:5050');
});
