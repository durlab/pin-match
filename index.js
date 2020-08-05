
// document.getElementById("didntMatch").style.display = "none";
// document.getElementById("matched").style.display = "none";


// pin generation

var pinBtn = document.getElementById('pinGenerate');
pinBtn.addEventListener('click',function(){
    document.getElementById('pinOutput').value = Math.round(Math.random()*999+999); 

    document.getElementById("matched").innerHTML = '';

})

// key press

function pressPin(id){
    var key = document.getElementById(id);
key.addEventListener('click',function(){
    document.getElementById('showPin').value += this.innerText;
})
}

pressPin('one');
pressPin('two');
pressPin('three');
pressPin('four');
pressPin('five');
pressPin('six');
pressPin('seven');
pressPin('eight');
pressPin('nine');
pressPin('zero');




// clear key

var clearKey = document.getElementById('clear');
clearKey.addEventListener('click',function(){
    document.getElementById('showPin').value ='';
})


// backspace Key

var backspaceKey = document.getElementById('backspace');
backspaceKey.addEventListener('click',function(){
    document.getElementById('showPin').value = document.getElementById('showPin').value.slice(0,-1);
})


// match the pin by clicking submit button

var matchBtn = document.getElementById('match');
matchBtn.addEventListener('click',function(){
   if(document.getElementById('pinOutput').value != 0 || document.getElementById('showPin').value !=0)
   {

    if(document.getElementById('pinOutput').value == document.getElementById('showPin').value)
    {
        document.getElementById("matched").innerHTML = "✅ Pin Matched... Secret door is opening for you";
    }
        else
        {
            document.getElementById("matched").innerHTML = "❌ Pin Didn't Match, Please try again";
        }
   }


    document.getElementById('pinOutput').value = '';
    document.getElementById('showPin').value = '';

    var clicks = parseInt(document.getElementById("tryLeft").innerHTML);
    clicks -= 1;
    document.getElementById("tryLeft").innerHTML = clicks;  

    if (clicks < 0) {
        alert("You have no chance left, wait for 5 seconds ")
        document.getElementById("tryLeft").innerHTML = 0;
        document.getElementById("matched").innerHTML = "";
        

        // refresh function
        
        function timedRefresh(time) {
            setTimeout(() => {
              location.reload(true);
            }, time)
          }
          (() => {
            timedRefresh(3000);
            setTimeout(() => {
           
            }, 50)
          })();
     }
})

