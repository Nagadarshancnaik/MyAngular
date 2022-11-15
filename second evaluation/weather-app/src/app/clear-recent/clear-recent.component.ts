import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clear-recent',
  templateUrl: './clear-recent.component.html',
  styleUrls: ['./clear-recent.component.css']
})
export class ClearRecentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  yes() {
    localStorage.removeItem('recentcity')
    window.location.reload();
  }
}
