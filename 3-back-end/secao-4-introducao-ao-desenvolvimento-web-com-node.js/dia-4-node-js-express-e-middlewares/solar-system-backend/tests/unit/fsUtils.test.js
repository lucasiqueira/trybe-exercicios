const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');

const { readMissionsData } = require('../../src/utils/fsUtils');

const mockMissions = JSON.stringify([
  { id: 1, name: 'James Webb', year: '2021', country: 'EUA', destination: 'Espaço Interestelar' },
  { id: 2, name: 'Myke Jokes', year: '2022', country: 'URSS', destination: 'Espaço Interestelar' },
  { id: 3, name: 'Martha Wilk', year: '2023', country: 'Japão', destination: 'Marte' },
]);

describe('A função readMissionsData', function () {
  it('retorna um array com todos os elementos do arquivo json', async function () {
    sinon.stub(fs.promises, 'readFile').resolves(mockMissions);
    const missions = await readMissionsData();
    expect(missions).to.be.instanceOf(Array);
    expect(missions).to.have.lengthOf(3);
    sinon.restore();
  });
});