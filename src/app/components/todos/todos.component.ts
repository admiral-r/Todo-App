import { Component, Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styles: [
  ]
})

export class TodosComponent {
  doneStatus: boolean = false;

  @Input() todos : Array<{ key : Date , done : boolean , text : string }> = [];
  @Output() delete = new EventEmitter<Date>();
  @Output() done = new EventEmitter<Date>();


  get filterTodos() {
    return this.todos.filter((todo:any) => todo.done === this.doneStatus);
  }


    deleteTodo(key:Date) {
      this.delete.emit(key)
    }

    toggletodo(key:Date) {
      this.done.emit(key)
    }

    get DoneTodos() {
      return this.todos.filter((todo:any) => todo.done === true);
    }

    get UnDoneTodos() {
      return this.todos.filter((todo:any) => todo.done === false);
    }
}
