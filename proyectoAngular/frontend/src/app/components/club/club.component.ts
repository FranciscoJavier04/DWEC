import { Component, OnInit } from '@angular/core';
import { Club } from '../../interfaces/clubs';
import { ClubService } from '../../services/club.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-club',
  imports: [NgFor, CommonModule],
  templateUrl: './club.component.html',
  styleUrl: './club.component.css',
})
export class ClubComponent implements OnInit {
  clubs: Club[] = [];

  constructor(private clubService: ClubService) {}

  ngOnInit(): void {
    this.clubService.getClubs().subscribe(
      (data) => {
        this.clubs = data;
      },
      (error) => {
        console.error('Error al obtener los clubes', error);
      }
    );
  }
}
