$(".count").counterUp({
  delay: 10,
  time: 300,
});

// ************ top arrow script ***************

mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
/* function topFunction() {
document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} */

var x = document.getElementsByClassName("form-control");

function myFunction() {
  if (x[0].value != "" && x[1].value != "" && x[2].value != "") {
    swal({
      title: "Success!",
      text: "Form Submitted Successfully!",
      icon: "success",
      button: true,
      timer: 3000,
    });
    fun();
  }
}

function fun() {
  setTimeout(function () {
    location.reload();
  }, 2000);
}

/* const refreshButton = document.querySelector('.refresh-button');

const refreshPage = () => {
 setTimeout(function(){ location.reload(); }, 2000); 
 }
 
refreshButton.addEventListener('click', refreshPage); */

$(document).ready(function () {
  $.getJSON("https://api.covid19india.org/data.json", function (data) {
    var states = [];
    var confirmed = [];
    var recovered = [];
    var deaths = [];

    var total_active;
    var total_confirmed;
    var total_recovered;
    var total_deaths;

    // Take the first element in statewise array and add the objects values into the above variables
    total_active = data.statewise[0].active;
    total_confirmed = data.statewise[0].confirmed;
    total_recovered = data.statewise[0].recovered;
    total_deaths = data.statewise[0].deaths;

    var t = document.getElementById("confirmed");
    t.innerHTML = Number(total_confirmed);

    var t = document.getElementById("active");
    t.innerHTML = Number(total_active);

    var t = document.getElementById("recovered");
    t.innerHTML = Number(total_recovered);

    var t = document.getElementById("deaths");
    t.innerHTML = Number(total_deaths);

    console.log(total_confirmed);

    $.each(data.statewise, function (id, obj) {
      states.push(obj.state);
      confirmed.push(obj.confirmed);
      recovered.push(obj.recovered);
      deaths.push(obj.deaths);
    });

    states.shift();
    confirmed.shift();
    recovered.shift();
    deaths.shift();

    var myChart = document.getElementById("myChart").getContext("2d");
    var chart = new Chart(myChart, {
      type: "line",
      data: {
        labels: states,
        datasets: [
          {
            label: "Confirmed Cases",
            data: confirmed,
            backgroundColor: "#f1c40f",
            minBarLength: 100,
          },
          {
            label: "Recovered",
            data: recovered,
            backgroundColor: "#2ecc71",
            minBarLength: 100,
          },
          {
            label: "Deceased",
            data: deaths,
            backgroundColor: "#e74c3c",
            minBarLength: 10,
          },
        ],
      },
      option: {},
    });
  });
});

function backPage() {
  location.href = "login.html";
}

