let login_user;
let gender_user;
let points_user;

function signUp() {
    event.preventDefault();

    var form = new URLSearchParams(new FormData(form_register));
    fetch("/users/register", {
      method: "POST",
      body: form
    }).then(function (response) {
      if (response.ok) {
        window.location.href = "login.html";
      } else {
        console.log("Registration error!");
        response.text().then(function (response) {
          div_err.innerHTML = response;
        }); 
      }
    });

    return false;
}

function singIn() {
  var form = new URLSearchParams(new FormData(form_login));
  fetch("/users/authenticate", {
    method: "POST",
    body: form,
  }).then((response) => {
    if (response.ok) {
      response.json().then((json) => {
        sessionStorage.login_user_app = json.username; 
        sessionStorage.id_user_app = json.idUser;
        sessionStorage.gender_user_app = json.gender;
        sessionStorage.points_user_app = json.points;

        window.location.href = "games_hub.html";
      });
    } else {
      console.log("Erro de login!");

      response.text().then((text) => {
        console.error(text);
        div_error.innerHTML = text
      });
    }
  });

  return false;
}

function comparePassword() {
  var pass = document.getElementById("in_password").value
  var passConfirmation = document.getElementById("in_password_confirmation").value

  if (pass !== passConfirmation) {
    div_error.innerHTML = "password don't match"
    return false
  } else {
    signUp()
  }
}

function singOut() {
  logOut();
  sessionStorage.clear();
  redirectLogin();
}

function logOut() {
  fetch(`/users/logOut/${login_user}`, {cache: 'no-store'})
}

function redirectLogin() {
  window.location.href = 'login.html'
}

function verifyAuthentication() {
  login_user = sessionStorage.login_user_app;
  gender_user = sessionStorage.gender_user_app;
  points_user = sessionStorage.points_user_app;

  if(login_user == undefined) {
    redirectLogin()
  } else {
    b_user.innerHTML = login_user;
    b_score.innerHTML = points_user == "null" ? 0 : points_user
    img_user.src = gender_user == "feminine" ? "img/woman.svg" : "img/man.svg"
    showSentence()
    validateSession()
  }
}

function validateSession() {
  fetch(`/users/session/${login_user}`, {cache: 'no-store'})
  .then(answer => {
    if(answer.ok) {
      answer.text().then(text => {
        console.log('Session :)', text);
      });
    } else {
      console.error('Session :.(');
      logOut()
    }
  })
}