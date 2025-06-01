class Person2 {
  private _age: number;
  private _firstName: string;
  private _lastName: string;

  constructor(age: number, firstName: string, lastName: string) {
    this._age = age;
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get age() {
    return this._age;
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  set age(age: number) {
    this._age = age;
  }

  set firstName(firstName: string) {
    this._firstName = firstName;
  }

  set lastName(lastName: string) {
    this._lastName = lastName;
  }
}

let person2 = new Person2(21, "Nguyen", "Minh");
console.log(person2.age); //getter

person2.age = 22
console.log(person2.age); //getter after setter
