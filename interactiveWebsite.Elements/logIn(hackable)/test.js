function signIn (){
  const id = document.getElementById('ID').value;
  const pass = document.getElementById('PassWord').value;

  if (id == 'EJ inc.' && pass == 'overRide') {
    let pP = prompt("password");

    if (pP == 'password') {
      alert("Success you have passed the test!");

    } else {
      alert("Try again...");
    }
  } else {
      alert("Try again...")
  }
};
