const teams = require("../utils/teams");

const existingId = (req, res, next) => {
  const id = Number(req.params.id);
  if (teams.some(t => t.id === id)) {
    next();
  } else {
    res.status(404).send({message: 'ID não existente na base de dados'});
  }
}

module.exports = existingId;