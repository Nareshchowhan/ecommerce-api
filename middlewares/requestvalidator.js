const validatecategorycreationrequest = (req,res,next) => {
    if(!req.body.name) {
        return res.json({
            success: false,
            code: 400,
            message: 'name of the category is not present'
        });
    }
    next();
}

module.exports = {
    validatecategorycreationrequest
}