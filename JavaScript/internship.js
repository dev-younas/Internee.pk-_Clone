function toggleSidebar(){
    document.getElementById("sidebar").classList.toggle("active");
}

// Light Mode Toggle

var lightMode = document.getElementById("body");
var img = document.getElementById("logo-1");
var internship_Sec2 = document.getElementById("internship_Sec2")
var footer = document.getElementById("footer");
var footerImg = document.getElementById("footerImg");

function bgToggle(){
    lightMode.classList.toggle("light-mode");

    // Headings COlor Activation on Light Mode and Dark Mode

    if(lightMode.classList.contains("light-mode")){
        img.src = "Assets/light-bg.png";
        internship_Sec2.style.backgroundColor = "#F3F4F6"
        footer.style.backgroundColor = "#F3F4F6"
        footerImg.src = "Assets/light-bg.png"
    } else {
        img.src = "Assets/logo.png";
        internship_Sec2.style.backgroundColor = "#121212"
        footer.style.backgroundColor = "#121212"
        footerImg.src = "Assets/logo.png"
    }
}

// Cards Manipulation

var cards = document.getElementById("row");

var cardsData = [
    {
        title : "Other Internships",
        img : "Assets/card-1.webp",
        desc_1 : "Apply Now",
    },  
    {
        title : "App Development",
        img : "Assets/card-2.webp",
        desc_1 : "Apply Now",
    },
    {
        title : "Graphic Design",
        img : "Assets/card-3.webp",
        desc_1 : "Apply Now",
    },
    {
        title : "Chatbot Development",
        img : "Assets/card-4.webp",
        desc_1 : "Apply Now",
    },
    {
        title : "Backend Development",
        img : "Assets/card-5.webp",
        desc_1 : "Apply Now",
    },
    {
        title : "Frontend Internship",
        img : "Assets/card-6.webp",
        desc_1 : "Apply Now",
    },

]


for(var i = 0; i < cardsData.length; i++){
    cards.innerHTML += `
    <div class="col col-sm-12 col-md-6 col-lg-3">
                    <div class="card" id="cards"  data-aos="flip-left">
                        <img src="${cardsData[i].img}" class="img" id="img" alt="..." >
                        <div class="card-body" id="card-body">
                          <p class="card-title">${cardsData[i].title}</p> 
                        </div>
                        <div class="card-footer" id="card-footer">
                           <button>${cardsData[i].desc_1}</button>
                      </div>
                </div>`
}

// Counting Animation

function startCounting(id, target, speed) {
    let count = 0;
    const element = document.getElementById(id);
  
    const interval = setInterval(() => {
      element.textContent = count;
      count++;
  
      if (count > target) {
        clearInterval(interval);
      }
    }, speed);
  }
  
  // Call the function for each counter
  startCounting("count1", 30, 60);  // (id, targetNumber, speedInMs)
  startCounting("count2", 50, 70);
  startCounting("count3", 95, 50);
  