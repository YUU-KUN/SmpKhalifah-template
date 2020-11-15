// $(document).ready(function(){
//     $(".owl-carousel").owlCarousel();
//   });

// $('.owl-carousel').owlCarousel({
//     loop:true,
//     responsiveClass:true,
//     responsive:{
//         0:{
//             items:1,
//             nav:true
//         },
//         800:{
//             items:1,
//             nav:false
//         },
//         1000:{
//             items:3,
//             nav:true,
//             loop:false
//         }
//     }
// })

$('.loop').owlCarousel({
    center: true,
    items:2,
    loop:true,
    center: true,
    // margin:10,
    responsive:{
        1000:{
            items:4
        },
        800:{
            items:4
        },
        300:{
            items:1
        }
    }
});