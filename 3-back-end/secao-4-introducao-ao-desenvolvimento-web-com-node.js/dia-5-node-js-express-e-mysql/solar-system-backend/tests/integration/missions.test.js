const chai = require('chai');
const chaiHttp = require('chai-http');
const { describe } = require('mocha');
const sinon = require('sinon');
const connection = require('../../src/db/connection');

chai.use(chaiHttp);
const { expect } = chai;

const app = require('../../src/app');

const mockMissions = [
  { id: 1, name: 'James Webb', year: '2021', country: 'EUA', destination: 'Espaço Interestelar' },
  { id: 2, name: 'Myke Jokes', year: '2022', country: 'URSS', destination: 'Espaço Interestelar' },
  { id: 3, name: 'Martha Wilk', year: '2023', country: 'Japão', destination: 'Marte' },
];

const mockMission = {
  name: 'Dignus Est',
  year: '2029',
  country: 'Croácia',
  destination: 'Pluto',
};

describe('Rota de missões', function () {
  describe('GET /missions', function () {
    it('Retorna uma lista de missões', async function () {
      sinon.stub(connection, 'execute').resolves([mockMissions]);
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
      const mockId = 42;
      sinon.stub(connection, 'execute')
        .onFirstCall()
        .resolves([{ insertId: mockId }])
        .onSecondCall()
        .resolves([{ id: mockId, ...mockMission }]);
    });

    afterEach(sinon.restore);

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

    it('Escreve a nova missão no banco de dados', async function () {
      await chai.request(app).post('/missions').send(mockMission);
      expect(connection.execute.calledTwice).to.be.equal(true);
    });
  });
});