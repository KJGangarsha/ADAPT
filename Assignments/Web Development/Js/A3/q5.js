function person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const harsha = new person('Jyothi', 'karampudi');
console.log(harsha.middleName);
// This gives undefined as the person class doesn't have middleName attribute in it and undefined. 
harsha.middleName='Gangarsha';
console.log(harsha.firstName);
console.log(harsha.middleName);
console.log(harsha.lastName);