let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  };
  
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;


  var kontaktContainer = document.getElementById("kontaktContainer");
  if (kontaktContainer) {
    kontaktContainer.addEventListener("click", function () {
      var anchor = document.querySelector("[data-scroll-to='page71Container']");
      if (anchor) {
        anchor.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    });
  }
  
  var uslugiContainer = document.getElementById("uslugiContainer");
  if (uslugiContainer) {
    uslugiContainer.addEventListener("click", function () {
      var anchor = document.querySelector("[data-scroll-to='main']");
      if (anchor) {
        anchor.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    });
  }
  
  var uslugiContainer1 = document.getElementById("uslugiContainer1");
  if (uslugiContainer1) {
    uslugiContainer1.addEventListener("click", function () {
      var anchor = document.querySelector(
        "[data-scroll-to='text3frameContainer']"
      );
      if (anchor) {
        anchor.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    });
  }
  
  var uslugiContainer2 = document.getElementById("uslugiContainer2");
  if (uslugiContainer2) {
    uslugiContainer2.addEventListener("click", function () {
      var anchor = document.querySelector("[data-scroll-to='page42']");
      if (anchor) {
        anchor.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    });
  }
  
  var uslugiContainer3 = document.getElementById("uslugiContainer3");
  if (uslugiContainer3) {
    uslugiContainer3.addEventListener("click", function () {
      var anchor = document.querySelector("[data-scroll-to='page51']");
      if (anchor) {
        anchor.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    });
  }
  
