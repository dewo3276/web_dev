let changer = document.getElementById('centerGif');
let drinking = document.getElementById('drinking');
let textiles = document.getElementById('textiles');
let messages = document.getElementById('messages');
let research = document.getElementById('messages');

function changeImageGif(value) {
  switch (value) {
    case 0:
    changer.src = "../img/potato_upRight.gif"
    document.getElementById("researchpara").style.display="block"
      break;
    case 1:
    changer.src = "../img/potato_upLeft.gif"
    document.getElementById("drinkingpara").style.display="block"
      break;
    case 2:
    changer.src = "../img/potato_downRight.gif"
    document.getElementById("textilespara").style.display="block"
      break;
    case 3:
    changer.src = "../img/potato_downLeft.gif"
    document.getElementById("messagespara").style.display="block"
      break;
    default:
    console.log("error");
  }

}

function holyAnimation()
{
  document.getElementById('potatoWingsGif').style.animation="holy 5s 1"
}


function showfatman()
{
  document.getElementById('godPotato').style.backgroundImage="url('../img/fire.gif')"
  document.getElementById('runawayIMG').style.display="block"
  document.getElementById('demonPotato').style.display="block"
}
