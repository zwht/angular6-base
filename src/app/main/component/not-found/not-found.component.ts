import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  back(key) {
    if (key) {
      window.history.back();
    } else {
      this.router.navigate(['/']);
    }

  }

}
