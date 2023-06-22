const chai = require('chai');
const chaiHttp = require('chai-http');
const { describe } = require('mocha');

chai.use(chaiHttp);
const { expect } = chai;

const app = require('../../src/app');

describe('Rota de missões', function () {
  describe('GET /missions', function () {
    it('Retorna uma lista de missões', async function () {
      const response = await chai.request(app).get('/missions');

      expect(response.status).to.be.equal(200);
      expect(response.body).to.haveOwnProperty('missions');
      expect(response.body.missions).to.be.instanceOf(Array);
    });
  });

  describe('POST /missions', function () {
    it('Retorna a missão criada com um id', async function () {
      const mockMission = {
        name: 'Dignus Est',
        year: '2029',
        country: 'Croácia',
        destination: 'Pluto',
      };

      const response = await chai.request(app).post('/missions').send(mockMission);

      expect(response.status).to.be.equal(201);
      expect(response.body).to.haveOwnProperty('mission');
      expect(response.body.mission).to.haveOwnProperty('id');
      expect(response.body.mission.name).to.equal(mockMission.name);
      expect(response.body.mission.year).to.equal(mockMission.year);
      expect(response.body.mission.country).to.equal(mockMission.country);
      expect(response.body.mission.destination).to.equal(mockMission.destination);
    });
  });
});