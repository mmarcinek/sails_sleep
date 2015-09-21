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

  },

  // FIND by ID:
  find: function (req, res, next) {

    var id = req.param('id');

    var idShortCut = isShortcut(id);

    if (idShortCut === true) {
      return next ();
    }

    if (id) {

      Sleep.findOne(id, function (err, sleep) {

        if(sleep === undefined) return res.notFound();

        if (err) return next(err);

        res.json(sleep);
      });

    } else {

      var where = req.param('where');

      if (_.isString(where)) {
        where = JSON.parse(where);
      }

      var options = {
          limit: req.param('limit') || undefined,
          skip: req.param('skip') || undefined,
          sort: req.param('sort') || undefined,
          where: where || undefined
      };

      console.log("These are the options", options);

    Sleep.find(options, function(err, sleep) {

      if(sleep === undefined) return res.notFound();

      if(err) return next(err);

      res.json(sleep);

    });

  }

    function isShortcut(id) {
      if (id === 'find' || id === 'update' || id === 'create' || id === 'destroy') {
        return true;
      }

    }

  }

};

