const categoryservice = require('../services/category.service');

const getallcategories = async (req,res) => {
    //some controller logics here
    const response = await categoryservice.getallcategories();
    return res.json({
        message: 'sucessfully fetched the category',
        sucess: true,
        code: 200,
        data: response
            
    });
}
const createcategory = async (req,res) => {
    const response = await categoryservice.createcategory(req.body);
    return res.json({
        message: 'successfully created a new catagory',
        success: true,
        code: 201,
        data: response
    });
}

const deletecategory = async (req,res) => {
    console.log(req.params);
   const response =  await categoryservice.deletecategory(req.params.id);
    return res.json({
        message: 'successfully deleted a  catagory',
        success: true,
        code: 201,
        data: response

    })
}
  const getcategory = async (req, res) => {
      const response = await categoryservice.getcategory(req.params.id);
      return res.json({
        message: 'successfully featched a  catagory',
        success: true,
        code: 200,
        data: response
          
      });
  }

 const getcategorybyname = async (req,res) => {
     const response = await categoryservice.getcategorybyname(req.query.name);
     return res.json({
        message: 'successfully featched by name  catagory',
        success: true,
        code: 201,
        data: response
     });
 }
 

 const updatecategory = async (req,res) => {
     const response = await categoryservice.updatedcategory(req.params.id,req.body);
     return res.json({
        message: 'successfully updated catagory',
        success: true,
        code: 201,
        data: response
     });
 }


module.exports = {
     getallcategories,
    createcategory,
    deletecategory,
    getcategory,
    getcategorybyname,
    updatecategory
}

