const memberService = require('../services/memberService');

const memberCreate = async (req, res, next) => {
  const { displayName, instagram, soccerTeam, image, professions, maritalStatus } = req.body;
  try {
    const result = await memberService.memberCreate(displayName, instagram, soccerTeam, image, professions, maritalStatus);
    res.status(201).json( "feito" );
  } catch (error) {
    next(error);
  }
};

const memberAll = async (_req, res) => {
  const members = await memberService.memberAll();
  res.status(200).json(members);
};

const memberFilterId = async (req, res, next) => {
  try{
    const { id } = req.params;
    const member = await memberService.memberFilterId(id);
    res.status(200).json(member);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  memberCreate,
  memberAll,
  memberFilterId
}