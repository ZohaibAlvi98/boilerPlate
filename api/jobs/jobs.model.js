
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var jobSchema = new Schema({
    names: String,
    required: String
})

module.exports = mongoose.model("job",jobSchema)