var rows = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 2, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0]
];

var rows_answer = [
  [1, 1, 1, 1, 2, 1],
  [2, 1, 1, 1, 1, 2],
  [1, 2, 1, 1, 1, 1],
  [1, 1, 2, 1, 1, 1],
  [1, 1, 1, 2, 1, 2],
  [1, 1, 1, 2, 1, 2]
];

var sum = 0;

function hideOrChoose(row_params, column_params) {
  var htmlField = document.getElementById(`row${row_params}_${column_params}`);
  rows[row_params - 1][column_params - 1]++

  if (rows[row_params - 1][column_params - 1] == 1) {
    htmlField.classList.add("not-this-one");
  } else if (rows[row_params - 1][column_params - 1] == 2) {
    htmlField.classList.remove("not-this-one");
    htmlField.classList.add("this-one");
  } else {
    htmlField.classList.remove("this-one");
    rows[row_params - 1][column_params - 1] = 0;
  }

  sumRows(row_params);
  sumColumn(column_params);
}

function sumRows(row_params) {
  sum = 0;

  for(let counter = 0; counter < rows.length; counter++) {
    if(counter == row_params - 1) {
      for(let i = 0; i < rows[counter].length; i++) {
        if (rows[counter][i] == 2) {
          let htmlField = Number(
            document.getElementById(`row${row_params}_${i + 1}`).innerHTML
          );
          sum += htmlField;
        }
      }
    }
  }

  let htmlField = document.getElementById(`row${row_params}`);

  if (sum > 9) {
    htmlField.classList.add("error");
  } else {
    htmlField.classList.remove("error");
  }
}

function sumColumn(column_params) {
  var sum = 0;
  var column = column_params - 1;

  for(let counter = 0; counter < rows.length; counter++) {
    for(let i = 0; i < rows[counter].length; i++) {
      if(i == column) {
        if(rows[counter][i] == 2) {
          let htmlField = document.getElementById(`row${counter+1}_${column + 1}`);

          sum += Number(htmlField.innerHTML)
        } 
      }
    }
  }

  for(let counter = 0; counter < rows.length; counter++) {
    for(let i = 0; i < rows[counter].length; i++) {
      if(i == column) {
        let htmlField = document.getElementById(`row${counter+1}_${column + 1}`);
        if(sum > 9) {
          htmlField.classList.add("error");
        } else {
          htmlField.classList.remove("error");
        }
      }
    }
  }

  compareAnswers()
}

function compareAnswers() {
  var points = 0;

  for(let counter = 0; counter < rows_answer.length; counter++) {
    for(let i = 0; i < rows_answer[counter].length; i++) {
      
      if(rows_answer[counter][i] == rows[counter][i]) {
        points++
      }
    }
  }

  if(points == 36) {
    getPoints(2)

    div_congratulations.style.display = "block"

    setInterval(() => {
      div_congratulations.style.display = "none"
    }, 5000)
  }
}