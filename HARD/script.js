function getInfo() {
    return {
        pii: {
            patient2Name: 'John',
            patient2Ssn: '777-00-7777',
        },

        getName() {
            return this.pii?.patient2Name;
        },

        getSSN() {
            return this?.pii?.patient2Ssn;
        },

    }
}


const patient2 = getInfo();

console.log(patient2.names);
console.log(patient2.ssn);
console.log(patient2.getName());
console.log(patient2.getSSN());






// const patient2 = getInfo();

// console.log(`Patient Name: ${patient2.getName()}`);
// console.log(`Patient SSN: ${patient2.getSSN()}`);
