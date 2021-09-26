
// // pattern one

// // *****
// // *****
// // *****
// // *****
// // *****

// const patternOne = (line=5) => {

//   let ptn = "";
//   for(let it=0; it<line; it++){
    
//     for(let _it=0; _it<line; _it++){
//        ptn = ptn+"* "
//     }
//     ptn = ptn+ "\n"
//   }
//   console.log(ptn)
// }



// // *
// // **
// // ***
// // ****
// // *****

// const patternTwo = (line=5) => {

//   let ptn = "";
//   for(let it=0; it<line; it++){
    
//     for(let _it=0; _it<=it; _it++){
//        ptn = ptn+"* "
//     }
//     ptn = ptn+ "\n"
//   }
//   console.log(ptn)
// }
  

// // *****
// // ****
// // ***
// // **
// // *

// const patternThree = (line=5) => {
//   let ptn = "";
//   for(let it=0; it<line; it++){
    
//     for(let _it=0; _it<line-it; _it++){
//        ptn = ptn+"* "
//     }
//     ptn = ptn+ "\n"
//   }
//   console.log(ptn)
// }

// // 1
// // 1 2
// // 1 2 3
// // 1 2 3 4
// // 1 2 3 4 5



// const patternFour = (line=5) => {
//   let ptn = "";
//   for(let it=1; it<=line; it++){
    
//     for(let _it=1; _it<=it; _it++){
//        ptn = ptn+_it+ " "
//     }
//     ptn = ptn+ "\n"
//   }
//   console.log(ptn)
// }


// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

// const patternFive = (line=5) => {
//   let ptn = "";
//   col=line;
//   for(let it=1; it<=2*line; it++){

//     if(it>line){
//       col = line - (it-line);
//     }else {
//       col=it;
//     }
    
//     for(let _it=1; _it<=col; _it++){
//        ptn = ptn+"* "
//     }

//     ptn = ptn+ "\n"
//   }
//   console.log(ptn)
// }
  


//      *
//     **
//    ***
//   ****
//  *****


// const patternSix = (line=5) => {
//   let ptn = "";
//   for(let it=line; it>0; it--){
    
//     for(let _it=1; _it<=line; _it++){
//        if(_it>=it){
//         ptn = ptn+ "*"
//        }
//        else{
//         ptn = ptn+ " "
//        }
//     }
//     ptn = ptn+ "\n"
//   }
//   console.log(ptn)
// }


//  *****
//   ****
//    ***
//     **
//      *


// const patternSeven = (line=5) => {
//   let ptn = "";
//   for(let it=1; it<=line; it++){
    
//     for(let _it=1; _it<=line; _it++){
//        if(_it>=it){
//         ptn = ptn+ "*"
//        }
//        else{
//         ptn = ptn+ " "
//        }
//     }
//     ptn = ptn+ "\n"
//   }
//   console.log(ptn)
// }
  


//     *
//    ***
//   *****
//  *******
// *********


const patternEight = (line=5) => {
  let ptn = "";
  for(let it=0; it<line; it++){
    
    for(let _it=0; _it<=2*line; _it++){

       if(_it>(2*line/2-1-it) & _it<(2*line/2+it+1)){
        ptn = ptn+ "*"
       }
       else{
        ptn = ptn+ " "
       }
    }
    ptn = ptn+ "\n"
  }
  console.log(ptn)
}
  
// *********
//  *******
//   *****
//    ***
//     *

const patternNine = (line=5) => {
  let ptn = "";
  for(let it=line; it>=0; it--){
    
    for(let _it=0; _it<=2*line; _it++){

       if(_it>(2*line/2-1-it) & _it<(2*line/2+it+1)){
        ptn = ptn+ "*"
       }
       else{
        ptn = ptn+ " "
       }
    }
    ptn = ptn+ "\n"
  }
  console.log(ptn)
}
    



  


// patternOne(6)

// patternTwo(6)

// patternThree(6)

// patternFour(6)
// patternFive(10)

// patternSix(10)

// patternSeven(10)
// patternEight(6)

patternNine(10)