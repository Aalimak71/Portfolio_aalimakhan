AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Alankit Global CPV Services",
    cardImage: "assets/images/alankit.png",
    description: "Alankit Global CPV Services",
    tagimg: "http://103.91.91.202/design/alankitglobal/index.html",
    Previewlink: "http://103.91.91.202/design/alankitglobal/index.html",
    Githublink: "",
  },
  {
    title: "World Investing",
    cardImage: "assets/images/project-page/worldinvesting.png",
    description: "",
    tagimg: "https://www.alankit.co.in/worldinvesting/",
    Previewlink: "https://www.alankit.co.in/worldinvesting/",
    Githublink: "",
  },
  {
    title: "Openaccount Alankit",
    cardImage: "assets/images/project-page/openaccount.png",
    description: "Start Trading Instantly with Easy Trade",
    tagimg: "https://openaccount.alankit.co.in/",
    Previewlink: "https://openaccount.alankit.co.in/",
    Githublink: "",
  },
 
  {
    title: "Investor Charter",
    cardImage: "assets/images/project-page/investor_charter.png",
    description: "Helping investors with high-end solutions through our wide spectrum of investor support services.",
    tagimg: "https://alankitassignments.com/investor-charter/",
    Previewlink: "https://alankitassignments.com/investor-charter/",
    Githublink: "",
  },
  {
    title: "Liberalised Remittance Scheme",
    cardImage: "assets/images/project-page/lrsalankit.png",
    description:"Liberalised Remittance Scheme that is formulated under R.B.I.'s guidelines",
    tagimg: "https://lrs.alankit.co.in/",
    Previewlink: "https://lrs.alankit.co.in/",
    Githublink: "",
  },
  
  {
    title: "Alankit Attestation MEA",
    cardImage: "assets/images/project-page/attestation.png",
    description:"Leading Solution for Attestation, Authentication & Verification Services",
    tagimg:"https://www.alankitattestation.com/",
    Previewlink: "https://www.alankitattestation.com/",
    Githublink: "",
  },
  {
    title: "Naukriyan.Com",
    cardImage: "assets/images/project-page/naukriyan.png",
    description: "Find jobs through our platform",
    tagimg:"https://naukriyan.com/",
    Previewlink: "https://naukriyan.com/",
   // Githublink: "",
  },
  
];

// projects.forEach(project => {
//   const a = document.selectelement('a');
//   a.href = project.Previewlink;
//   a.textContent = "Preview Project";
//   a.target = "_blank"; // <-- This opens it in a new tab
//   document.body.appendChild(a);
// });

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" target="_blank class="social-icon" ><svg xm lns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
