// VARIABLES
let drinkProducts = document.querySelectorAll('.drink-products div');
let eatProducts = document.querySelectorAll('.eat-products div');
let options = {
    threshold: [0.85]
};
let observeTarget = document.querySelector('header');

let themeBtn = document.getElementById('theme-toggle-btn');
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

themeBtn.addEventListener('click', () => {
    if (themeBtn.dataset.theme == "coffee")
    {
        document.querySelector('main').className = "light-mode";
        themeBtn.dataset.theme = "light";
        themeBtn.style.backgroundColor = "chocolate";
    }else
    {
        document.querySelector('main').className = "coffee-mode";
        themeBtn.dataset.theme = "coffee";
        themeBtn.style.backgroundColor = "white";
    }
});

const animateProducts = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting)
        {
            eatProducts.forEach(product => {
                product.style.opacity = "0";
            });
            
            drinkProducts.forEach(product => {
                product.style.opacity = "0";
            });
        }
        else
        {
            eatProducts.forEach(product => {
                product.style.opacity = "1";
            });

            drinkProducts.forEach(product => {
                product.style.opacity = "1";
            });
        }
    });
}

let observer = new IntersectionObserver(animateProducts, options);
observer.observe(observeTarget);