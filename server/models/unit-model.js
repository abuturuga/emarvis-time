const mongoose = require('mongoose');


const Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
});

Schema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  }
});

const Model = mongoose.model('unit', Schema);

const all = () => {
  return Model.find({});
};

const create = payload => {
  const model = new Model(payload);
  return model.save();
}

const update = (id, payload) => {
  return Model.findByIdAndUpdate(id, payload, {'new': true});
}

const remove = id => {
  return Model.findByIdAndRemove(id);
}

module.exports = {
  all,
  create,
  update,
  remove
};
