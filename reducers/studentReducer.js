const initializeState = {
    students: [],
    student: {}
}

const studentReducer = (state = initializeState, action) => {
    console.log(action.type);

    switch (action.type) 
    {
        case "student/add":
            if (!state.students) state.students = [];
            console.log(action.data);
            return state;

        case "student/getall":
            return {students: action.data};

        case "student/getById":
            return {
                students: state.students,
                //student= action.whatever is fetched from api
                student: action.data
                }
        default:
            console.log(state.students);
            return state;
    }
}

export default studentReducer;