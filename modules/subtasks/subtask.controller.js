const Model = require("./subtask.model");

const create = async (payload) => {
  return await Model.create(payload);
};

const updateStatus = async (id, status) => {
  return await Model.findOneAndUpdate({ _id: id }, status, { new: true });
};

module.exports = { create, updateStatus };
