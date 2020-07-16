const Schmervice = require('schmervice');


module.exports = class UserService extends Schmervice.Service {
  async userCreate(payload) {
    const { User } = this.server.models();
    const user = await User.query().insert(payload)
    return user;
  }

  async findById(id) {
    const { User } = this.server.models();
    const user = User.query().where('id', id)
    return user
  }
}