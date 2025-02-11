function createCard(title, cName, views, timeOld, duration, thumbnail){
    // Finish this function
    let viewStr
    let time
    if (views < 1000) {
        viewStr = views;
    }
    else if (views > 1000000) {
        viewStr = views / 1000000 + "M";
    }
    else {
        viewStr = views / 1000 + "K";
    }

    if(timeOld>=12)
    {
        time =Math.floor(timeOld/12) + " year"
    }
    else
    {
        time = timeOld + " Months"
    }
    let a =  `<div class="card">
        <div class="image">
            <img src="${thumbnail}"
                alt="">

            <div class="capsule">${duration}</div>
        </div>

        <div class="text">
            <h1>${title}</h1>
            <p>${cName} . ${viewStr} views . ${time}  ago</p>
        </div>
    </div>`


document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML + a;

}


createCard("Frontend Developer Roadmap", "naimish", 90000000, 24, "10:00", "download2.jpg")
createCard("Wordpress Tutorial", "naimish", 150000, 1 , "15:36", "download 3.jpg")

