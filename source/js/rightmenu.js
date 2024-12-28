var rightmenu = {};

rightmenu.show = function (show, posx = 0, posy = 0) {
  if (show) {
    let menu = document.getElementById("rightmenu");
    menu.style.display = "block";
    menu.style.left = posx + "px";
    menu.style.top = posy + "px";
  } else {
    document.getElementById("rightmenu").style.display = "none";
  }
};

rightmenu.scrollToTop = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

rightmenu.copySelect = function () {
  navigator.clipboard
    .writeText(document.getSelection().toString())
    .catch((err) => {
      console.log("Something went wrong", err);
    });
};

rightmenu.googleSelect = function () {
  let select = document.getSelection().toString();
  window.open("https://www.google.com/search?q=" + select);
};

function actionmenu() {
  window.oncontextmenu = function (event) {
    if (event.shiftKey) {
      document.getElementById("rightmenu").style.display = "none";
      return;
    }

    event.preventDefault();
    let mousex = event.clientX;
    let mousey = event.clientY;

    if (mousex + 140 > window.innerWidth) {
      mousex -= 140 + 10;
    }
    if (mousey + 140 > window.innerHeight) {
      mousey -= mousey - window.innerHeight + 140 + 10;
    }
    rightmenu.show(true, mousex, mousey);
    window.addEventListener("click", function () {
      rightmenu.show(false);
    });
    window.onscroll = () => {
      rightmenu.show(false);
    };
  };
}

actionmenu();
