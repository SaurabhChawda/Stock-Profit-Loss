var initialPrice = document.querySelector("#Initial-Price");
var Quantitystocks = document.querySelector("#QOS");
var currentPrice = document.querySelector("#Current-Price");
var clickbtn = document.querySelector("#Clickbtn");
var outputBox = document.querySelector("#Output");

clickbtn.addEventListener("click", submitHandler);

function submitHandler(){
  var Initial = initialPrice.value;
  var Quantity = Quantitystocks.value;
  var current = currentPrice.value;

   var Initialvalue=Initial*Quantity;
   var currentvalue=current*Quantity;

  if(Initialvalue > currentvalue){
      var onstockloss=Initialvalue-currentvalue;
      var onstocklossper=(onstockloss/Initialvalue)*100
          showOutput(
      `The loss is ${onstockloss} and the loss percent is ${onstocklossper}%`
    );
      
  }
  else if (currentvalue > Initialvalue){
        var onstockprofit=currentvalue-Initialvalue;
        var onstockprofit=(onstockprofit/Initialvalue)*100
        showOutput(
            `The profit is ${onstockprofit} and the profit percent is ${onstockprofit}%`
          );
    }
    else if(currentvalue == Initialvalue) {
        showOutput(`No Profit No Loss!!`);
      }
      else{
        showOutput(`Please Buy Stocks First!!`);
      }
    }
    function showOutput(message) {
      outputBox.innerHTML = message;
    }

