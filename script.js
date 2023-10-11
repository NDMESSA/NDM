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
          var anchor = document.querySelector("[data-scroll-to='page8']");
          if (anchor) {
            anchor.scrollIntoView({ block: "start", behavior: "smooth" });
          }
        });
      }
      
      var przygotowanieContainer = document.getElementById("przygotowanieContainer");
      if (przygotowanieContainer) {
        przygotowanieContainer.addEventListener("click", function () {
          var anchor = document.querySelector("[data-scroll-to='page2Container']");
          if (anchor) {
            anchor.scrollIntoView({ block: "start", behavior: "smooth" });
          }
        });
      }
      
      var szukanieContainer = document.getElementById("szukanieContainer");
      if (szukanieContainer) {
        szukanieContainer.addEventListener("click", function () {
          var anchor = document.querySelector("[data-scroll-to='page3']");
          if (anchor) {
            anchor.scrollIntoView({ block: "start", behavior: "smooth" });
          }
        });
      }
      
      var montazContainer = document.getElementById("montazContainer");
      if (montazContainer) {
        montazContainer.addEventListener("click", function () {
          var anchor = document.querySelector("[data-scroll-to='page4Container']");
          if (anchor) {
            anchor.scrollIntoView({ block: "start", behavior: "smooth" });
          }
        });
      }
      
      var dronyContainer = document.getElementById("dronyContainer");
      if (dronyContainer) {
        dronyContainer.addEventListener("click", function () {
          var anchor = document.querySelector("[data-scroll-to='page5Container']");
          if (anchor) {
            anchor.scrollIntoView({ block: "start", behavior: "smooth" });
          }
        });
      }
      
      var zdjeciaContainer = document.getElementById("zdjeciaContainer");
      if (zdjeciaContainer) {
        zdjeciaContainer.addEventListener("click", function () {
          var anchor = document.querySelector("[data-scroll-to='page6Container']");
          if (anchor) {
            anchor.scrollIntoView({ block: "start", behavior: "smooth" });
          }
        });
      }
      
      var marketingContainer = document.getElementById("marketingContainer");
      if (marketingContainer) {
        marketingContainer.addEventListener("click", function () {
          var anchor = document.querySelector("[data-scroll-to='page7Container']");
          if (anchor) {
            anchor.scrollIntoView({ block: "start", behavior: "smooth" });
          }
        });
      }
 
