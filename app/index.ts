import express from 'express';
import { hello, where } from 'sample-npm-module';

const app = express();

app.get('/hello', function(request, response) {
  response.json(hello());
});

app.get('/where', function(request, response) {
  const location = request.query?.location?.toString();
  if (location) {
    response.json(where(location));
  } else {
    response.sendStatus(404);
  }
});

app.listen(5050, () => {
  console.log('server started at http://localhost:5050');
} );
