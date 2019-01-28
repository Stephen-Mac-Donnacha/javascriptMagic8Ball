let userName=''; 
if (userName===true){
  console.log('Hello', userName);
} else {
  console.log('Hello!');
}
let userQuestion='Will I study tonight';
console.log('The Question'+ ' '+ userQuestion+' ' +'was asked');
let randomNumber=Math.floor(Math.random()*8);
let eightBall='';

switch(randomNumber){
  case 0:
    eightball='certain';
    break;
  case 1:
    eightBall='It is decidedly so';
    break; 
  case 2:
    eightBall='Reply hazy try again';
    break;
  case 3:
    eightBall='Cannot predict now';
    break;
  case 4:
    eightBall='Do not count on it';
    break;
  case 5:
    eightBall='My sources say no';
    break;
  case 6:
    eightBall='Outlook not so good';
    break;
  case 7:
    eightBall='Signs point to yes';
    break;
}
console.log('The mystic awnsers: ', eightBall);