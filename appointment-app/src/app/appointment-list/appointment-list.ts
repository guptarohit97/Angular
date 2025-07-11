import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-appointment-list',
  standalone:true,
  imports: [FormsModule,DatePipe,CommonModule],
  templateUrl: './appointment-list.html',
  styleUrl: './appointment-list.css'
})
export class AppointmentList  implements OnInit{
  
  
  newAppointmentTitle:string="";
  newAppointmentDate=new Date();

  appointments:Appointment[]=[];

  private count :number =0;

  ngOnInit(): void {
      let savedAppointments=localStorage.getItem("appointments")

      this.appointments=savedAppointments?JSON.parse(savedAppointments):[];
  }

  addAppointment() {
    if(this.newAppointmentTitle.trim().length>0 && this.newAppointmentDate){
      const newAppointment:Appointment={
        id:++this.count,
        title:this.newAppointmentTitle,
        date:new Date(this.newAppointmentDate)
      }
      this.appointments.push(newAppointment)
      // alert(this.newAppointmentTitle.length)
      localStorage.setItem("appointments",JSON.stringify(this.appointments))
      
    }  
    this.newAppointmentTitle=""
    this.newAppointmentDate=new Date() 
  }
  deleteAppointment(index:number){
    this.appointments.splice(index,1)
    localStorage.setItem("appointments",JSON.stringify(this.appointments))
  }

  
}
