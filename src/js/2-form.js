const formEmail = document.querySelector('input[name="email"]');
const formMessage = document.querySelector('textarea[name="message"]');
let formData = { email: "", message: "" };
const mainForm = document.querySelector(".feedback-form");

mainForm.addEventListener("input", (event) => {
  if (event.target.name === "email" || event.target.name === "message") {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
  }
});

const savedData = localStorage.getItem("feedback-form-state");
if (savedData) {
  const parsedData = JSON.parse(savedData);
  formData.email = parsedData.email || "";
  formData.message = parsedData.message || "";
  formEmail.value = formData.email;
  formMessage.value = formData.message;
  
  
}

mainForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (formEmail.value === "" || formMessage.value === "") {
    alert("Fill please all fields");
    return;
  }
  console.log(formData);
  mainForm.reset();
  formData = { email: "", message: "" };
  localStorage.removeItem("feedback-form-state");
  
});

