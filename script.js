



document.getElementById("consentForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const data = {};
    new FormData(this).forEach((v, k) => data[k] = v);

    console.log(data);

    document.getElementById("message").textContent = "Form submitted successfully!";

    this.reset();
});
