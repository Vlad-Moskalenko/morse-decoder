const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let res = []
    let str = ''
    for(let i=0; i<expr.length; i+=10){
      let out = ''
        let arr = expr.slice(i, i+10);
        arr = arr.slice(arr.indexOf('1')).split('')
        for(let j=0; j<arr.length; j+=2){
          let sum = arr[j] + arr[j+1]
          if(sum%10===0) out+= '.';
          if(sum%11===0) out+= '-';
      }  
      res.push(out)
    }
    res.forEach(item => {if(item === '') {str+= ' '} 
  else{str+=MORSE_TABLE[item]}})
    return str
}

module.exports = {
    decode
}