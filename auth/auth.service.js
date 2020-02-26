'use strict';
var compose = require('composable-middleware');

const UserModel = require('../api/user/user.model'); 
const UserSession = require('../api/userSession/userSession.model'); 
function isAuthenticated() {
    return compose()
        // Attach user to request
        .use(function(req, res, next) {
            UserSession.findById(req.query.token, (err,session)=>{
                if(session!=null&&session.isDeleted==false){
                    UserModel.findById(session.user, (err, user)=>{ 
                        req.user = user
                        next();
                    })
                }else{
                    res.send({success: false, message: "Authorization Error"})
                }
            })
        });
}
function isAdmin() {
    return compose()
        // Attach user to request
        .use(function(req, res, next) {
            next();
        });
}


exports.isAuthenticated = isAuthenticated;
exports.isAdmin= isAdmin;

