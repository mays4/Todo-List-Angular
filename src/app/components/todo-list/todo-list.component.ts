import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/Task.model';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public taskList:Task[]= [];
  input:string="";
  constructor() { }

  ngOnInit(): void {
    this.taskList=[{
      content:"clean house",
      completed:false

    },
    {
      content:"watch Tv",
      completed:true

    }
  ]
  }
  toggleDone(id:Number){
    this.taskList.map((item,index)=>{
      if( index === id)  item.completed =!item.completed
       return item
    })
  }
  addTask(){
    this.taskList.push({
      content:this.input,
      completed:false
    })
    this.input="";
  }
  deleteTask(id:Number){
  this.taskList= this.taskList.filter((item,index)=>  index !== id
  )

  }

}
