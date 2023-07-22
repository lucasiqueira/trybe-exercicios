const { booksService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const getAll = async (req, res) => {
  const {status, data} = await booksService.getAll();
  return res.status(mapStatusHTTP(status)).json(data);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await booksService.getById(id);
  return res.status(mapStatusHTTP(status)).json(data);
};

const create = async (req, res) => {
  const { status, data } = await booksService.create(req.body);
  return res.status(mapStatusHTTP(status)).json(data);
}

const update = async (req, res) => {
  const { status, data } = await booksService.update(req.params.id, req.body);
  return res.status(mapStatusHTTP(status)).json(data);
}

const remove = async (req, res) => {
  const { status, data } = await booksService.remove(req.params.id);
  return res.status(mapStatusHTTP(status)).json(data);
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
