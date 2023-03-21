
function countdown () {
    // let future_date = new Date("April 14, 2023 29:30:00").getTime();
    let future_date = new Date("2023-04-14T20:30:00-06:00")
    console.log(typeof future_date)
    console.log(future_date)

    let now = new Date().getTime();
    console.log(now)
    // console.log(typeof now)

    let count = future_date - now;
    console.log(count)
    // console.log(typeof count)

    let days = Math.floor(count / (1000 * 60 * 60 * 24));
    console.log(days)
    // console.log(typeof days)

    let hours = Math.floor(count % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    console.log(hours)
    // console.log(typeof hours)

    let minutes = Math.floor(count % (100 * 60 * 60) / (1000 * 60));
    console.log(minutes)

    let seconds = Math.floor(count % (1000 * 60) / 1000);
    console.log(seconds)

    console.log(days + "d" + hours + "h" + minutes + "m" + seconds + "s");
         
}

countdown()