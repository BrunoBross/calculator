let operation = ''

function clicked(buttonClicked=String){
  
  if(buttonClicked == '='){
    console.log(Math.eval(operation))
  }
  if(9 >= buttonClicked >= 0){
    operation += buttonClicked
    console.log(operation)
  }
}