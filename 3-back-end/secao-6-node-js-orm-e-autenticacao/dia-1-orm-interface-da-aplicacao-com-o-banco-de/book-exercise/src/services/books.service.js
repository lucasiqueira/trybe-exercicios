const {Book} = require('../models');

const getAll = async () => {
  let data = await Book.findAll();
  if (data.length === 0) {
    data = { message: 'No books found' };
    return { status: 'NOT_FOUND', data }; 
  }
  return { status: 'SUCCESSFUL', data };
}

const getById = async (id) => {
  const data = await Book.findByPk(id);
  if (!data) {
    return {
      status: 'NOT_FOUND',
      data: { message: 'Book not found' },  
    }; 
  }
  return { status: 'SUCCESSFUL', data };
}

const create = async (newBook) => {
  const createdAt = new Date();
  const updatedAt = new Date();
  await Book.create({...newBook, createdAt, updatedAt});
  return { status: 'CREATED', data: { message: 'Book created' } };
}

const update = async (id, dataToUpdate) => {
  const [data] = await Book.update(dataToUpdate, {where: {id}});
  if (!data) {
    return {
      status: 'NOT_FOUND',
      data: { message: 'Book not found' },  
    }; 
  }
  return {status: 'SUCCESSFUL', data: { message: 'Book updated!' } };
}

const remove = async (id) => {
  const data = await Book.destroy(
    { where: { id } },
  );
  if (!data) {
    return {
      status: 'NOT_FOUND',
      data: { message: 'Book not found' },  
    }; 
  }
  return {status: 'NO_CONTENT', data: { message: 'Book deleted!' } }
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
}