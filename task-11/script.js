var keys = ['Synthetic', 'Wool', 'Denim', 'Silk', 'Linen']    

var mySwiper = new Swiper('.swiper-container', {
    //effect: 'fade',
    speed: 3000,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    pagination: {
        el: '.elements',
        clickable: true,
        renderBullet: function (index, className) {
            return '<div class="' + className + '">' + (keys[index]) + 
            '</div>';
        },
    }
});