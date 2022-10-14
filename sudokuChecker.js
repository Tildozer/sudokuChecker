/*
R-at the end of this project I should have a main function that can call the other functions we create to 'check' if your sudoku solution is correct.
each column must have number 1-9, same with each row, and each subgrid. by the end, sudoku checker will return true if true, or it will return false if any of the checks return false.
E-
A- Fisrt we will start with making the simple functions and make sure they all work. once we can verify all the simple functions work, then we run those answers through our final function to determine if they are all true or if any popped up false then we tell the user their sudoku solution is either wrong or right!
                 <== after reading part 2 ==>
  includesTo9 should let you check through a fuction and verify whether the function is true or false then we need to create the function that accepts all the other functions and ivokes them.
C-
T-
O-
*/

let puzzle = [[ 8,9,5,   7,4,2,   1,3,6 ],
              [ 2,7,1,   9,6,3,   4,8,5 ],
              [ 4,6,3,   5,8,1,   7,9,2 ],

              [ 9,3,4,   6,1,7,   2,5,8 ],
              [ 5,1,7,   2,3,8,   9,6,4 ],
              [ 6,8,2,   4,5,9,   3,7,1 ],

              [ 1,5,9,   8,7,4,   6,2,3 ],
              [ 7,4,6,   3,2,5,   8,1,9 ],
              [ 3,2,8,   1,9,6,   5,4,7 ]];
 /*
          
                 
let p8zzle = [[ 8,9,5,   7,4,2,   1,3,6 ],
              [ 8,7,1,   9,6,3,   4,8,5 ],
              [ 4,6,3,   5,8,1,   7,9,2 ],
              
              [ 9,3,4,   6,1,7,   2,5,8 ],
              [ 5,1,7,   2,3,8,   9,6,4 ],
              [ 6,8,2,   4,5,9,   3,7,1 ],
              
              [ 1,5,9,   8,7,4,   6,2,3 ],
              [ 7,4,6,   3,2,5,   8,1,9 ],
              [ 3,2,8,   1,9,6,   5,4,7 ]];
              
*/



/* BONUS 

function isSame(puzzle, p8zzle){
  for(let i = 0; i < puzzle.length; i++){
    
  for(let j = 0; j < puzzle.length; j++){
    let checkPuzz = puzzle[i][j]; 
    let checkP8zz = p8zzle[i][j];
    if(checkPuzz !== checkP8zz){
      return false;
    }
  }
  }
  return true;
}
// console.log(isSame(puzzle,p8zzle));
*/

function getRow(puzzle, rowNum){
  return puzzle[rowNum];
  }

 // console.log(getRow(puzzle, 3));
// console.log(getRow(puzzle, 8));
// console.log(getRow(puzzle, 0));

function getColumn(puzzle, columnNum){
  let columnArr = [];
//   double for loop to search both x and y position on puzzle
  for(let i = 0; i < puzzle.length; i++){
      let search = puzzle[i];
    for(let j = 0; j < search.length; j++){
      let columnSearch = search[j];
      if(j === columnNum){
        columnArr.push(columnSearch);
        }
      }
    }
  return columnArr;
  }

// console.log(getColumn(puzzle, 4));
// console.log(getColumn(puzzle, 0));
// console.log(getColumn(puzzle, 8));

function getSection(puzzle, xCord, yCord){
  let tempArr = [];
  let finalArr = [];
  let startPoint = xCord * 3;
//   checks to find which arrays to search for
for(let i = startPoint; i < (startPoint + 3); i++){
  let arrPush = puzzle[i];
  tempArr.push(arrPush);
  }
//   slicing out the section we need
  for(let i = 0; i < tempArr.length; i++){
    const sliceStart = yCord * 3;
    finalArr.push(tempArr[i].slice(sliceStart, sliceStart + 3));
  }
  return finalArr.flat();
}

// console.log(getSection(puzzle, 1,1));
// console.log(getSection(puzzle, 0, 0));
// console.log(getSection(puzzle, 0,1));

 function includes1to9(numList){
let numCheck = [1, 2, 3, 4, 5, 6, 7, 8, 9];
   for(let i = 0; i < numList.length; i++){
     let numLoop = numList[i];
     let idxOfNum = numCheck.indexOf(numLoop) ;
//    compares the numList against numCheck index to seee if it's there
     if(numCheck.indexOf(numLoop) !== -1){
//        replaces the number with EGG to make sure a space doesn't count as a valid number.
       numCheck.splice(idxOfNum, 1, 'EGG');
console.log(numCheck);
     } else {
       return false;
     }
  }
     return true;
}

// console.log(includes1to9(getSection(puzzle, 2,0)));
// console.log(includes1to9(getColumn(puzzle, 0)));
// console.log(includes1to9(getRow(puzzle, 3)));

function sudokuChecker(puzzle){
  let invoke1to9 = Object;
  let fail = "Try again, somethings not quite right";
//   ROW
  for(let i = 0; i < puzzle.length; i++){
    let rowCheck = getRow(puzzle, i);
    invoke1to9 = includes1to9(rowCheck);
    if(invoke1to9 === false){
      return fail;
      }
    }
//   COLUMN
//   Should I have used while loops instead of for loops because i is already stated? just questions for optimization!
  for(let i = 0; i < puzzle.length; i++){
    let columnCheck = getColumn(puzzle, i);
    invoke1to9 = includes1to9(columnCheck);
    if(invoke1to9 === false){
      return fail;
    }
  }
//   SECTION
//   XCord
    for(let i = 0; i < 3; i++){
//   YCord
    for(let j = 0; j < 3; j++){
      let sectionCheck = getSection(puzzle, i, j);
      invoke1to9 = (includes1to9(sectionCheck));
       if(invoke1to9 === false){
       return fail;
      }
    }
  }
  return "You're solution is correct!";
}


// console.log(sudokuChecker(puzzle));