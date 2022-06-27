const categorycontroller = require('../controllers/category.controller');
const validator = require('../middlewares/requestvalidator');
const routes= (app) => { // the app parameter is the express app only
    //route -> controller function
     app.get('/ecom/api/v1/categories',categorycontroller.getallcategories);
     app.post('/ecom/api/v1/categories',validator.validatecategorycreationrequest, categorycontroller.createcategory);
     app.delete('/ecom/api/v1/categories/:id',categorycontroller.deletecategory);
     app.get('/ecom/api/v1/categories/:id',categorycontroller.getcategory);
     app.get('/ecom/api/v1/categoriesbyname',categorycontroller.getcategorybyname);
     app.get('/ecom/api/v1/categories/:id',categorycontroller.updatecategory);                                                                                                                                                                 


    }


module.exports =routes;