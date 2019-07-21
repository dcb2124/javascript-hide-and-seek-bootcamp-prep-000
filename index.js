function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  
  return document.querySelector('#nested .target') ;
}

function increaseRankBy(n){
  
  let lis = document.querySelectorAll('ul.ranked-list li')
  
  for (let i = 0; i < lis.length; i++) {
    
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n).toString();
    
  }

  
}

function deepestChild(){
  
  return document.querySelector('div#grand-node div div div div')
  
}
