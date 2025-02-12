const lorem = document.querySelector('.lorem')
const pNl = lorem.querySelectorAll('p') // This is a nodeList!
console.log(pNl) // only works on DOM

// p = [p,p,p,p] nodelist,
const firstP = pNl[0]
console.log(firstP)

// NodeList Lenght
console.log(pNl.length)

// Basic For
for (let p of pNl){
    console.log(p);
}

//Exercise -> Change every P background color

// get background color
const stylesBody = getComputedStyle(document.body)
const backgroundColorBody = stylesBody.backgroundColor
console.log(backgroundColorBody) //rgb(18, 18, 18)

// setting P new background color
for (let p of pNl) {
    p.style.backgroundColor = backgroundColorBody,
    p.style.color = ("rgb(182, 134, 167)")
}