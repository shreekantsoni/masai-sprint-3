var objt = [
  {
    username: "Ram",
    password: "1234",
  },
  {
    username: "Shyam",
    password: "2345",
  },
  {
    username: "Ajay",
    password: "3456",
  },
  {
    username: "Mohan",
    password: "4567",
  },
  {
    username: "eve.holt@reqres.in",
    password: "123456789",
  },
];

var myJson = JSON.stringify(objt);
localStorage.setItem("tst", myJson);

function getInfo() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  localStorage.setItem("textvalue", username);

  var text = localStorage.getItem("tst");
  var obj = JSON.parse(text);

  for (var i = 0; i < obj.length; i++) {
    if (username == obj[i].username && password == obj[i].password) {
      console.log(obj[i].username + " is logged in!!!");

      swal({
        title: "Success!",
        text: "Form Login Successfully!",
        icon: "success",
        button: true,
        timer: 2000,
      });

      setTimeout(function () {
        location.href = "index.html";
      }, 2500);

      return;
    }
  }
  alert("incorrect username or password");
}
