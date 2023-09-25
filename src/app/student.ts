import { User } from "./user";

export class Student extends User{

    dateOfJoining : any;
    dateOfBirth: any;
    contact !: string;
    gender !: string;

    constructor()
    {
        super();
    }

}
