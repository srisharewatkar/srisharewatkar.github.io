document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-link");
    const contentArea = document.getElementById("content-area");

    // Load content dynamically when a link is clicked
    links.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault(); // Prevent default link behavior
            const url = event.target.getAttribute("href");

            // Fetch the content of the clicked link
            fetch(url)
                .then(response => response.text())
                .then(data => {
                    contentArea.innerHTML = data; // Load content into the right column
                })
                .catch(error => {
                    contentArea.innerHTML = `<p>Error loading content. Please try again later.</p>`;
                    console.error("Error fetching content:", error);
                });
        });
    });
});

function toggleSidebar() {
    const colwidth = document.getElementById('navsidebarContainer');
    const maincont = document.getElementById('maincont');
    console.log("Sidebar toggled!");
    colwidth.classList.toggle('col-md-2');
    maincont.classList.toggle('col-md-10');
    colwidth.classList.toggle('col-md-1');
    maincont.classList.toggle('col-md-11');
    colwidth.classList.toggle('navbarcollapsed');      
  }