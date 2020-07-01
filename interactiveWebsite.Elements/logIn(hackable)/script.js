function signIn (){
  var id = document.getElementById('ID');
  var password = document.getElementById('PassWord');

  if (id === "Ej inc." && password === "overRide"){
    alert("Success! you passed the test.");
  } else {
    alert("Try again...");
  };
};

function hint (){
  var body = document.querySelector('body');
  var p = document.getElementById('p1');

  body.style.backgroundColor = "lightGrey";
  p.style.color = "lightGrey";
};

function hidA (){
  var body = document.querySelector('body');
  var p = document.getElementById('p1');

  p.style.color = "black";
  p.style.transition = "2s";
  p.text = "User ID: EJ inc. Password: overRide "
};
