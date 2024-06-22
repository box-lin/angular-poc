import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.css'
})
export class ReservationListComponent implements OnInit{

  reservations: Reservation[] = [];

  constructor(private reservationSvc: ReservationService) {

  }

  ngOnInit(): void {
    this.reservationSvc.getReservations().subscribe(r => {
      this.reservations = r;
    })
  }


  deleteReservation(id: string) {
    this.reservationSvc.deleteReservation(id).subscribe(() => {
      console.log("delete request processed, id:", id)
    });
  }

}
