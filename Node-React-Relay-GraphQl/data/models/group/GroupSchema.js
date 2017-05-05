import mongoose from 'mongoose';

var GroupSchema = new mongoose.Schema({
  id: { type:String, required:true, unique:true, index:true, default:mongoose.Types.ObjectId },
  name: String,
  date: String,
  ausencias: Number,
  atrasos: Number,
  horasExtra: Number
});

let Group = mongoose.model('Group', GroupSchema);

module.exports = Group;

module.exports.getGroupByPosition = (root, {id}) => {
  return new Promise((resolve, reject) => {
    Group.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res[id]);
    });
  });
};

module.exports.getListOfGroup = () => {
  return new Promise((resolve, reject) => {
    Group.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};