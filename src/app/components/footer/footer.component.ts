import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  anio: number = new Date().getFullYear();
  constructor(public infoService: InfoService) {}

  ngOnInit(): void {}

  mailto() {
    return `mailto:${this.infoService.info.email}`;
  }
}
