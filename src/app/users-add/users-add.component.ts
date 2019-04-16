import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresaService } from '../shared/empresa/empresa.service';
import { NgForm } from '@angular/forms';
import { UsersService } from '../shared/users/users.service';

@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.css']
})
export class UsersAddComponent implements OnInit {

  usuarios: any = {};
  empresas: Array<Object>;

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UsersService,
              private empresaService: EmpresaService) { }

  ngOnInit() {
    this.empresaService.getAll().subscribe(data => {
      this.empresas = data;
    })
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.userService.get(id).subscribe((car: any) => {
          if (car) {
            this.usuarios = car;
          } else {
            console.log(`Car with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }
  
  gotoList() {
    this.router.navigate(['/users-list']);
  }
  save(form: NgForm) {
    console.log(form);
    this.userService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
  remove(href) {
    this.userService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }


}
