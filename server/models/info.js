import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const infoSchema = new Schema({
  Lot: {
    type: String,
    required: true,
  },
  'Process Step': {
    type: String,
    required: true,
  },
  'Lot Qty In': {
    type: Number,
    required: true,
  },
  Machine: {
    type: String,
    required: true,
  },
  Date_Time: {
    type: String,
  },
  Device: {
    type: String,
    required: true,
  },
  'Product Family': {
    type: String,
    required: true,
  },
  Shift: {
    type: String,
    required: true,
  },
});
export default mongoose.model('Info', infoSchema);
