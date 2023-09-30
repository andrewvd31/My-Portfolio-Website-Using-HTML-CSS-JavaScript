let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector(`header nav a[href*= ${id}]`).classList.add('active');
            });
        };
    });
    let headerEl = document.querySelector('header');
    headerEl.classList.toggle('sticky',window.scrollY > 100)
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
};

ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
})

ScrollReveal().reveal('.home-content,.contact,.about-img', {origin: 'left'});

ScrollReveal().reveal('.home-img', {origin: 'right'})

ScrollReveal().reveal('.about-content', {origin: 'top'})

const typed = new Typed('.multi-text',{
    strings: ['Frontend Developer', 'Youtuber', 'Musician'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

document.getElementById('contact-form').addEventListener('submit',(e)=>{
    e.preventDefault()
    var params = {
        from_name : document .getElementById("fullName").value,
        email_id : document.getElementById("emailId").value,
        message : document. getElementById("message").value,
        mobileNum : document.getElementById('mobileNum').value,
        emailSub : document.getElementById('emailSub').value
    }
    emailjs.send("service_ieyvfs7", "template_v91tumo", params).then(function (res){
        alert("Success! " + res.status);
        document .getElementById("fullName").value = ''
        document .getElementById("emailId").value = ''
        document .getElementById("message").value = ''
        document .getElementById("mobileNum").value = ''
        document .getElementById("emailSub").value = ''
    })
})