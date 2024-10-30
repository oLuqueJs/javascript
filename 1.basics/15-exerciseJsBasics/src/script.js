// using escope to isolate the script from the global escope
function myScope () {

    const form = document.querySelector('.form');
    const result = document.querySelector('.results')
    const persons = [];
    let counter = 1;

    function createPerson(name, surname, age, weight) {
        return {
            name: name,
            surname: surname,
            age: age,
            weight: weight
        };
    };

    function receiveEventForm (event) {
        event.preventDefault();

        const name = form.querySelector(".name")
        const surname = form.querySelector(".surname")
        const age = form.querySelector(".age")
        const weight = form.querySelector(".weight")
        
        let formResponse = createPerson(name.value, surname.value, age.value, weight.value)
        persons.push(formResponse);
        console.log(persons)

        result.innerHTML += `<p> form[${counter}] -> ${name.value} ${surname.value} ${age.value} ${weight.value}<p />`
        counter++
    }

    form.addEventListener('submit', receiveEventForm);

}
myScope();