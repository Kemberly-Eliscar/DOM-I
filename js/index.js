const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street\n Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Setting Nav Content
const navLinks = document.querySelectorAll('nav a');
navLinks[0].textContent = siteContent["nav"]['nav-item-1'];
navLinks[1].textContent = siteContent["nav"]['nav-item-2'];
navLinks[2].textContent = siteContent["nav"]['nav-item-3'];
navLinks[3].textContent = siteContent["nav"]['nav-item-4'];
navLinks[4].textContent = siteContent["nav"]['nav-item-5'];
navLinks[5].textContent = siteContent["nav"]['nav-item-6'];


const nav = document.querySelector('nav');
const newATag = document.createElement('a');
const otherNewATag = document.createElement('a');
const resourcesText = document.createTextNode('Resources');
const extrasText = document.createTextNode('Extras');

newATag.appendChild(resourcesText);
nav.appendChild(newATag);

otherNewATag.appendChild(extrasText);
nav.appendChild(otherNewATag);

const h1 = document.querySelector('h1');
h1.textContent = siteContent['cta'] ['h1'];

const allNavLinks = document.querySelectorAll('nav a');
allNavLinks.forEach((link) => {
  link.style.color = 'green';
})

//title
const title = document.querySelector(".cta-text h1")
title.innerText = "DOM\nIs\n Awesome";

//img
let ctaImg = document.querySelector('.cta img')
ctaImg.setAttribute('src', siteContent['cta']["img-src"])

//Middle Img
let middleImg = document.querySelector('#middle-img')
middleImg.setAttribute('src', siteContent['main-content']["middle-img-src"])


//button
const ctaBut = document.querySelector('button').textContent = siteContent['cta']['button'];

//Middle content
const middleText = document.querySelectorAll(".main-content h4")
middleText[0].textContent = siteContent['main-content']["features-h4"];
middleText[1].textContent = siteContent['main-content']["about-h4"];
middleText[2].textContent = siteContent['main-content']["services-h4"];
middleText[3].textContent = siteContent['main-content']["product-h4"];
middleText[4].textContent = siteContent['main-content']["vision-h4"];

const middleP = document.querySelectorAll(".main-content p")
middleP[0].textContent = siteContent['main-content']["features-content"];
middleP[1].textContent = siteContent['main-content']["about-content"];
middleP[2].textContent = siteContent['main-content']["services-content"];
middleP[3].textContent = siteContent['main-content']["product-content"];
middleP[4].textContent = siteContent['main-content']["vision-content"];

const contactHeader = document.querySelector(".contact h4")
contactHeader.innerText = "Contact";

//contact
const contactP = document.querySelectorAll('.contact p')
contactP[0].textContent = siteContent["contact"]["address"]
contactP[0].style.whiteSpace = "pre"
contactP[1].textContent = siteContent["contact"]["phone"]
contactP[2].textContent = siteContent["contact"]["email"]

//footer
const footer = document.querySelector('footer p').textContent = siteContent['footer']["copyright"]


