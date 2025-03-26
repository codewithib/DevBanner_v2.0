// Grabbing element from Dom
const logo = document.querySelector(".logo");

const getStartedBtns = document.querySelectorAll(".call-to-actionBtn");

const logoFooter = document.querySelector(".logoFooter");


const openBannerPage = () => {
    const link = document.createElement("a");
    document.body.appendChild(link);
    
    link.href = "/bannerApp/banner.html";
    link.click();
    document.body.removeChild(link);
}

logo.addEventListener("click", () => {
    openBannerPage();
});

for (let getStartedBtn of getStartedBtns) {
    getStartedBtn.addEventListener("click", () => {
        openBannerPage();
    });
}

logoFooter.addEventListener("click", () => {
    openBannerPage();
});



document.addEventListener("DOMContentLoaded", () => {
    logo.classList.add("redirectElement");

    for (let getStartedBtn of getStartedBtns) {
        getStartedBtn.classList.add("redirectElement");
    }

    logoFooter.classList.add("redirectElement");
})