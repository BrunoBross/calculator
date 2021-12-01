function clicked(buttonClicked=String){
  let operation = ''
  console.log(buttonClicked)
  if(buttonClicked == '='){
    console.log(math.eval(operation))
  }
  if(9 >= buttonClicked >= 0){
    operation = operation.concat(buttonClicked)
    console.log(operation)
  }
}