document.getElementById('dots1').addEventListener('click', function () {
    var options1 = document.getElementById('options1');
    options1.style.display = (options1.style.display === 'none') ? '' : 'none';
});

document.getElementById('dots2').addEventListener('click', function () {
    var options2 = document.getElementById('options2');
    options2.style.display = (options2.style.display === 'none') ? '' : 'none';
});

document.getElementById('dots3').addEventListener('click', function () {
    var options3 = document.getElementById('options3');
    options3.style.display = (options3.style.display === 'none') ? '' : 'none';
});

document.getElementById('dots4').addEventListener('click', function () {
    var options4 = document.getElementById('options4');
    options4.style.display = (options4.style.display === 'none') ? '' : 'none';
});

Array.from(document.getElementsByClassName('content_item1')).forEach(function (element) {
    element.addEventListener('mouseover', function () {
        Array.from(document.getElementsByClassName('content_item1')).forEach(function (el) {
            el.style.border = 'none';
        });
        this.style.borderBottom = '0.1px solid black';
    });
});

document.querySelector('.content_item1').addEventListener('mouseout', function () {
    document.querySelector('.content_item1').style.border = 'none';
    document.querySelector('.content_item2_1').style.borderBottom = '0.1px solid black';
});

document.querySelector('#location_bar').value = 'Noida, India';

document.querySelector('#location').addEventListener('focusin', function () {
    document.querySelector('#location_bar').value = '';
    document.querySelector('.change_loc').src = 'images/Vector copy 9.svg';
});

document.querySelector('#location').addEventListener('focusout', function () {
    document.querySelector('.change_loc').src = 'images/Vector copy 7.svg';
});

document.querySelector('.change_loc').addEventListener('click', function () {
    var img_loc = document.querySelector('.change_loc').src;

    document.querySelector('#location_bar').value = '';
    if (img_loc == 'images/Vector copy 7.svg') {
        document.querySelector('.change_loc').src = 'images/Vector copy 9.svg';
    } else {
        document.querySelector('.change_loc').src = 'images/Vector copy 7.svg';
    }
});

const element = document.querySelector('.follow');

if (element) {
    element.addEventListener('click', () => {
        this.textContent = 'Followed';
        this.style.backgroundColor = 'black';
        this.style.color = 'white';
    });
}

document.querySelector('.pass_img').addEventListener('click', function () {
    var show_pass = document.querySelector('#show_pass');
    if (show_pass.type === 'password') {
        show_pass.type = 'text';
    } else {
        show_pass.type = 'password';
    }
});

document.querySelector('.create_acc').addEventListener('click', function () {
    document.querySelector('.acc_page').style.visibility = 'visible';
    document.body.style.overflow = 'hidden';
});

document.querySelector('.close_signup_page').addEventListener('click', function () {
    document.querySelector('.acc_page').style.visibility = 'hidden';
    document.body.style.overflow = 'unset';
});

document.querySelector('#go_to_create').addEventListener('click', function () {
    document.querySelector('#signup_2').classList.remove('d-none');
    document.querySelector('#signup_3').classList.remove('d-none');
    document.querySelector('#signup_4').classList.add('d-none');
    document.querySelector('#signup_5').classList.add('d-none');
});

document.querySelector('#go_to_sign').addEventListener('click', function () {
    document.querySelector('#signup_2').classList.add('d-none');
    document.querySelector('#signup_3').classList.add('d-none');
    document.querySelector('#signup_4').classList.remove('d-none');
    document.querySelector('#signup_5').classList.remove('d-none');
});

document.querySelector('#join_grp').addEventListener('click', function () {
    document.querySelector('#join_grp').classList.add('d-none');
    document.querySelector('#leave_grp').classList.remove('d-none');
});

document.querySelector('#leave_grp').addEventListener('click', function () {
    document.querySelector('#leave_grp').classList.add('d-none');
    document.querySelector('#join_grp').classList.remove('d-none');
});

document.querySelector('#header_join_grp').addEventListener('click', function () {
    document.querySelector('#header_join_grp').classList.add('d-none');
    document.querySelector('#header_leave_grp').classList.remove('d-none');
});

document.querySelector('#header_leave_grp').addEventListener('click', function () {
    document.querySelector('#header_leave_grp').classList.add('d-none');
    document.querySelector('#header_join_grp').classList.remove('d-none');
});

document.querySelector('#post_mob').addEventListener('click', function () {
    document.querySelector('.mob_acc_page').style.visibility = 'visible';
    document.body.style.overflow = 'hidden';
    document.querySelector('.mob_signup_page').style.bottom = '0%';
});

document.querySelector('#mob_join_grp').addEventListener('click', function () {
    document.querySelector('.mob_acc_page').style.visibility = 'visible';
    document.body.style.overflow = 'hidden';
    document.querySelector('.mob_signup_page').style.bottom = '0%';
});

document.querySelector('#close_mob_sign_1').addEventListener('click', function () {
    document.querySelector('.mob_signup_page').style.bottom = '-100%';
    document.querySelector('.mob_acc_page').style.visibility = 'hidden';
    document.body.style.overflow = 'unset';
    document.querySelector('#header_leave_grp').classList.add('d-none');
    document.querySelector('#header_join_grp').classList.remove('d-none');
});

document.querySelector('#close_mob_sign_2').addEventListener('click', function () {
    document.querySelector('.mob_signup_page').style.bottom = '-100%';
    document.querySelector('.mob_acc_page').style.visibility = 'hidden';
    document.body.style.overflow = 'unset';
    document.querySelector('#header_leave_grp').classList.add('d-none');
    document.querySelector('#header_join_grp').classList.remove('d-none');
});

document.querySelector('#mob_go_to_create').addEventListener('click', function () {
    document.querySelector('#mob_signup_2').classList.remove('d-none');
    document.querySelector('#mob_signup_3').classList.remove('d-none');
    document.querySelector('#mob_signup_4').classList.add('d-none');
    document.querySelector('#mob_signup_5').classList.add('d-none');
});

document.querySelector('#mob_go_to_sign').addEventListener('click', function () {
    document.querySelector('#mob_signup_2').classList.add('d-none');
    document.querySelector('#mob_signup_3').classList.add('d-none');
    document.querySelector('#mob_signup_4').classList.remove('d-none');
    document.querySelector('#mob_signup_5').classList.remove('d-none');
});

window.addEventListener('resize', function () {
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    var viewsElements = document.querySelectorAll('.views');
    for (var i = 0; i < viewsElements.length; i++) {
        if (viewportWidth < 500) {
            viewsElements[i].style.display = 'none';
        } else {
            viewsElements[i].style.display = 'inline';
        }
    }
}, false);

window.addEventListener('resize', function () {
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    var viewsElements = document.querySelectorAll('.me-1');
    for (var i = 0; i < viewsElements.length; i++) {
        if (viewportWidth < 500) {
            viewsElements[i].style.display = 'none';
        } else {
            viewsElements[i].style.display = 'inline';
        }
    }
}, false);
