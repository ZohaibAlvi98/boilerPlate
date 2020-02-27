'use strict';

const JobService = require("./jobs.service")
const JobModel = require("./jobs.model")

exports.create = function(req,res){
    try{
        JobService.create(req.body)
        .then( function(){
            res.send({
                success: true,
                message: "You have successfully created job."
            }); 
        })
        .catch(function(error){
              console.log(error);
        })
        
    }
    catch(e)
    {
        res.send({
            success: false,
            message: e.message
        })
    }
}

exports.update = function(req,res){

    try{
        await JobModel.findByIdAndUpdate(req.job._id, req.body, function(err, updateJob){
            if(err){
                res.send({
                    success: false,
                    message: err
                })  
            }
            else
            {
                res.send({success:true,updateJob})
            }
            
        })
    }
    catch(e){
        res.send({
            success: false,
            message: e.message
        })
     }  
}

