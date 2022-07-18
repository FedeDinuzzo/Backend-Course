const fs = require('fs')
const dataFolder = './data/'

module.exports = class Container {
  constructor (filename) {
    this.filename = filename
  }

  #read = async () => {
    try {
      const products = await fs.promises.readFile(dataFolder + this.filename, 'utf8')
      return JSON.parse(products)
    } catch (err) {
      console.error(err)
    }
  }

  #write = async (products) => {
    try {
      await fs.promises.writeFile(dataFolder + this.filename, JSON.stringify(products, null, 2), 'utf8')
    } catch (err) {
      console.error(err)
    }
  }

  #generateId = (products) => products.reduce((max, prod) => prod.id > max ? prod.id : max, 0) + 1

  save = async (product) => {
    try {
      let products = await this.getAll().then(data => data)
      product.id = this.#generateId(products)
      products.push(product)
      await this.#write(products)
      return product.id
    } catch (err) {
      console.error(err)
    }
  }

  getById = async (id) => {
    try {
      const product = await this.getAll().then(products => products.filter(obj => obj.id === id))
      return product
    } catch (err) {
      console.error(err)
    }
  }

  deleteById = async (id) => {
    try {
      const products = await this.getAll()
      .then(data => data.filter(prod => prod.id !== id))
      await this.#write(products)
    } catch (err) {
      console.error(err)
    }
  }

  deleteAll = async () => {
    try {
      await this.#write([])
    } catch (err) {
      console.error(err)
    }
  }

  getAll = async () => {
    try {
      const products = await this.#read();
      if (products) {
        return products
      } else {
        return []
      }
    }
    catch (err) {
      switch (err.code) {
        case 'ENOENT':
          return []
        default:
          console.error[err]
        break
      }
    }
  }

  getRandom = async () => {
    const product = await this.getAll().then((products)=>products[Math.floor(Math.random() * products.length)])
    return product
  }
}