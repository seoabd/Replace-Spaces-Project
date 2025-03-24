function replaceSpaces(input) {
    let result = '';
    for(let i= 0; i < input.length; i++){
      if(input[i] == ' '){
        result += '-';
      }else{
        result += input[i];
      }
    }
    return result;
  }
