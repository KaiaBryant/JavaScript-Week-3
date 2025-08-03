function getInfo() {
    return {
        pii: {
            patient2Name: 'John',
            patient2Ssn: '777-00-7777',
            insideDOB: '01-07-1998'
        },

        getName() {
            return this.pii?.patient2Name;
        },

        getSSN() {
            return this?.pii?.patient2Ssn;
        },

        getDOB() {
            return this?.pii?.insideDOB;
        }
    }
}

const patient2Name = getInfo();
const outsidePatientDOB = getInfo();

// optional chaining is (?) so it will skip over if not found 
// to prevent damage 


console.log('hello', patient2Name?.pii);
console.log('hello', patient2Name?.getName());
console.log('hello', patient2Name?.getSSN());

console.log(patient2Name?.patient2Name); //UNDEFINED
console.log(patient2Name?.pii); //PII LIST + PROTOTYPE
console.log('bye', patient2Name?.pii?.patient2Name); // BYE JOHN
console.log('bye', getInfo().pii?.patient2Name);// BYE JOHN
console.log('bye', getInfo()); // BYE + FILE OBJECT
console.log(getInfo().pii.DOB); //UNDEFINED 

console.log(getInfo().pii?.insideDOB); //01-07-1998
console.log(outsidePatientDOB.getDOB()); //01-07-1998


