const category = require('../models/index').category ;
const getallcategories = async () => {
    const categories = await category.findAll();
    return categories;

}
const createcategory = async (data) => {
    const newcategory = await category.create({
        name: data.name,
        description:data.description,
        createat: new Date(),
        updatedat: new Date()
    });
    return newcategory;
}
const deletecategory = async(categoryid) => {
    await category.destroy({
        where: {
            id: categoryid
        }
    });
}

const getcategory = async (categoryid) => {
    const response = await category.fione({
        where: {
            id: categoryid
        }
    });
    return response;
}

const getcategorybyname = async (categoryname) => {
    const response = await category.fione({
        where: {
            name: categoryname
        }
    });
    return response;
}

const updatecategory = async (categoryid,data) => {
    const updatedcategory = await category.update(data,{where:{id:categoryid}});
    return updatedcategory;
}


module.exports = {
    getallcategories,
    createcategory,
    deletecategory,
    getcategory,
    getcategorybyname,
    updatecategory 
    
    


}







