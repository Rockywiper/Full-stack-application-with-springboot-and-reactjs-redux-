import axios from "axios";

export const studentGetAll = (students) => {
    console.log('get all', students);
    return {
        type: 'student/getall', // reducer
        data: students
    }
}

export const stuGetAll = () =>{
    return async function(dispatch, getState){

        await axios.get("http://localhost:8080/student/getall")
        .then(data => {
            console.log(data);
            return dispatch(studentGetAll(data.data));
        });     
        
    };
}

export const stuAdd = (student) =>{
    if(student){
        return async function(dispatch, getState){
            await axios.post("http://localhost:8080/student/add", student)
            .then(data => {
                return dispatch(stuGetAll());
            });
        };
    }
}

export const stuDel = (id) =>{
    return async function(dispatch, getState){
        
        await axios.delete("http://localhost:8080/student/delete/" +id)
        .then(data=>{
            console.log('deleted');
            return dispatch(stuGetAll());
        })
    }

}

export const stuGet = (id) => {
    return async function(dispatch, getState) {
        await axios.get("http://localhost:8080/student/get" + id)
        .then(data => {
            console.log(data);
            return dispatch({
                type: "student/getById",
                data: data.data
            });
        });
    };
}

export const stuUpdate = (student) => {
    return async function(dispatch, getState) {
        await axios.put("http://localhost:8080/student/update",  student)
        .then(data => {
            console.log(data);
        });
    };
}