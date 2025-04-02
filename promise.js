let birthdayGift = new Promise((resolve, reject) => {
    let giftBought = false;

    if(giftBought){
        resolve('fulfill')
    }else {
        reject('reject')
    }
})

birthdayGift
.then(message => console.log(`Thanks for the gift, I appreciate: ${message}`))
.catch(flourish => console.log(`Oh you failed again: ${flourish}`))




const isIphoneStore = true;
const isIphoneAvailable = true;

function processMessage(){
    return new Promise((resolve, reject) => {
        if(!isIphoneStore){
            reject({
                name: "wrong store",
                message: "sorry, this is a food store"
            })
        }else if(!isIphoneAvailable){
            reject({
                name: "out of stock",
                message: "sorry the x phone is out of stock"
            })
        }else{
            resolve({
                name: "ok",
                message: "The x phone is available, how many would you like to buy"
            })
        }
    })
}


processMessage()
    .then(res => console.log(res.message))
    .catch(error => console.log(error.message))


//practice1
let score = new Promise((resolve, reject) => {
    let passScore = 50;
    if(passScore>= 50){
        resolve({
            name: "Pass mark",
            message: "See you next semester"
        })
    }else{
        reject({
            name:"Below pass mark",
            message: "Try again next year"
        })
    }
})

score
.then(resolve => console.log(resolve))
.catch(reject => console.log(reject))

//practice2
let scoree = 50;
function passScore(){
    return new Promise((resolve, reject) => {
        if(scoree>= 50){
            resolve({
                name: "Pass mark",
                message: "See you next semester"
            })
        }else{
            reject({
                name:"Below pass mark",
                message: "Try again next year"
            })
        }
    })
}

passScore()
.then(resolve => console.log(resolve))
.catch(reject => console.log(reject))

//practice3
let name = new Promise((resolve, reject) => {
    let name = true;
    if(name){
        resolve('My name is Flourish')
    }else{
        reject('You are not Flourish')
    }
})

name
.then(resolve => console.log(resolve))
.catch(reject => console.log(reject))
