function toggleSidebar() {
    const colwidth = document.getElementById('navsidebarContainer');
    const navbar = document.getElementsByClassName('navsidebar');
    const maincont = document.getElementById('maincont');
    console.log("Sidebar toggled!");
    colwidth.classList.toggle('col-md-3');
    colwidth.classList.toggle('col-lg-2');
    maincont.classList.toggle('offset-md-3');
    maincont.classList.toggle('offset-lg-2');
    colwidth.classList.toggle('col-md-1');
    maincont.classList.toggle('offset-md-1');
    colwidth.classList.toggle('navbarcollapsed');  
    for (let i = 0; i < navbar.length; i++) {
    navbar[i].classList.toggle('d-flex');
    navbar[i].classList.toggle('d-none');
    }
  }