import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import InfoSchema from './models/info.js';

const app = express();

mongoose
  .connect(
    'mongodb+srv://sambhavmehta:foHSMm3ALKrfbxWR@cluster0.eztpe0l.mongodb.net/Information'
  )
  .then((result) => {
    console.log('Connected to MongoDB!');
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

app.use(cors());
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));

app.get('/', (req, res) => {
  res.send("This is a VITB-INSIGHTS' API by Team 139");
});

app.post('/api/form-data', (req, res) => {
  const formData = req.body;
  console.log('Received form data:', formData);
  //for checking
  InfoSchema.create(formData)
    .then((result) => {
      console.log(result);
      res.status(200).send('Form data received successfully');
    })
    .catch((err) => {
      console.error('Error saving form data to database:', err);
      res.status(500).send('Error saving form data to database');
    });
});
