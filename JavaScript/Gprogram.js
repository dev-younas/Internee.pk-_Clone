function toggleSidebar(){
    document.getElementById("sidebar").classList.toggle("active");
}

// Light Mode Toggle

var lightMode = document.getElementById("body");
var img = document.getElementById("logo-1");
var footer = document.getElementById("footer");
var footerImg = document.getElementById("footerImg");

function bgToggle(){
    lightMode.classList.toggle("light-mode");

    // Headings COlor Activation on Light Mode and Dark Mode

    if(lightMode.classList.contains("light-mode")){
        img.src = "Assets/light-bg.png";
        footer.style.backgroundColor = "#F3F4F6"
        footerImg.src = "Assets/light-bg.png"

    } else {
        img.src = "Assets/logo.png";
        footer.style.backgroundColor = "#121212"
        footerImg.src = "Assets/logo.png"
    }
}


// Cards Manipulator

var cards = document.getElementById("row")

var cardsData = [
    {
        title : "Health Care",
        img : "Assets/HK-gp.jpg",
        desc_1 : "Step into the world where every second counts and lives are changed. Whether it's assisting in patient care, supporting medical research, or exploring health tech innovation our internships put you at the heart of the action. Join the frontlines of impact and make your mark in the future of healthcare.",
    },  
    {
        title : "Engineering",
        img : "Assets/ENG-gp.jpg",
        desc_1 : "Enter the realm where ideas turn into structures, circuits, and code. From building the future to solving real-world challenges, our engineering internships place you in the driver’s seat of innovation. Whether it’s civil, electrical, mechanical, or software get ready to design, build, and disrupt.",
    },
    {
        title : "Information Technology",
        img : "Assets/IT-gp.jpg",
        desc_1 : "Dive into the digital battlefield where code is power and innovation never sleeps. From software development to cybersecurity, data analytics to cloud computing our IT internships equip you to lead the tech revolution. Step in, gear up, and shape the future of technology.",
    },
]

for(var i = 0; i < cardsData.length; i++){  
    cards.innerHTML +=`
    <div class="col col-sm-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-duration="1000">
                        <div class="card" id="cards">
                            <img src="${cardsData[i].img}" class="card-img-top" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">${cardsData[i].title}</h5>
                              <p class="card-text">${cardsData[i].desc_1    }</p>
                            </div>
                          </div>
                    </div>`

}
