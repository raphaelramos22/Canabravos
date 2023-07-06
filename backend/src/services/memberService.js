const { Member } = require('../database/models');

const memberAll = async () => {
  const result = await Member.findAll();
  return result;
};

const memberFilterId = async (id) => {
  const result = await Member.findOne({where: { id }});
  return result;
};
module.exports = {
  memberAll,
  memberFilterId
};