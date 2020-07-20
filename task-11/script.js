var keys = ['Synthetic', 'Wool', 'Denim', 'Silk', 'Linen']    

var mySwiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<div class="' + className + '">' + (keys[index]) + 
            '</div>';
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});