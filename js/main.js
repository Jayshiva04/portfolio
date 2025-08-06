// Tab functionality
const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}
window.opentab = opentab; // Make function accessible from HTML

// Side menu functionality
const sidemenu = document.getElementById("sidemenu");
window.openmenu = function () {
  sidemenu.style.right = "0";
};
window.closemenu = function () {
  sidemenu.style.right = "-200px";
};

// Google Sheets form submission
const scriptURL =
  "https://script.google.com/macros/s/AKfycbyC8ZDSa8YCAd5YuesfyTN8vrhwH5bokREmFQzsAwWhB31biq7_yA6HP5hz_svV2yikLQ/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    msg.innerHTML = "Sending message...";
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        msg.innerHTML = "Message sent successfully";
        form.reset();
      })
      .catch((error) => {
        console.error("Error!", error.message);
        msg.innerHTML = "An error occurred. Please try again later.";
      });
  });
}

// View Certificate links
const viewCertificateLinks = document.querySelectorAll(
  ".view-certificate-link"
);
viewCertificateLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const certificateUrl = this.getAttribute("data-certificate-url");
    if (
      certificateUrl.toLowerCase().endsWith(".jpg") ||
      certificateUrl.toLowerCase().endsWith(".jpeg") ||
      certificateUrl.toLowerCase().endsWith(".png") ||
      certificateUrl.toLowerCase().endsWith(".pdf")
    ) {
      window.open(certificateUrl, "_blank");
    }
  });
});
