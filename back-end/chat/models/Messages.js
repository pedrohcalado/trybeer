const connection = require('./mongoConnection');


const createMessage = async ({ nickname, message, timestamp }) => {
  try {
    const dbMessage = await connection()
      .then((db) => db.collection('messages')
        .insertOne({ nickname, message, timestamp }));

    return dbMessage.ops[0];
  } catch (error) {
    console.error(error.message);

    return error.message;
  }
};

async function getAllMessages() {
  try {
    const messages = await connection().then((db) => db.collection('messages')
      .find().toArray());

    return messages;
  } catch (error) {
    console.error(error.message);

    return error.message;
  }
}

module.exports = {
  createMessage,
  getAllMessages,
};
