function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n){
  let list = document.querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < list.length; i++){
    list[i].innerHTML = (i + 1).toString()
  }
}

function deepestChild(){
  return document.
}
