import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoList: string[] = [];
  title = 'todolist';
  onSubmit(form: NgForm): void {
    this.todoList.push(form.form.value);
    form.form.setValue({task: ''});
  }
  onRemove(i: number): void{
    this.todoList.splice(i, 1);
  }
}
