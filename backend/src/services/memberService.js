const Joi = require('joi');
const { Member } = require('../database/models');

const schema = Joi.object({
  displayName: Joi.string().min(4).required(),
  instagram: Joi.string().min(8).required(),
  soccerTeam: Joi.string().min(5).required(),
  professions: Joi.string().min(6).required(),
  maritalStatus: Joi.string().min(4).required(),
  image: Joi.string().required(),
});


const memberCreate = async (displayName, instagram, soccerTeam, image, professions, maritalStatus) => {
  const { error } = schema.validate({ displayName, instagram, soccerTeam, image, professions, maritalStatus });

  if (error) {
    const e = new Error(error.message);
    e.code = 'ValidationError';
    throw e;
  }

  const memberExist = await Member.findOne({ where: { displayName } });

  if (memberExist) {
    const e = new Error('User already registered');
    e.code = 'ConflictError';
    throw e;
  }
  const member = await Member.create({ displayName, instagram, soccerTeam, image, professions, maritalStatus });
  return true;
};

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
  memberCreate,
  memberAll,
  memberFilterId
};