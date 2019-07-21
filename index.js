function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  
  return document.querySelector('#nested .target') ;
}

function increaseRankBy(n){
  
  let lis = document.querySelectorAll('ul.ranked-list li')
  
  for (let rank in lis){
    rank.innerHTML = (parseInt(rank.innerHTML)+=n).toString();
  }
  
}

function deepestChild(){
  
  
}
