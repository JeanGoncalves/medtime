import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../model/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

	public enterprises;

	constructor(
		private router: Router
	) { }
}
