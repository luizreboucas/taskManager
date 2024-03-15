import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;

  showPassword = false;

  private userData2!: any;

  private searchObjectBlocked: any;
  private blocked = false;
  private status = false;

  private title = '';
  private message = '';
  private description = '';

  constructor(
    // private newUserStore: NewUserStoreService,
    private router: Router,
    private fb: FormBuilder // private userService: UserListService, //public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.createLoginForm();
  }

  Login(): any {
    //this.verifyBlock(this.loginForm.value.email);
  }

  navigate(path: string): void {
    this.router.navigate([path]);
  }

  private createLoginForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  // private verifyBlock(email: string): void {
  //   this.userService.getUsers().subscribe((value) => {
  //     this.userData2 = value;
  //     this.searchObjectBlocked = this.userData2.find(
  //       (user: any) => user.email == email
  //     );

  //     if (
  //       !this.searchObjectBlocked ||
  //       this.searchObjectBlocked.blocked === false
  //     ) {
  //       this.blocked = false;
  //       this.checkBlocked(this.blocked);
  //     }

  //     if (this.searchObjectBlocked.blocked === true) {
  //       this.blocked = true;
  //       this.checkBlocked(this.blocked);
  //     }
  //   });
  // }

  public checkBlocked(status: boolean): void {
    this.status = status;
    this.sendLogin();
  }

  public sendLogin(): void {
    if (this.status === true) {
      this.title = 'USUÁRIO BLOQUEADO';
      this.message =
        'O seu acesso foi bloqueado devido a política de segurança.';
      this.description = 'Entre em contato com o administrador.';
      this.openDialogBlocked(this.title, this.message, this.description);
    } else {
      // this.newUserStore.setFormLoginValue(this.loginForm.value);
    }
  }

  public openDialogBlocked(
    title: string,
    message: string,
    description: string
  ): void {
    // this.dialog.open(DialogComponent, {
    //   data: { title: title, message: message, description: description }
    // });
  }
}
