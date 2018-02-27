import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Doctor }   from './model/doctor.model';
import { Specialty }   from './model/specialty.model';
import { User }     from './model/user.model';

export class InMemoryDataService implements InMemoryDbService {

    createDb() {
        let doctor: Doctor[] = [
            {
                "id" : 1,
                "name" : "Maurício de Freitas",
                "specialty" : "Pediatra",
                "hospital" : "Santa Casa"
            }, {
                "id" : 2,
                "name" : "José Luis Carvalho",
                "specialty" : "Obstetra",
                "hospital" : "Santa Casa"
            }, {
                "id" : 3,
                "name" : "Alberto Fernandes Santos",
                "specialty" : "Cardiologista",
                "hospital" : "Hospital da Unimed"
            }, {
                "id" : 4,
                "name" : "Marcia Rois Alves Carvalho",
                "specialty" : "Pediatra",
                "hospital" : "Hospital da Unimed"
            }
        ];

        let user: User[] = [
            {
                "id" : 1,
                "name" : "Admin",
                "email": "admin@medtime.com",
                "password" : "MTIzNDU2" // 123456
            }, {
                "id" : 2,
                "name" : "Jean",
                "email": "jean@medtime.com",
                "password" : "MTIzNDU2" // 123456
            }, 
        ];

        let specialty: Specialty[] = [
            { "name" : "Clínico Geral" },
            { "name" : "Dermatologista" },
            { "name" : "Pediatra" },
            { "name" : "Oftalmologista" },
            { "name" : "Cardiologista" },
            { "name" : "Obstetra" }
        ]

        return {
            'doctor' : doctor,
            'user' : user,
            'specialty' : specialty
        };
    }
}
