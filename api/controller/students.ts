const moment = require('moment')

export interface StudentsItem {
    id: number
    full_name: string
    born_date: string
    performance: 0 | 1 | 2 | 3
}

const getStudentInfo = async () => {
    let students_list: StudentsItem[] = await global.db.students.findAll({
        order: [['id', 'ASC']]
    })
    return students_list
}

module.exports = {
    getStudentsInfo: getStudentInfo,
    createStudent: async (body) => {
        body.born_date = moment(body.born_date).format('YYYY-MM-DD')
        await global.db.students.create(body)
        return await getStudentInfo()
    },
    changeStudent: async (body) => {
        console.log(body.data.born_date)
        body.data.born_date = moment(body.data.born_date).format('YYYY-MM-DD')
        await global.db.students.update(body.data, {
            where: {
                id: body.id
            }
        })
        return await getStudentInfo()
    },
    deleteStudent: async (id) => {
        await global.db.students.destroy({
            where: {
                id: id
            }
        })
        return await getStudentInfo()
    }
}