import dispatcher from '../dispatcher';

export function createTodo(text){
  dispatcher.dispatch({
    type: "CREATE_TODO",
    text: text
  })
}


export function deleteTodo(id){
  dispatcher.dispatch({
    type: "DELETE_TODO",
    id : id
  })
}
