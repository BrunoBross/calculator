function clicked(buttonClicked=String){
  const operation = ''
  if(buttonClicked == '='){
    console.log(math.eval(operation))
  }
  if(9 >= buttonClicked >= 0){
    operation += buttonClicked
    console.log(operation)
  }
}