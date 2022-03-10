import { Injectable } from '@angular/core';
import { AngularFireAuth, } from '@angular/fire/compat/auth';
import { getAuth, deleteUser } from "firebase/auth";
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: AngularFireAuth, private router: Router) { }
  loggedIn() {
    return localStorage.getItem('loggedIn')
  }
  isAdmin() {
    return localStorage.getItem('adminUser')
  }
  setAdmin(email: string) {
    localStorage.setItem('adminUser', email)
  }
  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password)
      .then(() => {
        if (email.split('@')[1] === 'admin.bg') {
          this.setAdmin(email)
        }
        localStorage.setItem('loggedIn', email)
        this.router.navigate(['ads'])
      },
        err => {
          alert(err.message)
          this.router.navigate(['/login'])
        })
  }
  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        alert('Registration Successful')
        this.router.navigate(['/login'])
      },
        err => {
          alert(err.message)
          this.router.navigate(['/register'])
        })
  }
  logout() {
    this.fireauth.signOut()
      .then(() => {
        localStorage.removeItem('loggedIn')
        localStorage.removeItem('adminUser')
        localStorage.removeItem('liked')
        this.router.navigate(['/login'])
      },
        err => {
          alert('Error')
          this.router.navigate(['/login'])
        })
  }
  deleteUser() {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      console.log(user.uid);
      deleteUser(user)
      this.logout()
    }
  }
}
