export const todo_requests='todo_request';
export const todo_success='todo_success';
export const todo_failure='todo_failure';
export const todorequest=()=>({type:todo_requests});
export const todosuccess=()=>({type:todo_success,payload:data});
export const todofailure=()=>({type:todo_failure,payload:error});

export const fetchData=()=>{
    return dispatch=>{
        dispatch(todo_requests());
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((res)=>{dispatch:(todo_success(res.data))})
        .catch((err)=>{dispatch:(todo_failure(err))})

        }
}
