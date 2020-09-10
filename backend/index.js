const express = require('express')
const {Sequelize} = require('sequelize')
const app = express()
const port = process.env.PORT || 8888

const cors = require('cors');
app.use(cors());
app.options('*', cors());

const sequelize = new Sequelize(process.env.DATABASE_URL)

sequelize.authenticate()
.then(() =>  console.log('Database connection established.'))
.catch(error => console.error('Unable to connect to the database!', error))  

app.get('/', (req, res) => res.send("Home Page"))

app.listen(port, () => console.log(`Express server started at http://localhost:${port}`))
