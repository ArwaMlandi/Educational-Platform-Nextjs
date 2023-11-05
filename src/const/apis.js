const baseUrl ="https://educate-server.onrender.com"
export default {
    course: {
        get:`${baseUrl}/course`,
        getById:(id)=> `${baseUrl}/course/${id}`,
        edit: (id) => `${baseUrl}/course/${id}`,
        add: `${baseUrl}/course`,
    },
    teacher: {
        getTeacher:`${baseUrl}/teachers`,
        getByIdTeacher:(id)=> `${baseUrl}/teachers/${id}`,
        editTeacher: (id) => `${baseUrl}/teachers/${id}`,
        addTeacher: `${baseUrl}/teachers`,
    },
    student: {
        getStudent:`${baseUrl}/students`,
        getByIdStudent:(id)=> `${baseUrl}/students/${id}`,
        editStudent: (id) => `${baseUrl}/students/${id}`,
        addStudent: `${baseUrl}/students`,
    },
}