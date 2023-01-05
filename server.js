const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const postRouter = require('./routes/post-routes');
const contactRouter = require('./routes/contact-routes');
const createPath = require('./helpers/create-path');

const PORT = 3000;
const app = express();
const db = 'mongodb+srv://admin:123@cluster.s8r7jzz.mongodb.net/node_blog?retryWrites=true&w=majority';

mongoose.set('strictQuery', false);
mongoose.connect(db).then(() => {
  console.log('Coonect to DB');
}).catch((error) => {
  console.log(error);
})


app.set('view engine', 'ejs');

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use(express.urlencoded({
  extended: false
}));

app.use(express.static('assets'));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  const title = 'Home';
  res.render(createPath('index'), {
    title
  });
});

app.use(postRouter);
app.use(contactRouter);

app.use((req, res) => {
  const title = 'Error Page';
  res
    .status(404)
    .render(createPath('error'), {
      title
    });
});