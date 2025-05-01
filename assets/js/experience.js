AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Web Designer",
    cardImage: "assets/images/alankit.png",
    place: "Alankit",
    time: "(July, 2021 - April, 2025)",
    desp: "<li>Formally learned and practiced UI/UX design, focusing on creating user-centered and accessible websites.</li> <li>Worked closely with cross-functional teams to improve website engagement, accessibility, and overall user experience.</li> <li>Gained expertise in user research, usability improvements, and crafting responsive, inclusive digital designs.</li>",
  },
  {
    title: "Web Designer",
    cardImage: "assets/images/prakhar.png",
    place: "Prakhar Software Solutions",
    time: "(Dec, 2020 - July, 2021)",
    desp: "<li>Improved my ability to design detailed wireframes and functional prototypes for complex platforms like job portals and business websites.</li><li>Gained experience in building design consistency through maintaining style guides and brand standards.</li><li>Strengthened my understanding of user flow and information architecture for better web experiences.</li>",
  },
  {
    title: "Web Designer",
    cardImage: "assets/images/SDA.png",
    place: "Skill Development Advisor",
    time: "(June, 2019 - June, 2020)",
    desp: "<li>Built a strong foundation in web design, focusing on improving website layouts and user engagement.</li><li>Learned how to create responsive websites compatible with multiple browsers and devices.</li><li>Developed skills in basic wireframing to plan website structures before development.</li>"
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

