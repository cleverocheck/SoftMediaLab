declare namespace NodeJS {
    interface Global {
        db: any
    }
}

const koa = require('koa')
const logger = require('koa-logger')
const route = require('koa-route')
const cors = require('@koa/cors')
const parse = require('co-body')
const dotenv = require('dotenv')
const Sequelize = require('sequelize')
const { initModels } = require('./models/init-models')

dotenv.config()

const { getStudentsInfo, createStudent, changeStudent, deleteStudent } = require('./controller/students')

const sequelize = new Sequelize(`postgres://${process.env.DBUSER}:${process.env.DBPASSWORD}@127.0.0.1:5432/${process.env.DBNAME}`)
const db = initModels(sequelize)
global.db = db

const app = new koa()
app.proxy = true

// отключаем cors
let corsOptions = {}
app.use(cors(corsOptions))

app.use(logger())

app.use(route.get(`/getStudentsInfo`, async ctx => {
    ctx.body = await getStudentsInfo()
}))

app.use(route.put(`/createStudent`, async ctx => {
    let body = await parse.json(ctx.req)
    ctx.body = await createStudent(body)
}))

app.use(route.post(`/changeStudent`, async ctx => {
    let body = await parse.json(ctx.req)
    ctx.body = await changeStudent(body)
}))

app.use(route.delete(`/deleteStudent`, async ctx => {
    let body = await parse.json(ctx.req)
    ctx.body = await deleteStudent(body.id)
}))

app.listen(process.env.PORT, () => console.log(`API listening on port ${process.env.PORT}`))