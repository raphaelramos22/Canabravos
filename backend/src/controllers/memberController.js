const memberService = require('../services/memberService');

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
  memberAll,
  memberFilterId
}