const title = document.getElementById("title");
const about = document.getElementById("about");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");
const content = document.getElementById("content");

// Function to delay link navigation and update active class
function delayLinkNavigation(event) {
  event.preventDefault(); // Prevent the default link behavior

  // Remove "active" class from all links
  about.classList.remove("Active");
  projects.classList.remove("Active");
  contact.classList.remove("Active");

  // Add "active" class to the clicked link
  event.target.classList.add("Active");

  content.style.animation = "fadeOut 0.3s ease-in-out";

  // Delay the link navigation by 0.3 seconds (300 milliseconds)
  setTimeout(function () {
    window.location.href = event.target.href; // Navigate to the link's href after the delay
  }, 300);
}

// Attach the event listener to the link
title.addEventListener("click", delayLinkNavigation);
about.addEventListener("click", delayLinkNavigation);
projects.addEventListener("click", delayLinkNavigation);
contact.addEventListener("click", delayLinkNavigation);

const projectContainer = document.getElementById(
  "DesignedDevelopedProjectContainer"
);
const projectLists = document.querySelectorAll(".DesignedDevelopedProjectList");

let clickCounter = 0;

projectLists.forEach((list, index) => {
  list.addEventListener("click", () => {
    if (clickCounter === 0) {
      projectLists.forEach((otherList, otherIndex) => {
        if (otherIndex !== index) {
          otherList.classList.add("Inactive");
        }
      });
      clickCounter += 1;
    } else {
      projectLists.forEach((otherList) => {
        otherList.classList.remove("Inactive");
      });
      clickCounter = 0;
    }
  });
});
