const fs = require('fs').promises;
const path = require('path');

const MISSION_DATA_PATH = '../../data/missions.json';

async function readMissionsData() {
  try {
    const data = await fs.readFile(path.resolve(__dirname, MISSION_DATA_PATH));
    const missions = JSON.parse(data);
    return missions;
  } catch (error) {
    console.error(`Erro na leitura do arquivo ${error}`);
  }
}

async function writeNewMissionData(newMission) {
  try {
    const oldMissions = await readMissionsData();
    const newMissionWithId = { id: Date.now(), ...newMission };
    const allMissions = JSON.stringify([...oldMissions, newMissionWithId]);

    await fs.writeFile(path.resolve(__dirname, MISSION_DATA_PATH), allMissions);
    return newMissionWithId;
  } catch (error) {
    console.error(`Erro na escrita do arquivo: ${error}`);
  }
}

async function updateMissionData(id, updatedMissionData) {
  const oldMissions = await readMissionsData();
  const updatedMission = { id, ...updatedMissionData };
  const updatedMissions = oldMissions.reduce((missionsList, currentMission) => {
    if (currentMission.id === updatedMission.id) return [...missionsList, updatedMission];
    return [...missionsList, currentMission];
  }, []);

  const updateData = JSON.stringify(updatedMissions);

  try {
    await fs.writeFile(path.resolve(__dirname, MISSION_DATA_PATH), updateData);
    console.log(`Atualizou a missão com o id ${id}`);
    return updatedMission;
  } catch (error) {
    console.error(`Erro na atualização do arquivo: ${error}`);
  }
}

async function deleteMissionsData(id) {
  const oldMissions = await readMissionsData();
  const updatedMissions = oldMissions.filter((curr) => curr.id !== id);

  const updatedData = JSON.stringify(updatedMissions);

  try {
    await fs.writeFile(path.resolve(__dirname, MISSION_DATA_PATH), updatedData);
    console.log(`Deletou a missão com o id ${id}`);
  } catch (error) {
    console.error(`Erro na deleção da missão: ${error}`);
  }
}

module.exports = {
  readMissionsData,
  writeNewMissionData,
  updateMissionData,
  deleteMissionsData,
};