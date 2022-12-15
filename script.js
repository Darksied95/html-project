const questions = document.getElementsByClassName('question')


for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", function (e) {

        e.srcElement.classList.toggle("active")
        let question_answer = this.nextElementSibling
        if (question_answer.style.display == "block") {
            question_answer.style.display = 'none'
        } else {
            question_answer.style.display = "block"
        }
    })
}


