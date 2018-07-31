function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n){
  const lis = document.getElementsByTagName('ul.ranked-list li')
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML += n
  }
}

function deepestChild(){
  return document.querySelectorAll('div#grand-node div')[3]
}
