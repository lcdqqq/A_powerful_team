/**
 * Created by myc on 10/1/16.
 */
import express from 'express';
import Activity from '../models/Activity';

let router = express.Router();

router.get('/', (req, res)=> {
  Activity.find((err, data)=> {
    if (err) {
      res.send(err);
    }
    res.send(data);
  });
});

router.get('/:_id', (req, res)=> {
  Activity.findOne({
    _id: req.params._id
  }, (err, data)=> {
    if (err) {
      res.send(err);
    }
    res.send(data);
  });
});

router.put('/:_id', (req, res)=> {
  Activity.update({
    _id: req.params._id
  }, req.body, (err, data)=> {
    res.send({
      error: err,
      data
    });
  });
});

router.post('/', (req, res, next)=> {
  new Activity({
    activityName: req.body.activityName
  }).save((err, todo) => {
    if (err) {
      return next(err);
    } else {
      res.send(todo);
    }
  });
});


module.exports = router;
