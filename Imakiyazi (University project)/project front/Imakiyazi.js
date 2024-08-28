// function change() {
//     $("#block1").animate({opacity: '0'}, "slow");
// }
// это ссылки на видео, "Творчество"
function close_map() {
    document.querySelector(".karta").style.display = "none";
}
function close_abt() {
    document.querySelector(".imak").style.display = "none";
}
function close_team() {
    document.querySelector(".row").style.display = "none";
}

function close_tv() {
    document.querySelector(".tv").style.display = "none";    
    document.querySelector(".tv2").style.display = "none";
}
function close() {    
    document.getElementById("block1").style.display = "none";
    document.getElementById("block2").style.display = "none";    
    document.getElementById("block3").style.display = "none";
} 
function close_team2() {
    document.querySelector(".ryad2").style.display = "none";
}
//фунции закрытия


function change() {
    close();
    close_map();
    close_team();
    close_team2();
    close_abt();
    document.querySelector(".tv").style.display = "block";
    document.querySelector(".tv2").style.display = "block";
    $(".tv").animate({opacity:'1'}, 700);
    $(".tv2").animate({opacity:'1'}, 700);
    
}
function connect() {
    close();
    close_tv();
    close_team();
    close_team2();
    close_abt();
    document.querySelector(".karta").style.display = "block";
    $(".karta").animate({opacity: '1'}, 700);
    $(".location").animate({opacity: '1'}, 700);
}
//насчет фидбэка 
function send() {
    $("#sended").animate({opacity:'1'}, "slow");
    $("#sended").animate({opacity:'0'}, 5000);
    var a = document.getElementById("critic").innerHTML;
    if (a.length >= 50) {
        document.getElementById("sended").innerHTML = "Too short";
    } 
}
//team
function zakadrom() {
    close();
    close_tv();
    close_map();
    close_team();
    close_abt();
    document.querySelector(".ryad2").style.display = "flex";
    $(".ryad2").animate({opacity: '1'}, 700);
}
function showteam(){
    close();
    close_tv();
    document.querySelector(".row").style.display = "flex";
    $(".row").animate({opacity:'1'}, "slow")
    close_map();
    close_team2();
    close_abt();
}
    function slide(){
        $(".ourt").slideToggle();
        document.querySelector(".ourt").style.display = "flex";
    }
    
    $("#creative").click(function() {
        $(".ourt").slideUp();
    });
    $("#feedback").click(function() {
        $(".ourt").slideUp();
    });
    $("#about").click(function() {
        $(".ourt").slideUp();
    });
    $("#vkadre").click(function() {
        $(".ourt").slideUp();
    });
    $("#zakadrom").click(function() {
        $(".ourt").slideUp();
    });



var myMap;

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [52.285577, 76.940947],
            zoom: 12
        }, {
            searchControlProvider: 'yandex#search'
        }),
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),
            myPlacemark = new ymaps.Placemark([52.281831, 76.955329], { //abaya 111
            hintContent: 'A custom placemark icon',
            balloonContent: 'Our filial 1'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'https://www.freeiconspng.com/thumbs/location-icon-png/location-icon-map-png--1.png  ',
            iconImageSize: [30, 30],
            iconImageOffset: [-15, -30]
        }),

        myPlacemarkWithContent2 = new ymaps.Placemark([52.282455, 76.940190], {
            hintContent: 'A custom placemark icon with contents',
            balloonContent: 'Our filial 2',
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'https://www.freeiconspng.com/thumbs/location-icon-png/location-icon-map-png--1.png',
            iconImageSize: [30, 30],
            iconContentOffset: [15, 15],
            iconImageOffset: [-15, -30],
            iconContentLayout: MyIconContentLayout
        }),
            myPlacemarkWithContent = new ymaps.Placemark([52.324955, 76.928954], {
            hintContent: 'A custom placemark icon with contents',
            balloonContent: 'Our studio',
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'https://www.freeiconspng.com/thumbs/location-icon-png/location-icon-map-png--1.png',
            iconImageSize: [37, 37],
            iconImageOffset: [-17, -38],
            iconContentOffset: [15, 15],
            iconContentLayout: MyIconContentLayout
        }),
            myGeoObject = new ymaps.GeoObject({
            geometry: {
                type: "LineString",
                coordinates: [
                    [52.281831, 76.955329],
                    [52.282455, 76.940190],
                    [52.324955, 76.928954],
                    [52.281831, 76.955329]
                ]
            },
            properties:{
                hintContent: "I'm a geo object",
                balloonContent: "You can drag me"
            }
        }, {
            draggable: true,
            strokeColor: "#FF0000",
            strokeWidth: 3
        });
    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent2)
        .add(myGeoObject)
        .add(myPlacemarkWithContent);
});

//about us
function about() {
    close();
    close_map();
    close_team();
    close_tv();
    close_team2();
    document.querySelector(".imak").style.display = "flex";
    $(".imak").animate({opacity: '1'}, 700);
} 
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }