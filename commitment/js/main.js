let changer = document.getElementById('centerGif');
let drinking = document.getElementById('drinking');
let textiles = document.getElementById('textiles');
let messages = document.getElementById('messages');
let research = document.getElementById('messages');

function changeImageGif(value) {
  switch (value) {
    case 0:
    changer.src = "../img/potato_upRight.gif"
      break;
    case 1:
    changer.src = "../img/potato_upLeft.gif"
      break;
    case 2:
    changer.src = "../img/potato_downRight.gif"
      break;
    case 3:
    changer.src = "../img/potato_downLeft.gif"
      break;
    default:
    console.log("error");

  }

}
