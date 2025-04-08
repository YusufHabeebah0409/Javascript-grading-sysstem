function checkGrade() {
    if (grade.value == "") {
        showGrade.innerHTML = "Input Your Grade"
    } else if (grade.value >= 0 && grade.value <= 39) {
        showGrade.innerHTML = " You Failed 💔"
    } else if (grade.value >= 40 && grade.value <= 50) {
        showGrade.innerHTML = "E  Passed 😥"
    } else if (grade.value >= 51 && grade.value <= 59) {
        showGrade.innerHTML = "D Poor 😪"
    } else if (grade.value >= 60 && grade.value <= 69) {
        showGrade.innerHTML = "C Average 🙂"
    } else if (grade.value >= 70 && grade.value <= 80) {
        showGrade.innerHTML = "B Good 😍"
    } else if (grade.value >= 81 && grade.value <= 100) {
        showGrade.innerHTML = "A Excellent 🤗"
    }
}