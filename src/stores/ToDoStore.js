import {EventEmitter} from 'events';
import Dispatcher from '../dispatcher';

class ToDoStore extends EventEmitter{
  constructor(){
    super();
    this.todos = [
      {
        id: "1",
        text: "Go Shoppping",
        complete: false,
      },
      {
        id: "2",
        text: "Spend Money",
        complete: false,
      },
      {
        id: "3",
        text: "Have a party",
        complete: false,
      }
    ]
  }
  createToDo(item){
    const timestamp = Date.now();
    this.todos.push({
      id: timestamp,
      text: item,
      complete: false
    })
    this.emit('change');
  }


  getAll(){
    return this.todos
  }

  handleActions(action){
    //console.log('Todostore received a action' ,action);
    switch(action.type){
      case "CREATE_TODO": {
        this.createToDo(action.text);
      }
    }
  }

}

const todoStore = new ToDoStore();
Dispatcher.register(todoStore.handleActions.bind(todoStore));
window.Dispatcher = Dispatcher; // Dispatcher.dispatch({type: 'CREATE_TODO',text: 'sleep'}); in console
window.todoStore = todoStore; // todoStore.createToDo("sleep") in console
export default todoStore;
