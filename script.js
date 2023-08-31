var kontakt = document.getElementById("kontakt");
if (kontakt) {
  kontakt.addEventListener("click", function () {
    var anchor = document.querySelector("[data-scroll-to='contact']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  });
}

document.addEventListener("click", function(e) {
  const target = e.target;

  if (target.matches("#porednictwo")) {
      scrollToElement("topic11");
  } else if (target.matches("#doradztwo")) {
      scrollToElement("topic12");
  } else if (target.matches("#vector")) {
      window.location.href = "/";
  } else if (target.closest(".gmail8")) {
      if (target.matches("img[src='./public/logosgooglegmail1.svg'], .ndmesssagmailcom8")) {
          window.location.href = "mailto:ndmesssa@gmail.com";
      } else if (target.matches("img[src='./public/twemojimobilephone1.svg']")) {
          window.location.href = "tel:791762258";
      }
  }
});

function scrollToElement(dataAttr) {
  const anchor = document.querySelector(`[data-scroll-to='${dataAttr}']`);
  if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
  }
}

document.body.classList.add("no-scroll");
window.addEventListener("load", function() {
  document.body.classList.remove("no-scroll");
  window.scrollTo(0, 0);
});

function scrollToSection(elementId, target) {
  const el = document.getElementById(elementId);
  if (el) {
      el.addEventListener("click", function () {
          const anchor = document.querySelector(`[data-scroll-to='${target}']`);
          if (anchor) {
              anchor.scrollIntoView({ block: "start", behavior: "smooth" });
          }
      });
  }
}

function addMailToEvent(elementId, email) {
  const el = document.getElementById(elementId);
  if (el) {
      el.addEventListener("click", function () {
          window.location.href = `mailto:${email}`;
      });
  }
}

function addPhoneEvent(elementId, phone) {
  const el = document.getElementById(elementId);
  if (el) {
      el.addEventListener("click", function () {
          window.location.href = `tel:${phone}`;
      });
  }
}

scrollToSection("filmyZDrona", "topic21");
scrollToSection("zdjciaZDrona", "topic22");
scrollToSection("inspekcjDron", "topic23");
scrollToSection("montaFilmw", "topic24");
scrollToSection("obrbkaZdj", "topic25");

addMailToEvent("gmailContainer", "ndmesssa@gmail.com");
addPhoneEvent("phoneContainer", "791762258");
addMailToEvent("gmailContainer1", "ndmesssa@gmail.com");
addPhoneEvent("phoneContainer1", "791762258");
addMailToEvent("gmailContainer2", "ndmesssa@gmail.com");
addPhoneEvent("phoneContainer2", "791762258");
addMailToEvent("gmailContainer3", "ndmesssa@gmail.com");
addPhoneEvent("phoneContainer3", "791762258");
addMailToEvent("gmailContainer4", "ndmesssa@gmail.com");
addPhoneEvent("phoneContainer4", "791762258");

const vector = document.getElementById("vector");
if (vector) {
  vector.addEventListener("click", function (e) {
      window.location.href = "/";
  });
}

document.body.classList.add("no-scroll");
window.addEventListener("load", function() {
  document.body.classList.remove("no-scroll");
  window.scrollTo(0, 0);
});

document.addEventListener("DOMContentLoaded", function () {
  function scrollToElement(dataAttrValue) {
      const targetElement = document.querySelector(`[data-scroll-to='${dataAttrValue}']`);
      if (targetElement) {
          targetElement.scrollIntoView({ block: "start", behavior: "smooth" });
      }
  }

  function addClickListener(elementId, action) {
      const element = document.getElementById(elementId);
      if (element) {
          element.addEventListener("click", action);
      }
  }

  addClickListener("biznesOnline", () => scrollToElement("topic31"));
  addClickListener("biznesOnlineOd", () => scrollToElement("topic32"));
  addClickListener("marketingProduktuOnline", () => scrollToElement("topic33"));
  addClickListener("vector", () => { window.location.href = "/"; });

  const emailAction = () => { window.location.href = "mailto:ndmesssa@gmail.com"; };
  const phoneAction = () => { window.location.href = "tel:791762258"; };
  
  addClickListener("gmailContainer", emailAction);
  addClickListener("phoneContainer", phoneAction);
  addClickListener("gmailContainer1", emailAction);
  addClickListener("phoneContainer1", phoneAction);
  addClickListener("gmailContainer2", emailAction);
  addClickListener("phoneContainer2", phoneAction);

  document.body.classList.add("no-scroll");
  window.addEventListener("load", function() {
      document.body.classList.remove("no-scroll");
      window.scrollTo(0, 0);
  });
});

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

  scrollProgress.style.background = `conic-gradient(#6458F0 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

let width = 0;
const progressBar = document.getElementById("progressBar");
const loadingContainer = document.getElementById("loadingContainer");
const contentArea = document.getElementById("contentArea");

let interval = setInterval(function() {
    width += 2; // 2-3 sekundy do zapełnienia paska
    progressBar.style.width = width + "%";

    if (width >= 100) {
        clearInterval(interval);
        loadingContainer.style.display = "none";
        contentArea.style.display = "block";
    }
}, 20); // czas aktualizacji co 20 milisekund
