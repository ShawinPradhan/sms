import { Address } from "./address";

export class User {

    id !: number ;
    name !: string;
    userName !: string;
    password !: string;
    email !: string;

    address : Address = new Address();
}
