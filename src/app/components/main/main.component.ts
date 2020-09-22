import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor(public infoService: InfoService) {}

  ngOnInit(): void {}
  onClick() {
    window.open('https://play.google.com/store/apps/details?id=com.gts.clubin');
  }
}
