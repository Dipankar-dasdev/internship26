const form = document.getElementById("form");
const errorMsg = document.getElementById("errorMsg");
const successMsg = document.getElementById("successMsg");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;
  const message = document.getElementById("message").value;
  const language = document.getElementById("language").value;

  if (name && email && age && message && language) {
    form.reset();
    form.style.display = "none";
    successMsg.style.display = "flex";
    successMsg.classList.add("success");
    successMsg.style.color = "lime";
    successMsg.innerText = `Thank you, ${name}! Your details have been received.`;
  } else {
    errorMsg.style.display = "block";
    errorMsg.classList.remove("success");
    errorMsg.innerText = "Please fill in all fields.";
    errorMsg.style.color = "red";
  }
});

const messageInput = document.getElementById("message");
const charCount = document.getElementById("charCount");

messageInput.addEventListener("input", () => {
  charCount.innerText = messageInput.value.length;
});
