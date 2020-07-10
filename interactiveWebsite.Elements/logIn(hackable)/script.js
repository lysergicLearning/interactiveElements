//const body = document.querySelector('body');
//const p = document.getElementById('p1');

function signIn (){
  const id = document.getElementById('ID').value;
  const pass = document.getElementById('PassWord').value;

  if (id == 'EJ inc.' && pass == 'overRide.') {
    let pP = prompt("password");

    if (pP == 'easterEgg') {
      alert("Success you have passed the test!");

    } else {
      alert("Try again...");
    }
  } else {
      alert("Try again...")
  }
};

function hint (){
  const body = document.querySelector('body');
  const p = document.getElementById('p1');

  body.style.backgroundColor = "lightGrey";
  p.style.color = "lightGrey";

};

function hidA (){
  const body = document.querySelector('body');
  const p = document.getElementById('p1');

  p.style.color = ('black');
  p.style.transition = ('2s');
  p.text = ('User ID: EJ inc. - Password: overRide. - On Prompt Password: easterEgg');

};
