$(document).ready(function () {
  function animateOnScroll() {
    $(".bolum2, .bolum3, .bolum4, .bolum5, .bolum6, .bolum7, footer").each(
      function () {
        var ustkenar = $(this).offset().top;
        var pencereAlt = $(window).scrollTop() + $(window).height();
        if (pencereAlt > ustkenar) {
          $(this).animate({ opacity: "1" }, 1000);
        }
      }
    );
  }

  $(document).ready(function () {
    $("#book_pick_date, #book_off_date, #tarih3").datepicker({});

    // Sayfa yüklendiğinde çalıştır
    animateOnScroll();

    $(window).on("scroll load", function () {
      // Her scroll olayında ve sayfa yüklendiğinde çalıştır
      animateOnScroll();
    });
  });
});

function openPopup(popupId) {
  document.getElementById(popupId).style.display = "flex";
}

function closePopup(popupId) {
  document.getElementById(popupId).style.display = "none";
}

// Add event listeners for each popup button
document.getElementById("popupButton1").addEventListener("click", function () {
  openPopup("popup1");
});

document.getElementById("popupButton2").addEventListener("click", function () {
  openPopup("popup2");
});

document.getElementById("popupButton3").addEventListener("click", function () {
  openPopup("popup3");
});

// Add event listeners for close buttons
document
  .querySelector("#popup1 .closeBtn")
  .addEventListener("click", function () {
    closePopup("popup1");
  });

document
  .querySelector("#popup2 .closeBtn")
  .addEventListener("click", function () {
    closePopup("popup2");
  });

document
  .querySelector("#popup3 .closeBtn")
  .addEventListener("click", function () {
    closePopup("popup3");
  });

document.querySelectorAll(".popupButton").forEach((button) => {
  button.addEventListener("click", function () {
    const popupId = this.getAttribute("data-popup");
    console.log("Button clicked. Popup ID:", popupId);
    openPopup(popupId);
  });
});

document.querySelectorAll(".close").forEach((closeButton) => {
  closeButton.addEventListener("click", function () {
    const popupId = this.closest(".popup").id;
    console.log("Close button clicked. Popup ID:", popupId);
    closePopup(popupId);
  });
});

document.querySelectorAll(".carousel").forEach((carousel) => {
  const images = carousel.querySelectorAll(".carousel-image");
  let index = 0;

  function showImage(index) {
    images.forEach((image) => (image.style.display = "none"));
    images[index].style.display = "block";
  }

  function nextImage() {
    index = (index + 1) % images.length;
    showImage(index);
  }

  function prevImage() {
    index = (index - 1 + images.length) % images.length;
    showImage(index);
  }

  carousel.querySelector(".prev").addEventListener("click", function () {
    console.log("Previous button clicked");
    prevImage();
  });

  carousel.querySelector(".next").addEventListener("click", function () {
    console.log("Next button clicked");
    nextImage();
  });

  showImage(index);
});

let myWork = document.getElementById("myWorkOne");

myWork.onclick = function () {
  window.open(
    "https://1drv.ms/f/s!AnohkQij9rbrgxMnkWblccwj-td8?e=OgeRQA",
    "_blank"
  );
};
