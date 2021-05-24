var clicked = 0;
var count = 0;

var rows = {
  row1: [0, 0, 0, 0, 0, 0],
  row2: [0, 0, 0, 0, 2, 0],
  row3: [0, 0, 0, 0, 0, 0],
  row4: [0, 0, 0, 0, 0, 0],
  row5: [0, 0, 0, 0, 0, 0],
  row6: [0, 0, 0, 0, 0, 0],
};

function getValues(row_params, column_params) {
  switch (row_params) {
    case 1:
      hideOrChoose(row_params, rows.row1, column_params);
      sumRows(row_params, rows.row1);
      sumColumn(column_params);
      break;
    case 2:
      hideOrChoose(row_params, rows.row2, column_params);
      sumRows(row_params, rows.row2);
      sumColumn(column_params);
      break;
    case 3:
      hideOrChoose(row_params, rows.row3, column_params);
      sumRows(row_params, rows.row3);
      sumColumn(column_params);
      break;
    case 4:
      hideOrChoose(row_params, rows.row4, column_params);
      sumRows(row_params, rows.row4);
      sumColumn(column_params);
      break;
    case 5:
      hideOrChoose(row_params, rows.row5, column_params);
      sumRows(row_params, rows.row5);
      sumColumn(column_params);
      break;
    case 6:
      hideOrChoose(row_params, rows.row6, column_params);
      sumRows(row_params, rows.row6);
      sumColumn(column_params);
      break;
  }
}

function hideOrChoose(row_params, row_position, column_params) {
  var htmlField = document.getElementById(`row${row_params}_${column_params}`);
  row_position[column_params - 1]++;

  if (row_position[column_params - 1] == 1) {
    htmlField.classList.add("not-this-one");
  } else if (row_position[column_params - 1] == 2) {
    htmlField.classList.remove("not-this-one");
    htmlField.classList.add("this-one");
  } else {
    htmlField.classList.remove("this-one");
    row_position[column_params - 1] = 0;
  }
}

function sumRows(row_params, row_position) {
  var sum = 0;

  for (count = 0; count < row_position.length; count++) {
    if (row_position[count] == 2) {
      var htmlField = Number(
        document.getElementById(`row${row_params}_${count + 1}`).innerHTML
      );
      sum += htmlField;
    }
  }

  for (count = 0; count < row_position.length; count++) {
    var htmlField = document.getElementById(`row${row_params}_${count + 1}`);

    if (sum > 9) {
      htmlField.classList.add("error");
    } else if(sum <= 9 && htmlField.classList.contains('error')) {
      htmlField.classList.remove("error");
    }
  }
}

function sumColumn(column_params) {
  var sum = 0;
  var column = column_params;

  Object.keys(rows).forEach((row_params) => {
    var array_row = rows[row_params]

    var htmlField = document.getElementById(`${row_params}_${column}`);

    if (array_row[column - 1] == 2) {
      sum += Number(htmlField.innerHTML);
    }  

    if (sum > 9) {
      htmlField.classList.add("error");
    } 
  });
}
