'use strict'

const Empresa = use('App/Models/Empresa')
const Helpers = use('Helpers')

class EmpresaController {

  async index () {
    const empresa = Empresa.all()

    return empresa
  }

  async store ({ auth, request, response }) {
    const { id } = auth.user
    const data = request.only([
      'razaosocial',
      'nomefantasia',
      'slogan',
      'logo',
      'cnpj',
      'ie',
      'logradouro',
      'numero',
      'complemento',
      'bairro',
      'cidade',
      'uf',
      'cep'
    ])

    const empresa = await Empresa.create({ ...data, user_id: id})

    return empresa
  }

  async show ({ params }) {
    const empresa = await Empresa.findOrFail(params.id)

    await empresa.load('users')

    return empresa
  }

  async update ({ params, request, response }) {
    const empresa = await Empresa.findOrFail(params.id)

    const data = request.only([
      'razaosocial',
      'nomefantasia',
      'slogan',
      'logo',
      'cnpj',
      'ie',
      'logradouro',
      'numero',
      'complemento',
      'bairro',
      'cidade',
      'uf',
      'cep'
    ])

    empresa.merge(data)

    await empresa.save()

    return empresa
  }

  async destroy ({ params, auth, response }) {
    const empresa = await Empresa.findOrFail(params.id)

    if (empresa.user_id !== auth.user.id) {
      return response.status(401).send({ error: 'Not authorized' })
    }

    await empresa.delete()
  }
}

module.exports = EmpresaController
