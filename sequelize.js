const Sequelize = require('sequelize')
const AuthorModel = require('./models/author')
const BookModel = require('./models/book')
// const {'demo','newuser','User@123','localhost','mysql'} =require('./constants')
const sequelize = new Sequelize('demo', 'newuser', 'User@123', {
host: 'localhost',
dialect: 'mysql',
pool: {
max: 10,
min: 0,
acquire: 30000,
idle: 10000
}
})
const Book = BookModel(sequelize, Sequelize)
const Author = AuthorModel(sequelize, Sequelize)
// Author has Many to book
Author.hasMany(Book)
sequelize.sync({ force: true })
.then(() => {
console.log(`Database & tables created here!`)
})
module.exports = {
Author,
Book
}
