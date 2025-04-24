function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".tablinks").click();
  });

  const images = [
    "Pictures/Gooner Circus Pie.jpg",
    "Pictures/Gooner Circus Smores.jpg",
    "Pictures/Gooner Circus Smores Two.jpg",
    "Pictures/Jolly Gooner Group Jumping.png",
    "Pictures/Silly Times Part Two.jpg",
    "Pictures/Phone Funeral.jpg"
  ];
  let currentImageIndex = 0;

  function changePicture(direction) {
    if (direction === 'forward') {
      currentImageIndex = (currentImageIndex + 1) % images.length;
    } else if (direction === 'back') {
      currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    }

    document.getElementById("groupImage").src = images[currentImageIndex];
  }