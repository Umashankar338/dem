// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    // ---------------------- TEAM SELECTION LOGIC ---------------------- //
    const defaultTeam = "chief";
    const defaultTeamElement = document.querySelector(`.slideshow-bar li[data-team="${defaultTeam}"]`);
    if (defaultTeamElement) {
        defaultTeamElement.classList.add("active");
    }

    createTeamCards(defaultTeam); // Load default team

    // Event listener for team selection
    document.querySelectorAll(".slideshow-bar li").forEach(item => {
        item.addEventListener("click", function () {
            document.querySelectorAll(".slideshow-bar li").forEach(el => el.classList.remove("active"));
            this.classList.add("active");

            const selectedTeam = this.getAttribute("data-team");
            document.getElementById("team-container").innerHTML = ""; // Clear previous content
            createTeamCards(selectedTeam); // Create new team cards dynamically
        });
    });

    // ---------------------- HAMBURGER MENU LOGIC ---------------------- //
    const menuToggle = document.createElement("div");
    menuToggle.classList.add("hamburger");
    menuToggle.innerHTML = "&#9776;"; // Hamburger Icon (☰)

    const header = document.querySelector(".header");
    const navbar = document.querySelector(".navbar");

    header.appendChild(menuToggle);

    menuToggle.addEventListener("click", function () {
        navbar.classList.toggle("active");
        this.classList.toggle("active");
        document.body.classList.toggle("menu-open");

        // Toggle icon (☰ → ✖)
        this.innerHTML = navbar.classList.contains("active") ? "&#10006;" : "&#9776;";
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!navbar.contains(event.target) && !menuToggle.contains(event.target)) {
            navbar.classList.remove("active");
            menuToggle.classList.remove("active");
            document.body.classList.remove("menu-open");
            menuToggle.innerHTML = "&#9776;";
        }
    });
});

// ---------------------- TEAM DATA ---------------------- //
const teamsData = {
    chief: [
        { name: "UMA", role: "CONVENOR", img: "2.jpg", instagram: "https://www.instagram.com/itz_smart____/" },
        { name: "SHANKAR", role: "CO-CONVENOR", img: "3.jpg", instagram: "https://www.instagram.com/itz_smart____/" },
        { name: "REDDY", role: "CHIEF-EXECUTIVE", img: "2.jpg", instagram: "https://www.instagram.com/itz_smart____/" }
    ],
    design: [
        { name: "Jayanth", role: "Head of Design", img: "j.jpg", instagram: "https://www.instagram.com/_jayanth._7/" },
        { name: "Charith", role: "Designer", img: "5.jpg", instagram: "https://www.instagram.com/charith__v/" }
    ],
    arts: [
        { name: "Shalini", role: "Cultural Head", img: "M.jpg", instagram: "" }
    ],
    hospitality: [
        { name: "Swetha", role: "Head of Hospitality", img: "s.jpg", instagram: "" }
    ],
    pr: [
        { name: "Nalini", role: "PR Head", img: "n.jpg", instagram: "" }
    ],
    sponsorship: [
        { name: "Mohan", role: "Sponsorship Lead", img: "mohan.jpg", instagram: "https://www.instagram.com/mohan_23_25/" }
    ],
    logistics: [
        { name: "Smart", role: "Logistics Head", img: "8.jpg", instagram: "https://www.instagram.com/itz_smart____/" }
    ],
    tech: [
        { name: "Uma", role: "Tech Lead", img: "2.jpg", instagram: "https://www.instagram.com/itz_smart____/" }
    ],
    web: [
        { name: "Shankar", role: "WEBSITE DEVELOPER", img: "4.jpg", instagram: "https://www.instagram.com/itz_smart____/" }
    ]
};

// ---------------------- CREATE TEAM CARDS ---------------------- //
function createTeamCards(team) {
    const teamContainer = document.getElementById("team-container");
    teamContainer.innerHTML = ""; // Clear existing content

    if (!teamsData.hasOwnProperty(team)) {
        console.error(`⚠️ No data found for team: ${team}`);
        return;
    }

    teamsData[team].forEach(member => {
        // Create card container
        const card = document.createElement("div");
        card.classList.add("team-card");

        // Create and add the image
        const img = document.createElement("img");
        img.classList.add("team-img");
        img.src = member.img;
        img.alt = member.name;
        img.style.cursor = "pointer"; // Indicate clickability

        // Open Instagram profile on image click
        img.addEventListener("click", () => {
            window.open(member.instagram, "_blank"); // Open Instagram in a new tab
        });

        // Create and add the name and role
        const name = document.createElement("h3");
        name.textContent = member.name;

        const role = document.createElement("p");
        role.textContent = member.role;

        // Append elements to the card
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(role);

        // Append the card to the container
        teamContainer.appendChild(card);
    });
}
