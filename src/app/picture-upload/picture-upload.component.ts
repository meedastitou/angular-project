import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-picture-upload',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './picture-upload.component.html',
  styleUrls: ['./picture-upload.component.css']
})
export class PictureUploadComponent {
  selectedFile: File | null = null;
  responseData: any; // Property to hold the response data

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('picture', this.selectedFile);

      // Replace with your backend URL
      const uploadUrl = 'http://localhost/image';

      fetch(uploadUrl, {
        method: 'POST',
        body: formData
      })
        .then(data => {
          // this.responseData = data; // Assign the response data to the property
          console.log(data); // Log the response data to the console
        })
        .catch(error => console.error(error));
    }
  }
}
