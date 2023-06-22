const chai = require('chai');
const chaiHttp = require('chai-http');
const { describe } = require('mocha');
const sinon = require('sinon');
const fs = require('fs');

chai.use(chaiHttp);
const { expect } = chai;

const app = require('../../src/app');

const mockMissions = JSON.stringify([
  { id: 1, name: 'James Webb', year: '2021', country: 'EUA', destination: 'Espaço Interestelar' },
  { id: 2, name: 'Myke Jokes', year: '2022', country: 'URSS', destination: 'Espaço Interestelar' },
  { id: 3, name: 'Martha Wilk', year: '2023', country: 'Japão', destination: 'Marte' },
]);

describe('Rota de missões', function () {
  describe('GET /missions', function () {
    it('Retorna uma lista de missões', async function () {
      sinon.stub(fs.promises, 'readFile').resolves(mockMissions);
      const response = await chai.request(app).get('/missions');

      expect(response.status).to.be.equal(200);
      expect(response.body).to.haveOwnProperty('missions');
      expect(response.body.missions).to.be.instanceOf(Array);
      expect(response.body.missions).to.have.lengthOf(3);
      sinon.restore();
    });
  });

  describe('POST /missions', function () {
    beforeEach(function () {
      sinon.stub(fs.promises, 'writeFile').resolves();
    });

    afterEach(sinon.restore);

    const mockMission = {
      name: 'Dignus Est',
      year: '2029',
      country: 'Croácia',
      destination: 'Pluto',
    };

    it('Retorna a missão criada com um id', async function () {
      const response = await chai.request(app).post('/missions').send(mockMission);

      expect(response.status).to.be.equal(201);
      expect(response.body).to.haveOwnProperty('mission');
      expect(response.body.mission).to.haveOwnProperty('id');
      expect(response.body.mission.name).to.equal(mockMission.name);
      expect(response.body.mission.year).to.equal(mockMission.year);
      expect(response.body.mission.country).to.equal(mockMission.country);
      expect(response.body.mission.destination).to.equal(mockMission.destination);
    });

    it('Escreve a nova missão no arquivo de missões', async function () {
      await chai.request(app).post('/missions').send(mockMission);
      expect(fs.promises.writeFile.called).to.be.equal(true);
    });
  });
});