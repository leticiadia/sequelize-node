const { update } = require("../models/User");
const User = require("../models/User"); // import User model

module.exports = {
  // function that return the record of all users registered in the database
  async index(request, response) {
    const users = await User.findAll({ raw: true });

    return response.json(users);
  },

  // function to register user in the database
  async store(request, response) {
    const { name, email } = request.body;

    const user = await User.create({ name, email });

    return response.json(user);
  },

  async update(request, response) {
    const { id } = request.params;
    const { name, email } = request.body;

    const user = await User.update({ name, email }, { where: { id: id } });

    return response.json(user);
  },

  async delete(request, response) {
    const { id } = request.params;

    const user = await User.destroy({ where: { id: id } });

    return response.json(user);
  },
};
