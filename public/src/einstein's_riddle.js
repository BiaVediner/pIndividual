var house_one = ["Yellow", "Norwegian", "Water", "Dunhill", "Cats"];

var house_two = ["Blue", "Danish", "Tea", "Blends", "Horses"];

var house_three = ["Red", "British", "Milk", "Pall Mall", "Birds"];

var house_four = ["Green", "German", "Coffe", "Prince", "Fish"];

var house_five = ["White", "Swedish", "Beer", "Blue Master", "Dogs"];

function change_color(house_element) {
  var color_value = document.getElementById(
    `select_color_house${house_element}`
  ).value;

  document.getElementById(`house${house_element}`).style.backgroundColor =
    color_value;
}

function check_hints(hint_params) {
  document.getElementById(`hint${hint_params}`).style =
    "text-decoration: line-through";
}

function uncheck_hints(hint_params) {
  document.getElementById(`hint${hint_params}`).style = "text-decoration: none";
}

function check_values(house_number, labels_params) {
  return document.getElementById(`select_${labels_params}_house${house_number}`)
    .value;
}

function validate_answer(house_params, labels_params) {
  if (labels_params == "color") {
    change_color(house_params);
  }

  // The British lives in the Red house

  if (
    (check_values(5, "color") == "#F36D6D" &&
      check_values(5, "nationality") == "British") ||
    (check_values(4, "color") == "#F36D6D" &&
      check_values(4, "nationality") == "British") ||
    (check_values(3, "color") == "#F36D6D" &&
      check_values(3, "nationality") == "British") ||
    (check_values(2, "color") == "#F36D6D" &&
      check_values(2, "nationality") == "British") ||
    (check_values(1, "color") == "#F36D6D" &&
      check_values(1, "nationality") == "British")
  ) {
    check_hints(1);
  } else {
    uncheck_hints(1);
  }

  // The Swedish keeps Dogs as pets
  if (
    (check_values(5, "nationality") == "Swedish" &&
      check_values(5, "animals") == "Dogs") ||
    (check_values(4, "nationality") == "Swedish" &&
      check_values(4, "animals") == "Dogs") ||
    (check_values(3, "nationality") == "Swedish" &&
      check_values(3, "animals") == "Dogs") ||
    (check_values(2, "nationality") == "Swedish" &&
      check_values(2, "animals") == "Dogs") ||
    (check_values(1, "nationality") == "Swedish" &&
      check_values(1, "animals") == "Dogs")
  ) {
    check_hints(2);
  } else {
    uncheck_hints(2);
  }

  // The Danish drinks Tea

  if (
    (check_values(5, 'nationality') == "Danish" && check_values(5, 'drink') == "Tea") ||
    (check_values(4, 'nationality') == "Danish" && check_values(4, 'drink') == "Tea") ||
    (check_values(3, 'nationality') == "Danish" && check_values(3, 'drink') == "Tea") ||
    (check_values(2, 'nationality') == "Danish" && check_values(2, 'drink') == "Tea") ||
    (check_values(1, 'nationality') == "Danish" && check_values(1, 'drink') == "Tea")
  ) {
    check_hints(3);
  } else {
    uncheck_hints(3);
  }

  // The Green house is exactly to the left of the White house

  if (
    (check_values(4, 'color') == "#5FEF98" && check_values(5, 'color') == "White") ||
    (check_values(3, 'color') == "#5FEF98" && check_values(4, 'color') == "White") ||
    (check_values(2, 'color') == "#5FEF98" && check_values(3, 'color') == "White") ||
    (check_values(1, 'color') == "#5FEF98" && check_values(2, 'color') == "White")
  ) {
    check_hints(4);
  } else {
    uncheck_hints(4);
  }

  // The owner of the Green house drinks Coffe

  if (
    (check_values(5, 'color') == "#5FEF98" && check_values(5, 'drink') == "Coffe") ||
    (check_values(4, 'color') == "#5FEF98" && check_values(4, 'drink') == "Coffe") ||
    (check_values(3, 'color') == "#5FEF98" && check_values(3, 'drink') == "Coffe") ||
    (check_values(2, 'color') == "#5FEF98" && check_values(2, 'drink') == "Coffe") ||
    (check_values(1, 'color') == "#5FEF98" && check_values(1, 'drink') == "Coffe")
  ) {
    check_hints(5);
  } else {
    uncheck_hints(5);
  }

  // The one who smokes Pall Mall raise Birds

  if (
    (check_values(5, 'cigarette') == "Pall Mall" && check_values(5, 'animals') == "Birds") ||
    (check_values(4, 'cigarette') == "Pall Mall" && check_values(4, 'animals') == "Birds") ||
    (check_values(3, 'cigarette') == "Pall Mall" && check_values(3, 'animals') == "Birds") ||
    (check_values(2, 'cigarette') == "Pall Mall" && check_values(2, 'animals') == "Birds") ||
    (check_values(1, 'cigarette') == "Pall Mall" && check_values(1, 'animals') == "Birds")
  ) {
    check_hints(6);
  } else {
    uncheck_hints(6);
  }

  // The owner of the Yellow house smokes Dunhill

  if (
    (check_values(5, 'color') == "#EFEA70" && check_values(5, 'cigarette') == "Dunhill") ||
    (check_values(4, 'color') == "#EFEA70" && check_values(4, 'cigarette') == "Dunhill") ||
    (check_values(3, 'color') == "#EFEA70" && check_values(3, 'cigarette') == "Dunhill") ||
    (check_values(2, 'color') == "#EFEA70" && check_values(2, 'cigarette') == "Dunhill") ||
    (check_values(1, 'color') == "#EFEA70" && check_values(1, 'cigarette') == "Dunhill")
  ) {
    check_hints(7);
  } else {
    uncheck_hints(7);
  }

  // The man who lives in the centre house drinks Milk

  if (check_values(3, 'drink') == "Milk") {
    check_hints(8);
  } else {
    uncheck_hints(8);
  }

  // The Norwegian lives in the first house

  if (check_values(1, 'nationality') == "Norwegian") {
    check_hints(9);
  } else {
    uncheck_hints(9);
  }

  // The man who smokes Blends lives next to the one who raise Cats

  if (
    (check_values(5, 'cigarette') == "Blends" && check_values(4, 'animals') == "Cats") ||
    (check_values(4, 'cigarette') == "Blends" &&
      (check_values(5, 'animals') == "Cats" || check_values(3, 'animals') == "Cats")) ||
    (check_values(3, 'cigarette') == "Blends" &&
      (check_values(4, 'animals') == "Cats" || check_values(2, 'animals') == "Cats")) ||
    (check_values(2, 'cigarette') == "Blends" &&
      (check_values(3, 'animals') == "Cats" || check_values(1, 'animals') == "Cats")) ||
    (check_values(1, 'cigarette') == "Blends" && check_values(2, 'animals') == "Cats")
  ) {
    check_hints(10);
  } else {
    uncheck_hints(10);
  }

  // The man who keeps Horses lives next to the man who smokes Dunhill

  if (
    (check_values(5, 'animals') == "Horses" && check_values(4, 'cigarette') == "Dunhill") ||
    (check_values(4, 'animals') == "Horses" &&
      (check_values(5, 'cigarette') == "Dunhill" || check_values(3, 'cigarette') == "Dunhill")) ||
    (check_values(3, 'animals') == "Horses" &&
      (check_values(4, 'cigarette') == "Dunhill" || check_values(2, 'cigarette') == "Dunhill")) ||
    (check_values(2, 'animals') == "Horses" &&
      (check_values(3, 'cigarette') == "Dunhill" || check_values(1, 'cigarette') == "Dunhill")) ||
    (check_values(1, 'animals') == "Horses" && check_values(2, 'cigarette') == "Dunhill")
  ) {
    check_hints(11);
  } else {
    uncheck_hints(11);
  }

  // The man who smokes Blue Master drinks Beer

  if (
    (check_values(5, 'cigarette') == "Blue Master" && check_values(5, 'drink') == "Beer") ||
    (check_values(4, 'cigarette') == "Blue Master" && check_values(4, 'drink') == "Beer") ||
    (check_values(3, 'cigarette') == "Blue Master" && check_values(3, 'drink') == "Beer") ||
    (check_values(2, 'cigarette') == "Blue Master" && check_values(2, 'drink') == "Beer") ||
    (check_values(1, 'cigarette') == "Blue Master" && check_values(1, 'drink') == "Beer")
  ) {
    check_hints(12);
  } else {
    uncheck_hints(12);
  }

  // The German smokes Prince

  if (
    (check_values(5, 'nationality') == "German" && check_values(5, 'cigarette') == "Prince") ||
    (check_values(4, 'nationality') == "German" && check_values(4, 'cigarette') == "Prince") ||
    (check_values(3, 'nationality') == "German" && check_values(3, 'cigarette') == "Prince") ||
    (check_values(2, 'nationality') == "German" && check_values(2, 'cigarette') == "Prince") ||
    (check_values(1, 'nationality') == "German" && check_values(1, 'cigarette') == "Prince")
  ) {
    check_hints(13);
  } else {
    uncheck_hints(13);
  }

  // The Norwegian lives next to the Blue house

  if (
    (check_values(5, 'nationality') == "Norwegian" && check_values(4, 'color') == "#6ED4EB") ||
    (check_values(4, 'nationality') == "Norwegian" &&
      (check_values(5, 'color') == "#6ED4EB" || check_values(3, 'color') == "#6ED4EB")) ||
    (check_values(3, 'nationality') == "Norwegian" &&
      (check_values(4, 'color') == "#6ED4EB" || check_values(2, 'color') == "#6ED4EB")) ||
    (check_values(2, 'nationality') == "Norwegian" &&
      (check_values(3, 'color') == "#6ED4EB" || check_values(1, 'color') == "#6ED4EB")) ||
    (check_values(1, 'nationality') == "Norwegian" && check_values(2, 'color') == "#6ED4EB")
  ) {
    check_hints(14);
  } else {
    uncheck_hints(14);
  }

  // The man who smokes Blends has a neighbour who drinks Water

  if (
    (check_values(5, 'cigarette') == "Blends" && check_values(4, 'drink') == "Water") ||
    (check_values(4, 'cigarette') == "Blends" &&
      (check_values(5, 'drink') == "Water" || check_values(3, 'drink') == "Water")) ||
    (check_values(3, 'cigarette') == "Blends" &&
      (check_values(4, 'drink') == "Water" || check_values(2, 'drink') == "Water")) ||
    (check_values(2, 'cigarette') == "Blends" &&
      (check_values(3, 'drink') == "Water" || check_values(1, 'drink') == "Water")) ||
    (check_values(1, 'cigarette') == "Blends" && check_values(2, 'drink') == "Water")
  ) {
    check_hints(15);
  } else {
    uncheck_hints(15);
  }

  if (check_values(4, 'animals') == "Fish") {
    getPoints(1)
    div_congratulations.style.display = "block"

    setInterval(() => {
      div_congratulations.style.display = "none"
    }, 5000)
  }
}

