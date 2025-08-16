const{setuser,
    getuser
} = require("../services/auth.js"); 
async function restrictoLoginuseronly(req,res,next){
    console.log("Inside restrictoLoginuseronly");
    const token = req.cookies.uid;

    if(!token){
        return res.redirect("/user/login");
    }
    else//else is required here as without token defined get user will malfunction as invalid syntax would be passed there
        {
        const user = getuser(token);
        if(!user){
            return res.redirect("/user/login");
        }
        req.user = user;
    }
    console.log("exiting restrictoLoginuseronly");
    next();
}
module.exports = {
    restrictoLoginuseronly
};