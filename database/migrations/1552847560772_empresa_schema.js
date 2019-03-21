'use strict'

const Schema = use('Schema')

class EmpresaSchema extends Schema {
  up () {
    this.create('empresas', table => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('razaosocial').notNullable()
      table.string('nomefantasia').notNullable()
      table.string('slogan')
      table.string('logo')
      table.integer('cnpj',14).notNullable()
      table.integer('ie',12)
      table.string('logradouro')
      table.string('numero')
      table.string('complemento')
      table.string('bairro')
      table.string('cidade')
      table.string('uf')
      table.string('cep')
      table.timestamps()
    })
  }

  down () {
    this.drop('empresas')
  }
}

module.exports = EmpresaSchema
