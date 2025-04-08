
document.getElementById("feedbackForm").addEventListener("input", function(event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const comment = document.getElementById("comment").value.trim();

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const commentError = document.getElementById("commentError");

    if (event.target.id === "name") {
        if (!name) {
            nameError.textContent = "Заполните это поле.";
        } else if (name.length < 2) {
            nameError.textContent = "Имя должно быть не менее 2 символов.";
        } else {
            nameError.textContent = "";
        }
    }

    if (event.target.id === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        if (!email) {
            emailError.textContent = "Заполните это поле.";
        } else if (!emailRegex.test(email)) {
            emailError.textContent = "Введите корректный email.";
        } else {
            emailError.textContent = "";
        }
    }

    if (event.target.id === "comment") {
        if (!comment) {
            commentError.textContent = "Заполните это поле.";
        } else if (comment.length < 5) {
            commentError.textContent = "Комментарий должен быть не менее 5 символов.";
        } else {
            commentError.textContent = "";
        }
    }
});

document.getElementById("feedbackForm").addEventListener("focusout", function(event) {
    const errorSpan = document.getElementById(`${event.target.id}Error`);
    if (errorSpan && !event.target.value.trim()) {
        errorSpan.textContent = "Заполните это поле."; 
    }
});

document.getElementById("resetBtn").addEventListener("click", function(event) {
    event.preventDefault();
    if (confirm("Вы уверены, что хотите сбросить форму?")) {
        this.closest("form").reset();
        document.getElementById("nameError").textContent = "";
        document.getElementById("emailError").textContent = "";
        document.getElementById("commentError").textContent = "";
    }
});
