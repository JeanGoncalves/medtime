import { Component, OnInit } 				from '@angular/core';
import { ActivatedRoute } 					from '@angular/router';

import { DoctorService } 					from '../../service/doctor.service';
import { Doctor }	    					from '../../model/doctor.model';
import { SpecialtyService } 				from '../../service/specialty.service';
import { Specialty }	    				from '../../model/specialty.model';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html'
})
export class DoctorComponent implements OnInit {

	constructor(
		private doctorService: DoctorService,
		private specialtyService: SpecialtyService,
		private route: ActivatedRoute
	) { }

	public doctors: Doctor[];
	public doctor: Doctor;
	public specialties: Specialty[];

	ngOnInit() {
		this.doctorService.findAll()
			.then((doctor: Doctor[]) => this.doctors = doctor);
	}

	ngAfterViewInit() {
		this.specialtyService.findAll()
			.then((specialty: Specialty[]) => this.specialties = specialty);
	}

	newDoctor () {
		let doctor = new Doctor(0, '', '', ''); 
		doctor['edit'] = true;
		this.doctors.push(doctor);
	}

	onEdit(doctor) {
		doctor.edit = true;
	}

	onSubmit(doctor) {
		doctor.edit = null;
		this.doctorService.update(doctor);
	}
	onChangeSpecialty(specialty, doctor) {
		doctor.specialty = specialty;
	}

	onDelete(doctor) {
		let isDelete = confirm('Deseja realmente remover este cadastro?');
		if (isDelete) {
			this.doctorService.delete(doctor);
			this.ngOnInit();
		}
	}

	isDoctorEdit(doctor) {
		return Boolean(doctor.edit);
	}
}
