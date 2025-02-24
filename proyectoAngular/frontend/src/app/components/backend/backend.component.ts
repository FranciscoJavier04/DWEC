import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-backend',
  imports: [NgFor, CommonModule],
  templateUrl: './backend.component.html',
  styleUrl: './backend.component.css',
})
export class BackendComponent {}
