import express from 'express';
import path from 'path';

const app = express();

app.set('port', 3000);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

const server = app.listen(app.get('port'), () => {
  const port = server.address().port;
  console.log('Listening on port ' + port);
});