import { Component, OnInit } from '@angular/core';
import { Room } from '../room';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-office-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './office-map.component.html',
  styleUrl: './office-map.component.css'
})
export class OfficeMapComponent implements OnInit {

  pathId = ''
  isClicked = false;
  clickedId = ''

  onClick(id: string) {
    this.clickedId = id;
  }

  onBlur() {
    this.isClicked = false;
  }

  constructor() {
  }

  ngOnInit(): void {

  }

  clearCircles(): void {
    const circles = document.querySelectorAll('svg circle');
    circles.forEach(circle => circle.remove());
  }

  animateRoute(pathId: string): void {
    this.clearCircles();
    const svg = document.querySelector('svg');
    const path = document.getElementById(pathId) as any;
    const length = path.getTotalLength();

    // Tworzenie kropek wzdłuż ścieżki
    for (let i = 0; i < length; i += 20) { // co 20px na ścieżce
      const point = path.getPointAtLength(i);
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      if (svg !== null) {
        svg.appendChild(circle);
      }
      circle.setAttribute('cx', point.x.toString());
      circle.setAttribute('cy', point.y.toString());
      circle.setAttribute('r', '5');
      circle.setAttribute('fill', 'red');
      

      // Animacja (możesz dostosować czas trwania i opóźnienie)
      circle.style.opacity = '0';
      circle.style.transition = `opacity 0.5s ease ${i * 0.01}s`; // Dostosuj dla płynniejszej animacji
      setTimeout(() => circle.style.opacity = '1', i * 5);
      
  }
  
}
}