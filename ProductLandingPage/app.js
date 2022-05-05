const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = form.email.value;
    console.log("Thanks for subscribing", email);
    form.reset();
})