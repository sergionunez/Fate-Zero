// $.get('zero.json',  function(data, textStatus) {
//     console.log(data);
//     // build header
//     header(data.header);
//     // build plot
//     plot(data.plot);
//     // build participants
//     participants(data.participantsImage);
//     // build teams
//     teams(data.teams);
// });

$(document).ready(function() {
  // build menu
  menu(data.teams);
  // build header
  header(data.header);
  // build plot
  plot(data.plot);
  // build participants
  participants(data.participantsImage);
  // build teams
  teams(data.teams);
  // set bindings for scroll
  setBindings();
});

function menu(teams) {
  var masters = $('.navbar .navbar-collapse .masters .dropdown-menu ');
  var servants = $('.navbar .navbar-collapse .servants .dropdown-menu ');

  var auxMasters = "";
  var auxServants = "";

  for (var i in teams) {
    auxMasters += "<li><a id=\"master"+i+"\" href=\"#master"+i+"Section\"><img src=\"images/seals/"+teams[i].logo+"\"></img>"+teams[i].master+"</a></li>";
    auxServants += "<li><a id=\"servant"+i+"\" href=\"#servant"+i+"Section\"><img src=\"images/seals/"+teams[i].logo+"\"></img>"+teams[i].servant+"</a></li>";
  }

  masters.html(auxMasters);
  servants.html(auxServants);
}

function header(header) {
  $('header>img').attr('src', 'images/'+header.logo+'');
}

function plot(plot) {
  $('#plot-content>div').html(plot);
}

function participants(participants) {
      var participantsImage = "<div class=\"container-fluid participants image\" style=\"background: url('images/header/"+participants+"');\"></div>";

      $('#participantsSection').after(participantsImage);
}

function teams(teams) {
  var teamHTML="";
  for (var i in teams) {
    var teamParticipants = "<div class=\"container-fluid team participants\" style=\"background: url('images/seals/"+teams[i].logo+"') no-repeat center, #000; background-size: contain;\"><h2 class=\"master\">"+teams[i].master+"</h2><h2 class=\"servant\">"+teams[i].servant+"</h2></div>";

    // master image
    var masterImage = "<div id=\"master"+i+"Section\" class=\"container-fluid master image\" style=\"background: url('images/header/"+teams[i].masterImage+"');\"></div>";

    var masterInfo = "<div class=\"container master content\"><div class=\"col-xs-12 col-sm-offset-1 col-sm-10 text-justify\">"+"<h1 class=\"text-left\">"+teams[i].master+"</h1>"+teams[i].masterInfo+"</div></div>";

    // servant image
    var servantImage = "<div id=\"servant"+i+"Section\" class=\"container-fluid servant image\" style=\"background: url('images/header/"+teams[i].servantImage+"');\"></div>";

    var servantInfo = "<div class=\"container servant content\"><div class=\"col-xs-12 col-sm-offset-1 col-sm-10 text-justify\">"+"<h1>"+teams[i].servant+"</h1>"+teams[i].servantInfo+"</div></div>";

    teamHTML+= teamParticipants + masterImage + masterInfo + servantImage + servantInfo;
  }
  //add all the html of the teams
  $('.participants.image').after(teamHTML);
}

function setBindings() {
  $('.navbar .navbar-brand, .navbar .dropdown-menu a, .navbar .navbar-nav a').click(function(event) {
    /* Act on the event */
    event.preventDefault();

    var sectionID = event.currentTarget.id + "Section";

    $('html body').animate({
      scrollTop: $("#"+ sectionID).offset().top
    }, 2000);

  });
}
