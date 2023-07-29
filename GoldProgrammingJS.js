function UncroppedAlbumReveal1(){
    var x = document.getElementById("Reveal1");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
const AlbumButton = document.getElementById('btnAlbum')


AlbumButton.addEventListener('click', function handleClick(){
  if(AlbumButton.textContent == 'Reveal'){
    AlbumButton.textContent = 'Hide'
  }
  else{
    AlbumButton.textContent = 'Reveal'
  }
})
var yearInput = document.getElementById('frm1').elements.value;

/**
 * 
 * @param {number} yearInput 
 */
function revenueCalculator(yearInput){
  var yearCheck = yearInput - yearCheck;
  var currentRev = 32136.92;
  text = '';
  for(i=0;i<yearCheck;i++){
    currentRev = currentRev*1.2;
  }
  text = currentRev;
  if(yearInput>2025){
    document.getElementById('formOutput').innerHTML = currentRev;
  }
  else{
    document.getElementById('formOutput').innerHTML = 'The year you have entered is not valid, please enter one above 2025' ;
  }

}