// export class Quote {
//   id!: number;
//   submitted!:string;
//   quoteTittle!:string
//   name!: string;
//   description!: string;
//   day!:Date;
// }
export class Quote {
  constructor(public id: number,public submitted: string,public  quoteTittle: string,public name: string,public description: string,public day: Date){
  }
}

