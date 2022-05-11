import { Component , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [
  ]
})

export class FormComponent{
  TextTodo:string = '';

  @Output('Add') AddTodo = new EventEmitter<string>();
  
  OnSubmit(){
    if(this.TextTodo.length > 0){
     this.AddTodo.emit(this.TextTodo);
     this.TextTodo = '';
    }
 }
}
