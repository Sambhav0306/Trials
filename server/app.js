import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import InfoSchema from './models/info.js';
mongoose
  .connect(
    'mongodb+srv://sambhavmehta:foHSMm3ALKrfbxWR@cluster0.eztpe0l.mongodb.net/Information'
  )
  .then((result) => {
    console.log('Connected!');
    console.log('Hehe');
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();
app.use(cors());
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));

app.get('/', (req, res) => {
  res.send("This is a VITB-INSIGHTS' API by Team 139");
});
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
