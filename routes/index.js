var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Route pour gérer les erreurs 404
router.use((req, res, next) => {
  res.status(404).render('404');
});

module.exports = router;