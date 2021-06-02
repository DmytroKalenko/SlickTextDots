$('.slider').slick({
    dots: true,
    customPaging: function (slider, i) {
        var title = $(slider.$slides[i]).data('title');
        return '<span class="dots__item">' + title +  '</span>';
    },
    dotsClass: 'slider-dots',
    
});



const img = document.querySelectorAll(".slick-track  > div:not(.slick-cloned) img");
const TitleImg = [];
const Dots = document.querySelectorAll(".dots__item");

img.forEach(element => {
    TitleImg.push(element.getAttribute("alt"))
});

for (let i = 0; i < img.length; i++) {
    Dots[i].textContent = TitleImg[i];  
    
}