
class Person {
    constructor(name, job, age) {

        this.name = name;
        this.job = job;
        this.age = age;
    }

    fetchExercise() {
        console.log("Tennis is the best sport!");
    }

    fetchJob() {
        console.log(`${this.name} is a ${this.job}`);
    }

    // fetchAge() {
    //     console.log(`${this.name} is ${this.age} years old`);
    // }
}

const person1 = new Person("Brad", "back-end developer", 20);

// person1.fetchExercise() : "Tennis is the best sport!"
// person1.fetchJob() : "Brad is a back-end developer"
// person1.fetchAge() : "Brad is 20 years old"



class Programmer extends Person {

    constructor(name, job, age, languages) {
        super(name, job, age);

        this.languages = languages;
        this.busy = true;
    }

    completeTask() {
        this.busy = false;
    }

    acceptNewTask() {
        this.busy = true;
    }

    offerNewTask() {
        if (this.busy) {
            console.log(`${this.name} can't accept any new tasks right now"`);
        } else {
            console.log(`${this.name} would love to take on a new responsibility`);
        }
    }

    learnLanguage(language) {
        this.languages.push(language);
    }

    listLanguages() {
        return this.languages;
        // console.log(`hi ${this.name} knows: ${this.languages.join(", ")}`);
    }
}


const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
const c2 = new Programmer("Edwin", "janitor", 55, ["HTML", "SASS”, ”Ruby"]);
const c3 = new Programmer("Manny", "SysOps", 31, ["HTML", "CSS", "JS", "R"]);

c1.learnLanguage("CSS");
c2.learnLanguage("C++");
c3.learnLanguage("JAVA");

console.log(c1.listLanguages());
console.log(c2.listLanguages());
console.log(c3.listLanguages());
console.log(person1);
console.log(c1);
console.log(c2);
console.log(c3);
person1.fetchExercise();
person1.fetchJob();

