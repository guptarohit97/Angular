import { Component, signal } from '@angular/core';

import { AppointmentList } from './appointment-list/appointment-list';


@Component({
  selector: 'app-root',
  standalone:true,
  imports: [AppointmentList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('appointment-app');
  appointmentDetail: string = '';
  appointmentDate: string = '';

  addAppointment() {
    console.log('Detail:', this.appointmentDetail);
    console.log('Date:', this.appointmentDate);
    // You could push to an array here, e.g., this.appointments.push(...)
  }
}
