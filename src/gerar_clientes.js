const faker = require('faker')
const {
  join
} = require('path')
const {
  writeFileSync
} = require('fs')

const clientes = []
const QUANTIDADE = 10
for (let i = 0; i < QUANTIDADE; i++) {
  const cliente = {
    nome: faker.name.firstName(),
    sobrenome: faker.name.lastName(),
    empresa: faker.company.bs(),
    pais: 'Brasil',
    enderco: faker.address.streetAddress(false),
    cidade: faker.address.cityName(),
    estado: 'Mato Grosso do Sul',
    cep: faker.address.zipCode(),
    cel: faker.phone.phoneNumberFormat(2),
    email: 'suelen_teste@gmail.com'
  }

  clientes.push(cliente)
}

const caminho = join(__dirname, '..', 'cypress', 'fixtures', 'clientes.json')
writeFileSync(caminho, JSON.stringify(clientes))