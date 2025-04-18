document.getElementById("nav").innerHTML = `
<div class="logo">
            <img src="Assets/logo.png" alt="" id="logo-1">
        </div>
        <div class="nav-items">
            <ul>
                <li><a href="index.html" class = "links">Home</a></li>
                <li><a href="internship.html" class = "links">Internship</a></li>
                <li><a href="Gprogram.html" class = "links">Graduate Program</a></li>
            </ul>
        </div>
        <div class="btn">
            <button class="btn-1">Job Poratal</button>
            <button class="btn-2">Sign In</button>
            <button class="btn-3" ><img src="Assets/sun.png" alt="" onclick="bgToggle()" id="sun_moon"></button>
        </div>
        <div class="hamburger">
            <img src="Assets/menu-1.png" onclick="toggleSidebar()" alt="">
        </div>`
      
document.getElementById("footer").innerHTML = `
<div class="footerSec1">
            <div class="txt">
                <h4>Subscribe to Newsletter</h4>
                <p>Subsribe to our newsletter and get exclusive insights, industry trends</p>
            </div>
            <div class="input">
                <input type="email" name="" id="" placeholder="Enter Your Email" class="focus">
                <button type="submit">Subscribe</button>
            </div>
        </div>
        <hr>
        <div class="footer-sections">
            <div class="section-1">
              <img src="Assets/logo.png" alt="" id="footerImg">
              <p>The ultimate platform designed to turbocharge the IT sector in <br> Pakistan.</p>
              <p><i class="fa-solid fa-phone"></i> +92 325 2531538</p>
              <div class="social-icons">
                <a href="#"><i class="fa-brands fa-twitter" alt = "Twitter"></i></a>
                <a href="#"><i class="fa-brands fa-instagram" alt = "Instagram"></i></a>
                <a href="#"><i class="fa-brands fa-facebook" alt = " Facebook"></i></a>
                <a href="#"><i class="fa-brands fa-linkedin" alt = " Facebook"></i></a>
              </div>
            </div>
            <div class="section-2">
              <h3>Company</h3>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Student Ambassador</a></li>
                <li><a href="#">Intern Profile</a></li>
                <li><a href="#">About Us</a></li>
              </ul>
            </div>
            <div class="section-3">
              <h3>Resource</h3>
              <ul>
                <li><a href="#">Community</a></li>
                <li><a href="#">Certifcations</a></li>
                <li><a href="#">Scholarships</a></li>
              </ul>
            </div>
          </div>
           <hr>
          <div class="footer-bottom">
            <p>Copyright © 2025 internee.pk</p>
            
          </div>`        