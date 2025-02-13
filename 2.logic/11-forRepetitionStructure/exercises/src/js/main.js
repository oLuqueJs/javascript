const elements = [
    {tag: 'p', text: "Phrase 1"},
    {tag: 'div', text: 'Phrase 2'},
    {tag: 'footer', text:'Phrase 3'},
    {tag: 'section', text:'Phrase 4'}
]

const container = document.querySelector('.container')
const div = document.createElement('div')

for (let i = 0; i<elements.length; i++) {
    const { tag, text } = elements[i] // or console.log elements[i].tag
    let tagHtml = document.createElement(tag)
    tagHtml.innerText = text
    div.appendChild(tagHtml)
}

container.appendChild(div);