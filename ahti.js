document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.buttons label');
    const contents = document.querySelectorAll('.content .box');
    const underline = document.querySelector('.underline');

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            contents.forEach(content => {
                content.style.display = 'none';
            });
            contents[index].style.display = 'block';
            moveUnderline(button);
        });
    });

    function moveUnderline(button) {
        const buttonRect = button.getBoundingClientRect();
        underline.style.width = `${button.offsetWidth}px`;
        underline.style.transform = `translateX(${button.offsetLeft}px)`;
    }
});

$(document).ready(function () {

    $('.content').show();
    window


});


$(document).ready(function () {
    $('.container').show();

    $("#back").click(function () {
        $('.chatbox').hide();
    })

    $(".open").click(function () {
        $('.chatbox').show(); // Show the .chatbox element
    })
});

// const chats = document.getElementById('chats').addEventListener('submit', e => {
    
// });

// const msg = document.getElementById('msg');
// chats.innerHTML = msg;




// let back = document.querySelector('.back');
// let chatbox = document.querySelector('.chatbox');
// let open = document.querySelector('.open');

// back.onclick = function () {
//     chatbox.classList.add('hide');
// }

// open.onclick = function () {
//     chatbox.classList.remove('hide');
// }