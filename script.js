// کپچا

const square = document.querySelector(".square");

square.addEventListener("click", () => {

    square.classList.toggle("checked");

});


// انتخاب روش  ارسال

const radios = document.querySelectorAll(".radio");

radios.forEach(radio => {

    radio.addEventListener("click", () => {

        radios.forEach(r => {

            r.classList.remove("active");

        });

        radio.classList.add("active");

    });

});
const otpBtn = document.querySelector(".primary");

otpBtn.addEventListener("click", function () {

    window.location.href = "verify.html";

});