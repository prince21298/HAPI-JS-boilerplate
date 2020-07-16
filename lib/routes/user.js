
const Joi = require('joi');

const User = require('../models/users');

module.exports = [
  {
    method: 'POST',
    path: '/user/signUp',
    options: {
      description: 'create new user',
      tags: ['api'],
      validate: {
        payload: {
            name: User.field('name'),
            last_name: User.field('last_name'),
            email: User.field('email'),
            password: User.field('password'),
        },
      },
      handler: async (request) => {
        const { userService } = request.services();

        const partner = await userService.userCreate(request.payload);

        return { data: partner };
      },
    },
  }
];
