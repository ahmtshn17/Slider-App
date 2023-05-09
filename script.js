var models = [
  {
    name: "Bmw 116d",
    image: "img/bmw.jpg",
    link: "http://www.arabalar.com.tr/",
  },
  {
    name: "Honda Civic",
    image: "img/honda.jpg",
    link: "http://www.arabalar.com.tr/",
  },
  {
    name: "Mazda CX-3",
    image: "img/mazda.jpg",
    link: "http://www.arabalar.com.tr/",
  },
  {
    name: "Skoda SuperB",
    image: "img/skoda.jpg",
    link: "http://www.arabalar.com.tr/",
  },
  {
    name: "Volvo S90",
    image: "img/volvo.jpg",
    link: "http://www.arabalar.com.tr/",
  },
];

var index = 0;

var settings = { duration: 1000, random: true };

document.querySelectorAll(".arrow");

randomProgress(settings);

document
  .querySelector(".fa-circle-arrow-left")
  .addEventListener("click", function () {
    index--;
    showSlider(index);
    console.log(index);
  });

document
  .querySelector(".fa-circle-arrow-right")
  .addEventListener("click", function () {
    index++;
    showSlider(index);
    console.log(index);
  });
var interval;
function randomProgress(setting) {
  var next;
  interval = setInterval(function () {
    if (setting.random == true) {
      //random
      next = index;
      do {
        index = Math.floor(Math.random() * models.length);
      } while (index == next);
      showSlider(index);
      console.log(index);
    } else {
      //artan
      index++;
      if (index < 0) {
        index = models.length - 1;
      }
      if (index >= models.length) {
        index = 0;
      }
      showSlider(index);
      console.log(index);
    }
  }, setting.duration);
}

document.querySelectorAll(".arrow").forEach(function (item) {
  item.addEventListener("mouseenter", function () {
    clearInterval(interval);
  });
});

document.querySelectorAll(".arrow").forEach(function (item) {
  item.addEventListener("mouseleave", function () {
    randomProgress(settings);
  });
});

function showSlider(i) {
  if (i < 0) {
    index = models.length - 1;
  }
  if (i >= models.length) {
    index = 0;
  }

  document
    .querySelector(".card-img-top")
    .setAttribute("src", models[index].image);

  document.querySelector(".card-title").textContent = models[index].name;

  document.querySelector(".card-link").setAttribute("href", models[index].link);
}
