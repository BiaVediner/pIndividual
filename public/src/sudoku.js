var sudoku_answers = [
  [0, 0, 7, 0, 9, 8, 5, 6, 0],
  [0, 9, 3, 0, 5, 0, 2, 4, 8],
  [5, 8, 6, 0, 4, 0, 0, 0, 3],
  [2, 3, 8, 4, 0, 5, 7, 1, 9],
  [0, 0, 1, 0, 0, 0, 0, 5, 0],
  [7, 0, 0, 0, 1, 2, 0, 3, 6],
  [0, 1, 9, 0, 0, 0, 0, 8, 7],
  [0, 0, 2, 0, 7, 6, 0, 0, 4],
  [0, 7, 4, 0, 3, 9, 1, 2, 0]
];

var sudoku_correct_answers = [
  [4, 2, 7, 3, 9, 8, 5, 6, 1],
  [1, 9, 3, 6, 5, 7, 2, 4, 8],
  [5, 8, 6, 2, 4, 1, 9, 7, 3],
  [2, 3, 8, 4, 6, 5, 7, 1, 9],
  [9, 6, 1, 7, 8, 3, 4, 5, 2],
  [7, 4, 5, 9, 1, 2, 8, 3, 6],
  [3, 1, 9, 5, 2, 4, 6, 8, 7],
  [8, 5, 2, 1, 7, 6, 3, 9, 4],
  [6, 7, 4, 8, 3, 9, 1, 2, 5]
];


function verifyAnswer(row_params, column_params) {
  var answer = Number(
    document.getElementById(`in_${row_params}_${column_params}`).value
  );
  
  for (let row = 0; row < sudoku_answers.length; row++) {
    const line = sudoku_answers[row];

    if (row == row_params - 1) {
      for (let i = 0; i < line.length; i++) {
        const element = line[i];

        if (element == answer) {
          for (let index = 0; index < line.length; index++) {
            var htmlField = document.getElementById(
              `td_${row_params}_${index + 1}`
            );
            htmlField.style.backgroundColor = "#F14F4F";
          }
          break
        } else {
          for (let index = 0; index < line.length; index++) {
            var htmlField = document.getElementById(
              `td_${row_params}_${index + 1}`
            );
            htmlField.style.backgroundColor = "rgb(241, 241, 241)";
          }
        }
      }
    }

    for (let column = 0; column < sudoku_answers[row].length; column++) {
      const element_column = sudoku_answers[row][column];
      if (column == column_params - 1) {
        if (element_column == answer) {
          for (let index = 0; index < sudoku_answers[row].length; index++) {
            var htmlField = document.getElementById(
              `td_${index + 1}_${column_params}`
            );
            htmlField.style.backgroundColor = "#F14F4F";
          }
          return
        } else {
          for (let index = 0; index < sudoku_answers[row].length; index++) {
            var htmlField = document.getElementById(
              `td_${index + 1}_${column_params}`
            );
            htmlField.style.backgroundColor = "rgb(241, 241, 241)";
          }
        }
      }
    }
  }

  sudoku_answers[row_params - 1][column_params - 1] = answer;

  compareAnswers()
}

function compareAnswers() {
  var points = 0;

  for(let counter = 0; counter < sudoku_correct_answers.length; counter++) {
    for(let i = 0; i < sudoku_correct_answers[counter].length; i++) {
      
      if(sudoku_correct_answers[counter][i] == sudoku_answers[counter][i]) {
        points++
      }
    }
  }

  if(points == 81) {
    getPoints(4)
    div_congratulations.style.display = "block"

    setInterval(() => {
      div_congratulations.style.display = "none"
    }, 5000)
  }
}