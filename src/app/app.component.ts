import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  todos : any = [];
  
  addTodo(todo:any) {
    this.todos = [
      ...this.todos,
      { key : Date.now() , done : false , text : todo }
    ];
  }

  deleteTodo(key:Date) {
    this.todos = this.todos.filter((todo:any) => todo.key !== key);
  }  

  toggletodo(key:Date) {
    this.todos = this.todos.map((todo:any) => {  
      if (todo.key === key) {
        return {
          ...todo,
          done : !todo.done
        }
      }
      return todo;
  });
 }
}

