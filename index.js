// document.getElementById("bored-bot").addEventListener("click", getIdea)

// function getIdea() {
//     fetch("https://www.boredapi.com/api/activity")
//         .then(res => res.json())
//         .then(data => {
//             document.body.classList.add("fun")
//             document.getElementById("idea").textContent = data.activity
//             document.getElementById("title").textContent = "🦾 HappyBot🦿"
//         })
// }

fetch('https://apis.scrimba.com/bored/api/activity')
    .then(response => response.json())
    .then(data => {
        document.getElementById("idea").innerHTML = data.activity
    });