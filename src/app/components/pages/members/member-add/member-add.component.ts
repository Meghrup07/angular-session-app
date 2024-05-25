import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-member-add',
  templateUrl: './member-add.component.html',
  styleUrls: ['./member-add.component.css']
})
export class MemberAddComponent implements OnInit {

  formData: any = {};
  buttonText: string = 'Add';
  memberIdToUpdate: number = -1;
  memberForm!: FormGroup

  constructor(private route: Router, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.getMemberForm()

    this.router.params.subscribe(params => {
      const data = params['data'];
      if (data) {
        this.formData = JSON.parse(data);
        this.buttonText = 'Update';
        this.memberIdToUpdate = this.formData.id;
        this.memberForm.patchValue(this.formData);
      }
    });
  }

  getMemberForm() {
    this.memberForm = new FormGroup({
      name: new FormControl(""),
      email: new FormControl(""),
      password: new FormControl("")
    })
  }

  memberAdd() {
    const existingSignupDataString = sessionStorage.getItem('singupData');
    let existingSignupData = [];
    if (existingSignupDataString) {
      existingSignupData = JSON.parse(existingSignupDataString);
      if (!Array.isArray(existingSignupData)) {
        existingSignupData = [existingSignupData];
      }
    }
    const newSignupFormData = this.memberForm.value;

    if (this.buttonText === 'Add') {
      existingSignupData.push(newSignupFormData);
      alert("Member Added Successfully!");
    } else {
      if (this.memberIdToUpdate !== -1) {
        existingSignupData[this.memberIdToUpdate] = newSignupFormData;
        alert("Member Updated Successfully!");
      }
    }

    sessionStorage.setItem('singupData', JSON.stringify(existingSignupData));
    this.memberForm.reset();
    this.route.navigate(['member/memberList']);
  }

}
