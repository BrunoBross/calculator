function clicked(buttonClicked){
  const operation = ''
  if(9 >= buttonClicked >= 0){
    operation += buttonClicked
    console.log(operation)
  }
  console.log(math.eval(operation))
}