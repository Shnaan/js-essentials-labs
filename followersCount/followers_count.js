let count = 0; //Intialize count to 0

function increaseCount(){

count++; //Increase count by 1
displayCount(); // Display the count
checkCountValue(); //Check count value and display message
}

function displayCount() {
document.getElementById('countDisplay').innerHTML=count; // Display the count in the HTML
}

function checkCountValue() {
  if (count === 10) {
    alert("Your Instagram post gained 10 followers! Congratulations!");
  } else if (count === 20) {
    alert("Your Instagram post gained 20 followers! Keep it up!");
  }
}

function resetCount(){
    count = 0 ;
    document.getElementById('countDisplay').innerHTML=count; // reset count 
    
     // Let the browser repaint, then show alert
    setTimeout(() => {
        alert("Followers count has been reset");
    }, 0);


}
