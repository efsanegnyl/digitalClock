getTime()

function getTime() {
    let now = new Date()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()

    let year = now.getFullYear()
    let month = now.getMonth() + 1
    let day = now.getDate()


    let dayText = (day < 10) ? "0" + day :
    day;
    let mountText = (month < 10) ? "0" + month :
        month;

    hours < 10 ? hour.innerHTML = "0" + hours : hour.innerHTML = hours
    minutes < 10 ? minute.innerHTML = "0" + minutes : minute.innerHTML = minutes
    seconds < 10 ? second.innerHTML = "0" + seconds : second.innerHTML = seconds

    let dates = document.querySelector("#date")
    dates.innerHTML = dayText + "." + mountText + "." + year
}

setInterval(function () {
    getTime()
}, 1000)