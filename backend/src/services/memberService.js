const { Member } = require('../database/models');

const memberAll = async () => {
  const result = await Member.findAll();
  return result;
};

const memberFilterId = async (id) => {
  const result = await Member.findOne({where: { id }});
  if (!result) {
    const e = new Error('User does not exist');
    e.code = 'NotFoundError';
    throw e;
  }
  return result;
};
module.exports = {
  memberAll,
  memberFilterId
};