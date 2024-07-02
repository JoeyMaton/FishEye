const modalbgContact = document.querySelector(".bgroundContact");

function displayModal() {
    const modal = document.getElementById("contact_modal");
    modalbgContact.style.display = "block";
	modal.style.display = "block";

    const close = document.querySelector(".closeBtn-contact").focus();
}

function closeContactModal() {
    const modal = document.getElementById("contact_modal");
    modalbgContact.style.display = "none";
    modal.style.display = "none";
}

// Displays the recovered data
let form = document.querySelector("form");
 
form.addEventListener("submit", (event) => {
  event.preventDefault();

  let firstName = document.getElementById("first");
  console.log(firstName.value);

  let lastName = document.getElementById("last");
  console.log(lastName.value);

  let email = document.getElementById("email");
  console.log(email.value);

  let text = document.getElementById("text");
  console.log(text.value);
 });
