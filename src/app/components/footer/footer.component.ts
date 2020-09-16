import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  anio: number = new Date().getFullYear();
  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;

  constructor(public infoService: InfoService) {}

  ngOnInit(): void {}

  mailto() {
    return `mailto:${this.infoService.info.email}`;
  }
}
