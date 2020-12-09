import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.page.html',
  styleUrls: ['./single-book.page.scss'],
})
export class SingleBookPage implements OnInit {

  constructor(private router: Router) { }

  onBack(){
    this.router.navigate(['home']);
  }

  ngOnInit() {
  }

}
