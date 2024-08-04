function generatePass() {
    let pass = ''
    let str =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz0123456789@#$'
  for (let i = 1; i <= 16; i++) {
    let char = Math.floor(Math.random() * str.length + 1)
    pass += str.charAt(char)
  }
  document.getElementById('result').value=pass
}

function copy(){
    var copyText = document.getElementById("result");
    navigator.clipboard.writeText(copyText.value);
}