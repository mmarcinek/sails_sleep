/**
 * SleepController
 *
 * @description :: Server-side logic for managing sleeps
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  // create action
  create: function (req, res, next) {

    var params = req.params.all();

    Sleep.create(params, function (err, sleep) {

      if (err) return next(err);

      res.status(201);

      res.json(sleep);

    });
  }
};

