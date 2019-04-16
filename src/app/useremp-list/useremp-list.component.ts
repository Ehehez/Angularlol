import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserempService } from '../shared/useremp/useremp.service';

@Component({
  selector: 'app-useremp-list',
  templateUrl: './useremp-list.component.html',
  styleUrls: ['./useremp-list.component.css']
})
export class UserempListComponent implements OnInit {

  useremp: any = {};

  constructor(private router: Router,
    private userempService: UserempService) { }

  ngOnInit() {
    this.userempService.getAll().subscribe(data => {
      this.useremp = data;
    })
  }

  gotoList() {
    this.router.navigate(['/useremp-list']);
  }

}
