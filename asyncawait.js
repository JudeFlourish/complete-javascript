
async function fetchDogImage(){
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await res.json();
    
    
        console.log(data)
    
        const gottenDog = data.message
    
            document.getElementById('Dogs').innerHTML = data.status
    
            document.querySelector('img').src = data.message
    
    } catch (error) {
        console.log(`error ${error}`)
    }
   
}


const myBtn = document.querySelector('button')
myBtn.addEventListener('click',fetchDogImage)