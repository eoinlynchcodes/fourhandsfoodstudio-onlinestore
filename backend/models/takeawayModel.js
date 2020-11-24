import mongoose from 'mongoose';

const takeAwaySchema = new mongoose.Schema(
  {
    collectionDate: { type: String, required: true },
    headingOnePrice: { type: Number, required: true },
    headingOne: { type: String, required: true },
    textOne: { type: String, required: true },
    headingTwoPrice: { type: Number, required: true },
    headingTwo: { type: String, required: true },
    textTwo: { type: String, required: true },
    headingThreePrice: { type: Number, required: true },
    headingThree: { type: String, required: true },
    textThree: { type: String, required: true },
    pickupPoints: { type: String, required: true },
    otherinfo: { type: String, required: true },
  },
);

const takeAwayModel = mongoose.model('Takeaway', takeAwaySchema);

export default takeAwayModel;
