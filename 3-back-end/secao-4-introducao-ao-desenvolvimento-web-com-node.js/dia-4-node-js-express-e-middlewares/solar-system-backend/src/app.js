const express = require('express');
const {
  readMissionsData,
  writeNewMissionData,
  updateMissionData,
  deleteMissionsData,
} = require('./utils/fsUtils');

const app = express();

app.use(express.json());

const validateMissionId = (req, res, next) => {
  const { id } = req.params;

  const idAsNumber = Number(id);
  if (Number.isNaN(idAsNumber)) {
    res.status(400).send({ message: 'ID inválido. Precisa ser um número.' });
  } else {
    next();
  }
};

const validateMissionData = (req, res, next) => {
  const requiredProperties = ['name', 'year', 'country', 'destination'];

  if (requiredProperties.every((property) => property in req.body)) {
    next();
  } else {
    res.status(400).send({ message: 'A missão não possui todos os atributos necessários.' });
  }
};

app.get('/missions', async (req, res) => {
  const missions = await readMissionsData();

  return res.status(200).json({ missions });
});

app.post('/missions', validateMissionData, async (req, res) => {
  const newMission = req.body;

  const newMissionWithId = await writeNewMissionData(newMission);
  return res.status(201).json({ mission: newMissionWithId });
});

app.put('/missions/:id', validateMissionId, validateMissionData, async (req, res) => {
  const { id } = req.params;
  const updatedMissionData = req.body;

  const updatedMission = await updateMissionData(Number(id), updatedMissionData);

  return res.status(200).json({ mission: updatedMission });
});

app.delete('/missions/:id', validateMissionId, async (req, res) => {
  const { id } = req.params;
  await deleteMissionsData(Number(id));

  return res.status(204).end();
});

module.exports = app;