<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function () {
    // Hamburger menu
    const menuToggle = document.querySelector(".menu-toggle");
    const navUl = document.querySelector("nav ul");
    if (menuToggle && navUl) {
        menuToggle.addEventListener("click", () => {
            navUl.classList.toggle("active");
        });
    }

    // Tab switching
    const tabLinks = document.getElementsByClassName("tab-links");
    const tabContents = document.getElementsByClassName("tab-content");

    function openTab(tabName) {
        for (let tabLink of tabLinks) {
            tabLink.classList.remove("active-link");
            tabLink.setAttribute("aria-selected", "false");
        }
        for (let tabContent of tabContents) {
            tabContent.classList.remove("active-tab");
            tabContent.setAttribute("aria-hidden", "true");
        }
        event.currentTarget.classList.add("active-link");
        event.currentTarget.setAttribute("aria-selected", "true");
        document.getElementById(tabName).classList.add("active-tab");
        document.getElementById(tabName).setAttribute("aria-hidden", "false");
    }

    for (let tabLink of tabLinks) {
        tabLink.addEventListener("click", function (event) {
            openTab(this.dataset.tab);
        });
    }
});
=======

    var tablinks=document.getElementsByClassName("tab-links");
    var tabcontents=document.getElementsByClassName("tab-contents");
    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }
>>>>>>> 2e072686dcdd28719c91be995d628e0b22219aaa
