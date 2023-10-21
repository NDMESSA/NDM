var container5 = document.getElementById("container5");
      if (container5) {
        container5.addEventListener("click", function () {
          var anchor = document.querySelector("[data-scroll-to='page2Container']");
          if (anchor) {
            anchor.scrollIntoView({ block: "start", behavior: "smooth" });
          }
        });
      }
      
      var container8 = document.getElementById("container8");
      if (container8) {
        container8.addEventListener("click", function () {
          var anchor = document.querySelector("[data-scroll-to='page3Container']");
          if (anchor) {
            anchor.scrollIntoView({ block: "start", behavior: "smooth" });
          }
        });
      }
      
      var container11 = document.getElementById("container11");
      if (container11) {
        container11.addEventListener("click", function () {
          var anchor = document.querySelector("[data-scroll-to='page4Container']");
          if (anchor) {
            anchor.scrollIntoView({ block: "start", behavior: "smooth" });
          }
        });
      }
      
      var container14 = document.getElementById("container14");
      if (container14) {
        container14.addEventListener("click", function () {
          var anchor = document.querySelector("[data-scroll-to='page5Container']");
          if (anchor) {
            anchor.scrollIntoView({ block: "start", behavior: "smooth" });
          }
        });
      }
    
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
    
