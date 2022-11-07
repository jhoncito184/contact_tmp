var init = function () {
    
}

var showModal = function () {
    var chat = document.querySelector('.chat'),
        fixed = document.querySelector('.fixed-blur-bgd'),
        prime = document.querySelector('#prime')

        
    prime.addEventListener("click", function() { 
        chat.classList.add('is-visible')
        fixed.style.display = 'block'
    });
}

var closeModal = function () {
    var chat = document.querySelector('.chat'),
        fixed = document.querySelector('.fixed-blur-bgd'),
        icon_remove = document.querySelectorAll('.icon-remove')[0],
        icon_remove_2 = document.querySelectorAll('.icon-remove')[1],
        arrayClicks = [fixed, icon_remove, icon_remove_2]

    arrayClicks.forEach(function(arrayClick) {
        arrayClick.addEventListener('click', function() {
            chat.classList.remove('is-visible')
            fixed.removeAttribute('style')
            icon_remove.removeAttribute('style')
        })
    })
}

var addContactAction = function () {
    var sendMail = document.querySelector('.sendMail'),
        sendMyPhone = document.querySelector('.sendMyPhone'),
        fab_step1 = document.querySelector('.fab-step1'),
        fab_step2 = document.querySelector('.fab-step2')

    sendMail.addEventListener('click', function() {
        console.log(sendMail)
        fab_step1.style.display = 'none'
        fab_step2.style.display = 'block'
    })
}

var main = function () {
    init()
    showModal()
    closeModal()
    addContactAction()
};
  
document.addEventListener('DOMContentLoaded', main);