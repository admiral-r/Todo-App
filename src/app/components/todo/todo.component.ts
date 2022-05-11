import { Component, Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: [
  ]
})
export class TodoComponent  {
  @Input('todoItem') todo: any;
  @Output() delete = new EventEmitter<Date>();
  @Output() done = new EventEmitter<Date>();



  deleteTodo(key:Date) {
    this.delete.emit(key)
  }

  toggletodo(key:Date) {
    this.done.emit(key)
  }
}
