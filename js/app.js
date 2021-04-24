
const pictures = [ 
"img1",
"img2",
"img3",
"img4",
"img5",

];

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
    }
    if(button.classList.contains('btn-right')){
      counter++
      if(counter > pictures.length-1){
        counter = 0
      }
      imgContainer.style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`
    }
  })
})


/* 
(function() {
  const pictures = [
    "contBcg-0",
    "contBcg-1",
    "contBcg-2",
    "contBcg-3",
    "contBcg-4"
  ];

  const buttons = document.querySelectorAll('.btn')
  const imageDIV = document.querySelector('.img-container')
  let counter = 0

  buttons.forEach(function(button){
    button.addEventListener('click', function(e){
      if (button.classList.contains('btn-left')){
        counter--
        if(counter < 0){
          counter = pictures.length -1
        }
        imageDIV.style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`
      }
      if (button.classList.contains('btn-right')){
        counter++
        if(counter > pictures.length -1){
          counter = 0
        }
        imageDIV.style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`
      }
    })
  })
})(); */
