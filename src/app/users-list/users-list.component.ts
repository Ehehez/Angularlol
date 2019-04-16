import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../shared/users/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  usuarios: Array<any>;

  constructor(private userService: UsersService,
              private router: Router
              ) { }

  ngOnInit() {
    this.userService.getAll().subscribe(data => {
      this.usuarios = data;
    })
  }
  gotoList() {
    this.router.navigate(['/users-list']);
  }

  delete(id) {
    console.log(id);
    this.userService.remove(id).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
    window.location.reload();


  }
}
