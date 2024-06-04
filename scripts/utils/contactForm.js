const modalbgContact = document.querySelector(".bgroundContact");

function displayModal() {
    const modal = document.getElementById("contact_modal");
    modalbgContact.style.display = "block";
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modalbgContact.style.display = "none";
    modal.style.display = "none";
}
