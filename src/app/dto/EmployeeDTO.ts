export interface EmployeeDTO{

    id?: number;
    firstName?:string;
    lastName?:string;
    address?:string;
    cap?:string;
    city?:string;
    iban?:string;
    phoneNumber?:string;
    email?:string;
    contractType?:ContractType;   
    contractStart?:Date;
    company?:number

}

export enum ContractType{
    "indeterminato",
    "determinato",
    "apprendistato",
    "tirocinio",
}