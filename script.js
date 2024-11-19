const bottons = document.querySelectorAll('a[href^="#"]')
console.log(bottons)

bottons.forEach(function(botton){
    botton.addEventListener('click',function(e){
        e.preventDefault();
        const targetId = this.getAttribute('href')
        console.log(targetId)

        const targetElement = document.querySelector(targetId)
        console.log(targetElement)
        targetElement.scrollIntoView({
            behavior:'smooth',
            block:'start'
        })
    
    })
})