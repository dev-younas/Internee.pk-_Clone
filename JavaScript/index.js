function toggleSidebar(){
    document.getElementById("sidebar").classList.toggle("active");
}

// Light Mode Toggle

var lightMode = document.getElementById("body");
var img = document.getElementById("logo-1");
var sun_moon = document.getElementById("sun_moon");
var headings = document.getElementsByClassName("heading-1"); 
var para = document.getElementById("para");
var btn = document.getElementById("btnMain-1");
var btn_2 = document.getElementById("btnMain-2");
var btn_Sec3 = document.getElementById("btnSec3");
var paraSec_3 = document.getElementsByClassName("childSecP");
var sec4 = document.getElementById("sec4");
var trend = document.getElementById("trend");
var sec_4Span = document.getElementById("sec_4Span");
var oneLiner = document.getElementById("oneLiner");
var sec5 = document.getElementsByClassName("sec5");
var  btnSec5 = document.getElementById("btnSec5");
var sec6P = document.getElementById("sec6P");
var lightStep = document.getElementsByClassName("lightStep");
var lightStep1 = document.getElementById("lightStep1");
var step_content = document.getElementsByClassName("step-content");
var footer = document.getElementById("footer");
var footerImg = document.getElementById("footerImg");

function bgToggle(){
    lightMode.classList.toggle("light-mode");

    // Headings COlor Activation on Light Mode and Dark Mode

    if(lightMode.classList.contains("light-mode")){
        img.src = "Assets/light-bg.png";
        sun_moon.src = "Assets/moon.png";
        para.style.color = "black";
        btn.style.color = "white";
        btn_2.style.color = "white";
        btn_Sec3.style.color = "white";
        sec4.style.backgroundColor = "#F3F4F6"
        trend.style.backgroundColor = "white"
        sec_4Span.style.backgroundColor = "black"
        oneLiner.style.color = "black"
        btnSec5.style.backgroundColor = "white"
        sec6P.style.color = "white"
        lightStep1.style.color = "white"
        footer.style.backgroundColor = "#F3F4F6"
        footerImg.src = "Assets/light-bg.png"

        for (var i = 0; i < headings.length; i++) { 
            headings[i].style.color = "black"; 
        }
        for (var i = 0; i < paraSec_3.length; i++) { 
            paraSec_3[i].style.color = "black"; 
        }
        for(var i = 0; i < sec5.length; i++){
            sec5[i].style.backgroundColor = "#001432"

        }
        for(var i = 0; i < lightStep.length; i++){
            lightStep[i].style.backgroundColor = "black";
            lightStep[i].style.color = "white";
        }
        for(var i = 0; i < step_content.length; i++ ){
            step_content[i].style.backgroundColor = "white";
        }
    } else {
        img.src = "Assets/logo.png";
        sun_moon.src = "Assets/sun.png";
        para.style.color = "white";
        btn.style.color = "white";
        btn_2.style.color = "white";
        btn_Sec3.style.color = "white";
        sec4.style.backgroundColor = "#000000"
        trend.style.backgroundColor = "#1F2937"
        sec_4Span.style.backgroundColor = "white"
        oneLiner.style.color = "white"
        sec5.backgroundColor = "#0A0A0A"
        btnSec5.style.backgroundColor = "#1F2937"
        sec6P.style.color = "white"
        lightStep1.style.color = "white"
        footer.style.backgroundColor = "#121212"
        footerImg.src = "Assets/logo.png"

        for (var i = 0; i < headings.length; i++) { 
            headings[i].style.color = "white"; 
        }
        for (var i = 0; i < paraSec_3.length; i++) { 
            paraSec_3[i].style.color = "white"; 
        }
        for(var i = 0; i < sec5.length; i++){
            sec5[i].style.backgroundColor = "#0A0A0A"
        }
        for(var i = 0; i < lightStep.length; i++){
            lightStep[i].style.backgroundColor = "var(--primary-color)";
            lightStep[i].style.color = "white";
        }
        for(var i = 0; i < step_content.length; i++ ){
            step_content[i].style.backgroundColor = "#132F0A";
        }
    }
}



// Cards Section

var cardsContainer = document.getElementById("row");

var cardsData = [
    {
        title : "App Development",
        img : "Assets/card-1.webp",
        desc : " Assets/cardsImg.png " ,
        desc_1 : "Apply Now",
    },
    {
        title : "App Development",
        img : "Assets/card-2.webp",
        desc : " Assets/cardsImg.png " ,
        desc_1 : "Apply Now",
    },
    {
        title : "Graphic Design",
        img : "Assets/card-3.webp",
        desc : " Assets/cardsImg.png " ,
        desc_1 : "Apply Now",
    },
    {
        title : "Chatbot Development",
        img : "Assets/card-4.webp",
        desc : " Assets/cardsImg.png " ,
        desc_1 : "Apply Now",
    },
    {
        title : "Backend Development",
        img : "Assets/card-5.webp",
        desc : " Assets/cardsImg.png " ,
        desc_1 : "Apply Now",
    },
    {
        title : "Frontend Internship",
        img : "Assets/card-6.webp",
        desc : " Assets/cardsImg.png " ,
        desc_1 : "Apply Now",
    },

]

console.log(cardsData)

for(var i = 0; i < cardsData.length; i++){
    cardsContainer.innerHTML += `
    <div class="col col-sm-12 col-md-6 col-lg-4">
                    <div class="card" id="cards" style="width: 20.31rem; border: none; height: 21rem; margin: 1rem; border-radius-top  : 1rem;" data-aos="flip-left">
                        <img src="${cardsData[i].img}" class="card-img-top" alt="..." style="height: 15rem; width: max-width;">
                        <div class="card-body">
                          <h5 class="card-title">${cardsData[i].title}</h5>
                          <a href=""><img src="${cardsData[i].desc}" alt=""></a> <a href="" style=" text-decoration: none;">${cardsData[i].desc_1}</a>
                        </div>
                      </div>
                </div>`

}




