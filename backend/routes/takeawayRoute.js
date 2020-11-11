import express from 'express';
import Takeaway from '../models/takeawayModel';
import { isAuth, isAdmin } from '../util';

const router = express.Router();

router.get('/', async (req, res) => {
  const takeaway = await Takeaway.find();
  res.send(takeaway);
});

router.get('/', (req, res) => {
  res.send('hello');
});

router.post('/', async (req, res) => {
  const takeaway = new Takeaway({
    starterName: req.body.starterName,
    starterItems: req.body.starterItems,
    menuName: req.body.menuName,
    menuItems: req.body.menuItems,
    pickUpPoints: req.body.pickUpPoints,
    menuPrice: req.body.menuPrice,
    starterPrice: req.body.starterPrice,
  });
  const newTakeAway = await takeaway.save();
  if (newTakeAway) {
    return res.status(201).send({ message: 'Takeaway was successfully created.', data: newTakeAway });
  }
  return res.status(500).send({ message: 'Error in creating the takeaway.' });
});

router.delete('/:id', isAuth, isAdmin, async (req, res) => {
  const deletedTakeaway = await Takeaway.findById(req.params.id);
  if (deletedTakeaway) {
    await deletedTakeaway.remove();
    res.send({ message: 'Takeaway Deleted' });
  } else {
    res.send('Error in Deletion.');
  }
});

export default router;