
const pictures = [ 
"img1",
"img2",
"img3",
"img4",
"img5",

];

const bodyImg = document.querySelector('body');
const buttons = document.querySelectorAll('.btn');
const imgContainer = document.querySelector('.img-container');

let counter = 0;
buttons.forEach(function(button){
  button.addEventListener('click', function(changeImg){
    if(button.classList.contains('btn-left')){
      counter--
      if(counter < 0){
        counter = pictures.length-1
      }
      imgContainer.style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`
      bodyImg.style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`
    }
    if(button.classList.contains('btn-right')){
      counter++
      if(counter > pictures.length-1){
        counter = 0
      }
      imgContainer.style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`
      bodyImg.style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`
    }
  })
})
