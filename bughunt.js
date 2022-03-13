var brainBug = Math.floor(Math.random() * 8)
var arachnid = Math.floor(Math.random() * 8)

function bughunt(id,brainBug,arachnid) {
  if (id === brainBug){
    document.getElementById(id).innerHTML = '🐛'
    alert("You win")
  }
  else if (id === arachnid){
    document.getElementById(id).innerHTML = '🕷️'
    alert("You lose")
  }
  else if (id === brainBug === arachnid){
    document.getElementById(id).innerHTML = '🕷️'
    alert("You lose")
  }
  else {
    document.getElementById(id).innerHTML = '🏜️'
  }
}
