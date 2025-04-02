//Thet are simple interface for complex acctions eg a restaurant menu
// study about json

// "https://dog.ceo/api/breeds/image/random"   Dog API

fetch("https://dog.ceo/api/breeds/image/random")
.then(res => res.json())
.then(data => {

        console.log(data)
        const gottenDog = data.message

        document.getElementById('Dogs').innerHTML = data.status

        document.querySelector('img').src = data.message
    })
    .catch(error => {
        console.log(`error ${error}`)
    })

const myBtn = document.querySelector('button')
myBtn.addEventListener('click',fetch)