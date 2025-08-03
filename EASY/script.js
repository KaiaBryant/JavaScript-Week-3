// A local gym wants to implement an "exercise of the day" program where there is a 
// free class for that day that promotes a certain exercise. The gym needs some backend 
// logic to update its system to reflect which exercise will be promoted that day. 
// Write a function that will take an input the name of an exercise and console log a message.

function exerciseAnnouncer() {
    let storeCurrentExercise = '';

    return function (exerciseName) {
        storeCurrentExercise = exerciseName;
        console.log(`Today's exercise is ${exerciseName}`);
    };
}

const exerciseOfTheDay = exerciseAnnouncer();

exerciseOfTheDay('running');
exerciseOfTheDay('swimming')
exerciseOfTheDay('dancing');
exerciseOfTheDay('fencing')
exerciseOfTheDay('yoga')

// Onclicks for display

const exercises = {
    Monday: 'Running',
    Tuesday: 'Swimming',
    Wednesday: 'Dancing',
    Thursday: 'Fencing',
    Friday: 'Yoga'
};

const inputDisplay = document.querySelector('.input-display__screen');
const buttons = document.querySelectorAll('.day-btns button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const day = button.value;
        const workout = exercises[day];

        if (workout) {
            inputDisplay.value = `${workout}`;
        } else {
            inputDisplay.value = 'No workout today!';
        }
    });
});


