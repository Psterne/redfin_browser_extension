var homeCards = document.getElementsByClassName('FavoritesHome');

for(i=0;i<homeCards.length;i++){
  if(homeCards[i].innerText.substring(0,7) === 'PENDING'){
    homeCards[i].style.display = 'none';
  }
}
