// https://sujeitoprogramador.com/rn-api/?api=posts

let mainElement = document.querySelector("#app")

const url = "https://sujeitoprogramador.com/rn-api/?api=posts"
const response = fetch(url)
    .then((r) => r.json())
    .then((json) => {
        let ulElement = document.createElement('ul')
        mainElement.appendChild(ulElement)


        json.map((post) => {

            let liElement = document.createElement('li')

            console.log(post.capa)
            let titleElement = document.createElement('h1')
            let titleText = document.createTextNode(post.titulo)
            titleElement.appendChild(titleText)
            liElement.appendChild(titleElement)

            let imgElement = document.createElement('img')
            imgElement.src = post.capa
            liElement.appendChild(imgElement)

            let subtitleElement = document.createElement('p')
            let subtitleText = document.createTextNode(post.subtitulo)
            subtitleElement.appendChild(subtitleText)
            liElement.appendChild(subtitleElement)

            ulElement.appendChild(liElement)
        })



        
        // console.log(json)
    })