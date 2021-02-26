function person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const harsha = new person('Ammu', 'Dasari');
console.log(harsha.firstName)
console.log(harsha.lastName)
harsha.lastName="Karampudi";
console.log(harsha.firstName)
console.log(harsha.lastName)