let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);


/* GET About page. */
router.get('/about', indexController.displayAboutPage);


/* GET Products page. */
router.get('/Products', indexController.displayProductsPage);


/* GET Servises page. */
router.get('/Services', indexController.displayServicesPage);


/* GET Contact page. */
router.get('/Contact', indexController.displayContactPage);


module.exports = router;
