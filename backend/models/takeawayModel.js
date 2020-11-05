import mongoose from 'mongoose';

const takeAwaySchema = new mongoose.Schema(
  {
    starterName: { type: String, required: true },
    starterItems: { type: String, required: true },
    menuName: { type: String, required: true },
    menuItems: { type: String, required: true },
    pickUpPoints: { type: String, required: true },
    menuPrice: { type: Number, required: true },
    starterPrice: { type: Number, required: true },
  },
);

const takeAwayModel = mongoose.model('Takeaway', takeAwaySchema);

export default takeAwayModel;
