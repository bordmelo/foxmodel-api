'use strict'

const Model = use('Model')

class Empresa extends Model {
  users () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Empresa
