const feauturesDrop = document.getElementById("Nav-bar");
const feautureshover = document.getElementById("Nav-drop");
const nameInput = document.getElementById("name-input");
const joinBtn = document.getElementById("join-btn");
const NavIcon = document.getElementById("Nav-icon");
const SideBar = document.getElementById("Side-bar");
const modalWrapper = document.querySelector(".modal-wrapper");
const welcomeElement = document.getElementById("username");
const modalBtn = document.getElementById("modal-btn");

const showDropDown = () => {
  feauturesDrop.style.height = "100px";
};
const hideDropDown = () => {
  feauturesDrop.style.height = "0px";
};

feautureshover.addEventListener("mouseenter", showDropDown);
feautureshover.addEventListener("mouseleave", hideDropDown);



window.addEventListener("DOMContentLoaded", () => {

  joinBtn.addEventListener("click", (e) => {
    const username = nameInput.value.trim();
    if (username) {
      welcomeElement.innerText = username;
      modalWrapper.style.display = "flex";
      nameInput.value = "";

  
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    }
  });

  
  modalBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      modalWrapper.style.display = "none";

      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }
  });

  modalBtn.addEventListener("click", () => {
    modalWrapper.style.display = "none";

    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
  });
});






function toggleSideBar() {
  SideBar.classList.toggle("small-sidebar");

  if (SideBar.classList.contains("small-sidebar")) {
    NavIcon.className = "fa-solid fa-x";
  } else {
    NavIcon.className = "fa-solid fa-bars";
  }

  if (SideBar.classList.contains("small-sidebar")) {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  } else {
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
  }
}

NavIcon.addEventListener("click", toggleSideBar);

const getDynamicIcon = (iconValue) => {
  const icon = document.getElementById(`faq-icon${iconValue}`);
  return icon;
};

function toggleFaq(toggleItem) {
  const dropdown = document.getElementById(`faq-${toggleItem}`);
  const faqIcon = getDynamicIcon(toggleItem);
  
  if (dropdown.style.height === "80px") {
    dropdown.style.height = "0px";
    faqIcon.innerHTML = `<i class="fa-solid fa-chevron-down"></i>`;
    return;
  }
  for (let i = 1; i <= 5; i++) {
    const item = document.getElementById(`faq-${i}`);
    const icon = getDynamicIcon(i);
    if (item && icon) {
      item.style.height = "0px";
      icon.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
    } 
  }

    dropdown.style.height = "80px";
    faqIcon.innerHTML = `<i class="fa-solid fa-chevron-up"></i>`;
  }


getDynamicIcon(1).addEventListener("click", () => toggleFaq(1));
getDynamicIcon(2).addEventListener("click", () => toggleFaq(2));
getDynamicIcon(3).addEventListener("click", () => toggleFaq(3));
getDynamicIcon(4).addEventListener("click", () => toggleFaq(4));
getDynamicIcon(5).addEventListener("click", () => toggleFaq(5));

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carouselcards");
  const prevBtn = document.querySelector(".prevbtn");
  const nextBtn = document.querySelector(".nextbtn");
  const scrollAmount = 310;

  nextBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

  prevBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const testimonials = document.querySelectorAll('.carousel .testimonials');
  const leftBtn = document.querySelector('.button-left');
  const rightBtn = document.querySelector('.button-right');
  let currentIndex = 0;

  function showTestimonial(index) {
    testimonials.forEach((t, i) => {
      t.classList.toggle('active', i === index);
    });
  }

  leftBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
  });

  rightBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  });

  showTestimonial(currentIndex);
});