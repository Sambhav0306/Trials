import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import InfoSchema from './models/info.js';
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/api/form-data', (req, res) => {
  const formData = req.body;
  console.log('Received form data:', formData);
  InfoSchema.create(formData)
    .then((result) => {
      console.log(result);
      res.status(200).send('Form data received successfully');
    })
    .catch((err) => {
      console.log(err);
    });
  //   res.status(200).send('Form data received successfully');
});

mongoose
  .connect(
    'mongodb+srv://sambhavmehta:foHSMm3ALKrfbxWR@cluster0.eztpe0l.mongodb.net/Information'
  )
  .then((result) => {
    console.log('Connected!');
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
