import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css',
  preserveWhitespaces:true
})
export class ToDoComponent {

  task="";
  tasks=[];

  addTask(){
    if(this.task.trim()!==""){
      this.tasks.push({
        name:this.task,
        completed:false
      })
    }
    this.task=''
  }

  deleteTask(idx){
    this.tasks.splice(idx,1)
  }

  toggleTask(task){
    task.completed=!task.completed;
  }

}
