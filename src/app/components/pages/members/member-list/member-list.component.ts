import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  memberDataList: any[] = [];

  constructor(private route: Router) { }

  ngOnInit(): void {
    const signupDataString = sessionStorage.getItem('singupData');
    if (signupDataString) {
      this.memberDataList = JSON.parse(signupDataString);
    }
  }


  editMember(data: any) {
    this.route.navigate(['member/memberAdd', { data: JSON.stringify(data) }]);
  }


  deleteMember(id: number) {
    this.memberDataList.splice(id, 1);
    sessionStorage.setItem('singupData', JSON.stringify(this.memberDataList));
    window.alert("Are you sure you want to delete this member?")
  }

}
