const container = document.querySelector('.container');
const card = document.querySelector('.card');
const imageSection = document.querySelector('.image-Section');
const titleSection = document.querySelector('.title-Section');
const sizes = document.querySelector('.sizes');
const purchase = document.querySelector('.purchase');

container.addEventListener('mousemove', (e) => {
    console.log(e.pageX);
    const xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
});

container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';
    imageSection.style.transform=`translateZ(10rem)`;
    titleSection.style.transform=`translateZ(10rem)`;
    sizes.style.transform=`translateZ(10rem)`;
    purchase.style.transform=`translateZ(10rem)`;
});

container.addEventListener('mouseleave', (e) => {
    card.style.transform = `rotateX(${0}deg) rotateY(${0}deg)`;
    card.style.transition = 'all 0.5s ease';
    imageSection.style.transform=`translateZ(0rem)`;
    titleSection.style.transform=`translateZ(0rem)`;
    sizes.style.transform=`translateZ(0rem)`;
    purchase.style.transform=`translateZ(0rem)`;
});
