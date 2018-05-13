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
export function reloadTodo(){
  dispatcher.dispatch({
    type: "RELOAD_TODO",
    todos:[{
      id: "88888888",
      text: "Go Shoppping again",
      complete: false,
    },
    {
      id: "777777777777",
      text: "Spend Money again",
      complete: false,
    }
    ]
  })
} 
