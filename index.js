
const toggleLinksMenu = document.querySelector(".nav .toggle-links"),
  navLinksElement = document.querySelector(".nav .links"),
  navLinks = document.querySelectorAll(".nav .links .nav-link"),
  toggleContactMenu = document.querySelector(".nav .toggle-contact-right-bar"),
  contactRightBar = document.querySelector(".contact-right-bar"),
  closeContactRightBarBtn = document.querySelector(
    ".contact-right-bar .close-contact"
  ),
  contactOverlay = document.querySelector(".contact-overlay"),
  loading = document.querySelector(".loading");

  document.querySelector(".toggle-links").addEventListener("click", function () {
    this.classList.toggle("active");
  });

  document.querySelector(".toggle-contact-right-bar").addEventListener("click", function () {
    this.classList.toggle("active");
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    const categoryButtons = document.querySelectorAll(".category-btn");
    const skillItems = document.querySelectorAll(".skill-item");
  
    categoryButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Remove active class from all buttons
        categoryButtons.forEach((btn) => btn.classList.remove("active"));
  
        // Add active class to clicked button
        button.classList.add("active");
  
        // Get selected category
        const category = button.dataset.category;
  
        // Filter skill items
        skillItems.forEach((item) => {
          if (category === "all" || item.dataset.category === category) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  
    // Default: Show all skills
    document.querySelector(".category-btn[data-category='all']").click();
  });
  


// Get the audio element
const mouseClickSound = document.getElementById("mouse-click-sound");

// Add event listener for mouse clicks on the whole document
document.addEventListener("click", () => {
  mouseClickSound.currentTime = 0; // Reset the audio to the start
  mouseClickSound.play(); // Play the sound
});


document.addEventListener("DOMContentLoaded", () => {
  const musicButton = document.querySelector(".toggle-music");
  const music = document.getElementById("background-music");

  musicButton.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      musicButton.classList.add("active");
    } else {
      music.pause();
      musicButton.classList.remove("active");
    }
  });
});

  
// Add the custom cursor to the page
const cursor = document.createElement("div");
cursor.classList.add("custom-cursor");
document.body.appendChild(cursor);

let isHovering = false;

// Track mouse movements
document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
  cursor.classList.remove("inactive"); // Reactivate if mouse moves
});

// Add hover effect for interactive elements
document.querySelectorAll("a, button").forEach((elem) => {
  elem.addEventListener("mouseenter", () => cursor.classList.add("hover"));
  elem.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
});

// Make the cursor disappear after inactivity
let inactivityTimeout;
document.addEventListener("mousemove", () => {
  clearTimeout(inactivityTimeout);
  inactivityTimeout = setTimeout(() => {
    cursor.classList.add("inactive");
  }, 3000);
});



//   toggle nav links
toggleLinksMenu.addEventListener("click", toggleNav);
// nav links
navLinks.forEach((link) => {
  link.addEventListener("click", toggleNav);
});
function toggleNav() {
  navLinksElement.classList.toggle("show-links");
  toggleLinksMenu.children[0].classList.toggle("bx-x");
}
// open contactRightBar
toggleContactMenu.addEventListener("click", toggleContact);
// close contactRightBar in btn
closeContactRightBarBtn.addEventListener("click", toggleContact);
// close contactRightBar in overlay
contactOverlay.addEventListener("click", toggleContact);

function toggleContact() {
  contactRightBar.classList.toggle("show-contact");
  contactOverlay.classList.toggle("show");
}
// loading
// Wait for the window to load
window.addEventListener("load", () => {
  const loading = document.querySelector(".loading");
  setTimeout(() => {
    loading.classList.toggle("hide"); // Hide the loading screen
  }, 2000); // Show the loader for 2 seconds
});



var typed = new Typed(".typing", {
  strings: [
    "A passionate computer science student",
    "An AI and machine learning enthusiast",
    "A creative problem solver",
    "Winner of the Samsung AI Hackathon",
    "Focused on Smart Retail Systems",
    "A tech enthusiast and gamer",
    "Loves building impactful web applications",
    "Creator of mental support chatbot",
    "Dedicated to crafting user-friendly experiences",
    "An aspiring computer vision developer",
    "Always exploring new possibilities in tech",
    "Turning ideas into reality",
    "Driven by curiosity and innovation"
  ],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 1000,
  loop: true,
  loopCount: Infinity,
  showCursor: true,
  cursorChar: "|"
});





// Scroll Up Button Logic
const scrollUpBtn = document.getElementById("scrollUpBtn");

// Show button when scrolled down
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollUpBtn.style.display = "flex";
  } else {
    scrollUpBtn.style.display = "none";
  }
});

// Scroll to the top when the button is clicked
scrollUpBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});




// initialize AOS library
AOS.init();

