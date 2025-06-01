class Person {
  readonly birthday: Date;

  constructor(birthday: Date) {
    this.birthday = birthday;
  }
}

let person = new Person(new Date(2000, 9, 9));
person.birthday = new Date(1991, 1, 1); //Cannot assign to 'birthday' because it is a read-only property.
