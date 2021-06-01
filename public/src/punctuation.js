let idUser;
let pointsUser;

function getPoints(id_params) {

  fetch(`/scores/gettingGame/${id_params}`, {cache: 'no-store', method: 'GET'})
  .then(answer => {
    if(answer.ok) {
      answer.text().then(text => {
        console.log('complete selection :)', text);
      });

      insertScore()
    } else {
      console.error('Something gone wrong :.(');
    }
  })

}

function insertScore() {
  idUser = sessionStorage.id_user_app;

  fetch(`/scores/registerScore/${idUser}`, {cache: 'no-store', method: 'POST'})
  .then(answer => {
    if(answer.ok) {
      answer.text().then(text => {
        console.log('complete insertion :)', text);
      });

      updateScore()
    } else {
      console.error('Something gone wrong :.(');
    }
  })
}

function updateScore() {
  
  fetch(`/scores/gettingScore/${idUser}`, {cache: 'no-store', method: 'GET'})
  .then(answer => {
    if(answer.ok) {

      answer.json().then((json) => {
        sessionStorage.points_user_app = json[0][0].points;
        
        b_score.innerHTML = sessionStorage.points_user_app;

        showSentence()
      });
    } else {
      console.error('Something gone wrong :.(');
    }
  })
}

function showSentence() {
  let parameters = {
    min_value: 0,
    half_value: 150,
    max_value: 300
  }

  pointsUser = sessionStorage.points_user_app;

  if(pointsUser < parameters.half_value || pointsUser == "null") {
    b_sentence.innerHTML = "You just need to work harder"
  } else if (pointsUser < parameters.max_value) {
    b_sentence.innerHTML = "C'mon!! You are almost there."
  } else {
    b_sentence.innerHTML = "OMG! You're a genius!!!"
  }
}