// VARIABLES
let contactForm = document.getElementById('contact-form');
let contactBtn = document.getElementById('contact-btn');
let contactBtnImg = document.createElement('img');
contactBtnImg.src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/50/000000/external-check-multimedia-kiranshastry-lineal-kiranshastry.png";

// LOGIC
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    contactBtn.textContent = "";
    contactBtn.appendChild(contactBtnImg);

    // REVERT THE BTN TO ORIGINAL STATE AFTER ONE SEC
    setTimeout(() => {
        contactBtn.removeChild(contactBtnImg);
        contactBtn.textContent = "Send";
    }, 1000)  
});