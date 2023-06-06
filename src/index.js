
import { headerPage } from "./header.js";
import { menuTab } from "./menu.js"
import { contactPageLoad } from "./contact.js";
import{ homeTab } from "./home.js";


// const tabs = document.querySelectorAll('[data-tab-target]')
// const tabContents = document.querySelectorAll('[data-tab-content]')


// init();

const init =(() => {
    headerPage();
    homeTab();
    addNavEvents();

})();

function addNavEvents() {
    const homeBtn = document.getElementById('homeBtn');
    const menuBtn = document.getElementById('menuBtn');
    const contactBtn = document.getElementById('contactBtn');

    if(homeBtn) {
        homeBtn.addEventListener('click', homeTab, false);

    }
    if(menuBtn) {
        menuBtn.addEventListener('click', menuTab, false);
    }

    if(contactBtn) {
        contactBtn.addEventListener('click', contactPageLoad, false);

    }
}


// tabs.forEach((tab) =>
//     tab.addEventListener('click', () => {
//         const target = document.querySelector(tab.dataset.tabTarget);
//         tabContents.forEach((tabContent) => {
//             tabContent.classList.remove("current");
//         })
//         target.classList.add('current');
//     })
// )




// tabHome.addEventListener('click', () => {
//     // if (menuTab === true) {
//     //     content.appendChild(container);
//     //     menuTab = false;

//     // }
//     homeTab;
// })

// const tabMenu = document.getElementById('tabMenu');
// tabMenu.addEventListener('click', () => {
//     menuTab;
// })

// const getContactPage = document.getElementById('tabContact');

// getContactPage.addEventListener('click', () => {
//     contactPageLoad;
// })