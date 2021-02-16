'use strict';

let userName = prompt('Please enter your name');
alert('Welcome to my site '+ userName +' and I am pleased because you visit my site and we going to play the guessing game together');


//>>>>>>>>>>> lab 03
let attempt = 1;
let attemptNum;
let isValidAttempts= true;
let mark = 0;

// 6th question: How much do I weigh?
let weight;
let myWeight = 46;
attemptNum = 4;

do {
  weight = prompt('How much do I weigh?');
  isValidAttempts = attemptsCount ();

  if (isNumber(weight) && Number(weight) !== myWeight){
    console.log(numStatus(weight, myWeight));
  }
  else if (Number(weight) === myWeight){
    alert('Right Answer');
    mark ++;
  }
} while(isValidAttempts && Number(weight) !== myWeight);

// 7th question: Give me one of the prime factors of 210?
let primeFactors = [2, 3, 5, 7];
let userPrimeFactor;
let isArrayElement = false;
attemptNum = 6;

while (isArrayElement === false && isValidAttempts === true) {

  userPrimeFactor = prompt('Give me one of the prime factors of 210?');
  isValidAttempts = attemptsCount();

  for(let i = 0; i < 4; i++){
    if (Number(userPrimeFactor) === primeFactors[i]) {
      isArrayElement = true;
      console.log('Right Answer the prime factors of 210 are --->' + primeFactors);
      mark++;
      break;
    }
    else{
      isArrayElement = false;
    }
  }
}

// >>>>>>>>>>>> lab 02

//Do I have a university degree?
let degree = prompt('Do I have a university degree?').toUpperCase();
console.log('The user asnwer "Do I have a university degree?" ------> '+ degree);

while(!(degree === 'YES' || degree === 'Y' || degree === 'NO' || degree === 'N')){
  alert('INVALID ANSWER, Please Enter (yes OR no OR y OR n)');
  degree = prompt('Do I have a university degree?').toUpperCase();
}

switch (degree) {
case 'YES':
case 'Y':
  // console.log('Yes right answer!!  ^_^ \n I have BSc degree in Computer engineering from Jordan University, also I have diploma degree in IT from WSTC.');
  alert('Yes right answer!!  ^_^ \n I have BSc degree in Computer engineering from Jordan University, also I have diploma degree in IT from WSTC.');
  mark++;
  break;
case 'NO':
case 'N':
  // console.log('NO wrong answer!! -_-\n I have BSc degree in Computer engineering from Jordan University, also I have diploma degree in IT from WSTC.');
  alert('NO wrong answer!! -_-\n I have BSc degree in Computer engineering from Jordan University, also I have diploma degree in IT from WSTC.');
  break;
}

//Am I 25 years old?
let age = prompt('Am I 25 years old?').toUpperCase();
console.log('The user asnwer "Am I 25 years old?" ------> ' + age);

while(!(age === 'YES' || age === 'Y' || age === 'NO' || age === 'N')){
  alert('INVALID ANSWER, Please Enter (yes OR no OR y OR n)');
  age = prompt('Am I 25 years old?').toUpperCase();
}

switch (age) {
case 'YES':
case 'Y':
  // console.log('NO wrong answer!! -_-\n I am 27 years old and My birthday is the same as International Women Day 8th march.');
  alert('NO wrong answer!! -_-\n I am 27 years old and My birthday is the same as International Women Day 8th march.');
  break;
case 'NO':
case 'N':
  // console.log('Yes right answer!!  ^_^ \n I am 27 years old and My birthday is the same as International Women Day 8th march.');
  alert('Yes right answer!!  ^_^ \n I am 27 years old and My birthday is the same as International Women Day 8th march.');
  mark++;
  break;
}

//Do I enjoy programming?
let programming = prompt('Do I enjoy programming?').toUpperCase();
console.log('The user asnwer "Do I enjoy programming?" ------> ' + programming);

while(!(programming === 'YES' || programming === 'Y' || programming === 'NO' || programming === 'N')){
  alert('INVALID ANSWER, Please Enter (yes OR no OR y OR n)');
  programming = prompt('Do I enjoy programming?').toUpperCase();
}

switch (programming) {
case 'YES':
case 'Y':
  // console.log('Yes right answer!!  ^_^  \n I enjoy programming especially when I design websites');
  alert('Yes right answer!!  ^_^  \n I enjoy programming especially when I design websites');
  mark++;
  break;
case 'NO':
case 'N':
  // console.log('NO wrong answer!! -_- \n I enjoy programming especially when I design websites');
  alert('NO wrong answer!! -_- \n I enjoy programming especially when I design websites');
  break;
}

//Do I have a passion for learning new skills?
let passion = prompt('Do I have a passion for learning new skills?').toUpperCase();
console.log('The user asnwer "Do I have a passion for learning new skills?" ------> ' + passion);

while(!(passion === 'YES' || passion === 'Y' || passion === 'NO' || passion === 'N')){
  alert('INVALID ANSWER, Please Enter (yes OR no OR y OR n)');
  passion = prompt('Do I have a passion for learning new skills?').toUpperCase();
}

switch (passion) {
case 'YES':
case 'Y':
  // console.log('Yes right answer!!  ^_^  \n I have a passion for learning and master new skills, and Continuously develop and improve my current knowledge and skills');
  mark++;
  alert('Yes right answer!!  ^_^  \n I have a passion for learning and master new skills, and Continuously develop and improve my current knowledge and skills');
  break;
case 'NO':
case 'N':
  // console.log('NO wrong answer!! -_-\n I have a passion for learning and master new skills, and Continuously develop and improve my current knowledge and skills');
  alert('NO wrong answer!! -_-\n I have a passion for learning and master new skills, and Continuously develop and improve my current knowledge and skills');
  break;
}


//Do I love volunteering?
let volunteering = prompt('Do I love volunteering?').toUpperCase();
console.log('The user asnwer "Do I have a passion for learning new skills?" ------> ' + volunteering);

while(!(volunteering === 'YES' || volunteering === 'Y' || volunteering === 'NO' || volunteering === 'N')){
  alert('INVALID ANSWER, Please Enter (yes OR no OR y OR n)');
  volunteering = prompt('Do I love volunteering?').toUpperCase();
}

switch (volunteering) {
case 'YES':
case 'Y':
  // console.log('Yes right answer!!  ^_^  \n I love volunteering especially with visual impairment people.');
  alert('Yes right answer!!  ^_^  \n I love volunteering especially with visual impairment people.');
  mark++;
  break;
case 'NO':
case 'N':
  // console.log('NO wrong answer!! -_-\n I love volunteering especially with visual impairment people.');
  alert('NO wrong answer!! -_-\n I love volunteering especially with visual impairment people.');
  break;
}

alert('Good-bye '+ userName +' and  I wish you enjoyed playing the guessing game together ^_^ \n you got: ' + mark +' of 7');


////////////////////////////////////////////////////////////////////////////

// function to ckech the number is it too high OR too low
function numStatus(userInput, ans){
  if (userInput < (ans - 5) && attempt !== 1)
    return alert('Too Low');
  else if (userInput > (ans + 5) && attempt !== 1)
    return alert('Too High');
  else if (attempt === 1){
    alert('no more attempts for this question the Right answer is ---> ' + ans);
  }
}

// function to check if the user enter a number
function isNumber(num){
  if(isNaN(num)){
    console.log(isNaN(num));
    alert('Please enter a number');
    return false;
  }
  else
    return true;
}

//function to count is there more attempts
function attemptsCount (){
  if (attempt < attemptNum) {
    attempt++;
    return true;
  }
  else{
    attempt = 1;
    return false;
  }
}

////////////////////////////////////////////////////////////////////////////
