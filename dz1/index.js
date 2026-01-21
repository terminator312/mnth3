const message = document.querySelector("h1")

const color = prompt ("Enter color")
if (color === 'red'){
    document.body.style.background = color 
    message.innerText = `Введен цвет ${color}`
}else if(color === `yellow`){
    document.body.style.background = color
    message.innerText = `Введен цвет ${color}`
}else if(color === `green`){
    document.body.style.background = color
    message.innerText = `Введен цвет ${color}`
}else {
    message.innerText = `Ошибка! Введите корректный цвет`
}

