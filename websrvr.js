const express = require('express');
const mongoose = require('mongoose');
const ShortUrl = require('./ACMmdls/shortUrl');
const dotenv = require('dotenv').config();


const app = express();




mongoose.connect(process.env.MONGODB_URI , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
}) .catch(err => {
  console.error('Error connecting to the database:', err);
  process.exit(1);
});

// importing models 
// require('./ACMmdls/shortUrl') 
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
  const searchText = req.query.q;
  let shortUrls;
  if (searchText) {
    shortUrls = await ShortUrl.find({
      $or: [
        { full: { $regex: searchText, $options: 'i' } },
        { short: { $regex: searchText, $options: 'i' } },
      ],
    }).exec();
  } else {
    shortUrls = await ShortUrl.find().exec();
  }
  res.render('url', { shortUrls });
});

app.post('/shortUrls', async (req, res) => {
  const { fullUrl } = req.body;
  const existingShortUrl = await ShortUrl.findOne({ full: fullUrl });

  if (existingShortUrl) {
    const shortUrls = await ShortUrl.find();
    res.render('index', { shortUrls });
  } else {
    await ShortUrl.create({ full: fullUrl });
    res.redirect('/');
  }
});

app.get('/:shortUrl', async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });

  if (!shortUrl) {
    return res.sendStatus(404);
  }

  shortUrl.clicks++;
  await shortUrl.save();

  res.redirect(shortUrl.full);
});

app.listen(process.env.PORT || 5000, () => {
  console.log('Server is running on port 5000');
});
