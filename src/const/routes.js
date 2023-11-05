export default {
    get: `/courses`,
    add: `/courses/add`,
    getById: (id) => `/courses/${id}`,
    edit: (id) => `/courses/edit/${id}`,
    getTeacher: `/teachers`,
    addTeacher: `/teachers/addTeacher`,
    getByIdTeacher: (id) => `/teachers/${id}`,
    editTeacher: (id) => `/teachers/edit/${id}`,
    getStudent: `/students`,
    addStudent: `/students/addStudent`,
    getByIdStudent: (id) => `/students/${id}`,
    editStudent: (id) => `/students/edit/${id}`,

  };
 