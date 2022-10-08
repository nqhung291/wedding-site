const scriptUrl =
  "https://script.google.com/macros/s/AKfycbxVijNPnjc3m8ssaO1DAkLxnbKhwaLVTm3Il3iuIkv038HSE_72XQWxkIIrhtbT4AWjEQ/exec";
const form = document.forms["info-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const body = new FormData(form);
  body.append("timestamp", new Date().toLocaleString("en-GB"));
  const submitBtn = document.getElementById("submit-btn");
  submitBtn.setAttribute("disabled", "");
  submitBtn.textContent = "Submitting...";
  fetch(scriptUrl, { method: "POST", body })
    .then((response) => {
      if (response.ok) {
        submitBtn.textContent = "Thank you!";
      } else {
        submitBtn.textContent = "Try again!";
        submitBtn.removeAttribute("disabled");
      }
    })
    .catch((error) => console.error("Error!", error.message));
});

$(document).ready(function () {
  $("input[type=radio][name=attend]").change((event) => {
    const value = event.target.value;
    if (value === "Yes") {
      document.getElementById("attend-number").setAttribute("required", "");
    } else {
      document.getElementById("attend-number").removeAttribute("required");
    }
  });
});
