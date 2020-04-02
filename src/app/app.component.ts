import { Component } from '@angular/core';

class User {
  name: string;
  mobileNo: number;
  address: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string;
  user: User = new User();
  skills: string[] = ['PHP', '.Net'];

  constructor() {
    this.userName = 'Ankit';
    this.user.mobileNo = 912312;
    this.user.name = 'Ravi';
    this.user.address = 'Dasdasdasda addsa';
  }

  convertToUpper() {
    this.userName = this.userName.toUpperCase();
  }

  addSkill(skill: string) {
    console.log(skill);
    this.skills.push(skill);
    console.log(this.skills);
  }

  removeSkill(index: number) {
    console.log(index, this.skills[index]);
    this.skills.splice(index, 1);
  }
}
