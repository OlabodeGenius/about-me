import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FormsModule], // Include both CommonModule and FormsModule here
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  title = 'About Our Team';
  mission = 'We build delightful software';
  photoUrl = 'https://picsum.photos/seed/team/240/160';
  likes = 0;
  isButtonDisabled = false;
  showMessage = false;
  name = '';
  email = '';
  subscribedMsg = '';

  like() {
    this.likes++;
  }

  toggleMsg() {
    this.showMessage = !this.showMessage;
  }

  subscribe() {
    const e = this.email.trim();
    if (e) this.subscribedMsg = `Thanks, ${e}, we’ll be in touch!`;
  }
}
