function sharePizza(slices, people) {
    if (people <= 0) {
        alert("Order requires at least one person");
    } else {
        const slicesPerPerson = slices / people;
        return `Each person gets ${slicesPerPerson.toFixed(2)} slices from our ${slices} slice pizza`;
    }
}

console.log(sharePizza(8, 2))
console.log(sharePizza(8, 3))
console.log(sharePizza(21, 20))
console.log(sharePizza(10, 3))