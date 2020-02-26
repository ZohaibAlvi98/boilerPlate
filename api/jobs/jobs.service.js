'use strict'

const JobModel = require("./jobs.model")

exports.create = function(jobData){
    return new Promise(function(resolve,reject){
        JobModel.create(jobData,function(err,jobData){
            if(err){
                reject(err);
            }else{
                resolve(jobData);
            }
        })
        
    })
}


exports.findById = function(jobId){
    return new Promise(function(resolve,reject){
        JobModelfindById(jobId,function(err,job){
            if(err){
                reject(err);
            }else if(!job){
                reject('Job not found.');
            }else{
                resolve(job);
            }
        })
        
    })
}


exports.update = function(query,data,options){
    return new Promise(function(resolve,reject){
        JobModel.update(query,data,options,function(err,result){
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        })
        
    })
}


exports.findOne = function(query){
    return new Promise(function(resolve,reject){
        JobModel.findOne(query,function(err,job){
            if(err){
                reject(err);
            }else{
                resolve(job);
            }
        })
        
    })
}