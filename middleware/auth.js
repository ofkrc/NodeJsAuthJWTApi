const jwt = require("jsonwebtoken");

const auth = async(req,res,next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        let decodeData;

        if(token){
            decodeData = jwt.verify(token,process.env.SECRET_TOKEN)
            req.userId = decodeData?.sub
        }
        else
        {
            decodeData = jwt.decode(token)
            req.userId = decodeData?.sub
        }

        next()
    } catch (error) {
        console.log(error);
    }
}

module.exports = auth