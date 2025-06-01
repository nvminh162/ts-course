interface IPerson {
    readonly firstName: string;
    lastName?: string;
    address: string
}

/* type Person41 = {
    firstName: string;
    lastName: string
} */

function getFullName(person: IPerson) {
    //test demo readonly =>
    // person.firstName = '123' //Cannot assign to 'firstName' because it is a read-only property.
    return `${person.firstName} ${person.lastName}`;
}

let person40 = {
    firstName: 'Eric',
    lastName: 'Hoi Dan IT',
    address: 'Ha noi'
};

console.log(getFullName(person40)); // Eric Hoi Dan IT