
; /* Start:"a:4:{s:4:"full";s:54:"/local/templates/microsite/js/script.js?16842722302755";s:6:"source";s:39:"/local/templates/microsite/js/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
const menuMobile = document.getElementById('menuMobile');
const overlay = document.getElementById('overlay');
const btnMenu = document.getElementById('btnMenu');
const btnClose = document.getElementById('btnClose');
const headingSubtitle = document.getElementById('headingSubtitle');
// const formAttach = document.getElementById('formAttach');
const formAttach = document.getElementById('formfile');
const sections = document.querySelectorAll('[data-section]');
const tabs = document.querySelectorAll('[data-tab]');

document.addEventListener('DOMContentLoaded', function () {
    btnMenu.addEventListener('click', function () {
        openMenu();
    });
    btnClose.addEventListener('click', function () {
        closeMenu();
    });
    if (tabs) {
        tabs.forEach((tab) => {
            tab.addEventListener('click', function () {
                tabs.forEach((tab) => {
                    tab.classList.remove('active');
                });
                this.classList.add('active');
                let sectionId = tab.dataset.tab;

                sections.forEach((section) => {
                    if (section.dataset.section === sectionId) {
                        section.classList.add('active');
                        if (section.dataset.title && headingSubtitle) {
                            headingSubtitle.textContent = section.dataset.title;
                        }
                    } else {
                        section.classList.remove('active');
                    }
                });
            });
        });
    }
    if (document.body.classList.contains('page-photo')) {
        // baguetteBox.run('.lightbox');
        baguetteBox.run('.gallery');
    }
    if (formAttach) {
        formAttach.addEventListener('change', function () {
            let inputContainer = formAttach.parentNode;
            let filesNames = inputContainer.querySelector('.label__text');
            if (formAttach.value !== '') {
                inputContainer.classList.add('active');
                // let fileBlock =
                //     '<span class="file-block"><span class="file-name">' +
                //     el.files.item(0).name +
                //     '</span><span class="file-delete"></span></span>';
                filesNames.textContent = formAttach.files.item(0).name;
            } else {
                filesNames.textContent = 'Выберите файл';
            }
        });
    }
});

function openMenu() {
    menuMobile.classList.add('active');
    overlay.classList.add('active');
    document.body.classList.add('noscroll');
}
function closeMenu() {
    menuMobile.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('noscroll');
}

/* End */
;
; /* Start:"a:4:{s:4:"full";s:54:"/local/templates/microsite/js/theme0.js?16842722301803";s:6:"source";s:39:"/local/templates/microsite/js/theme0.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.btn-login').innerHTML = 'Войти в личный кабинет';
    if (document.body.classList.contains('home')) {
        const headingTitleText = document.querySelector('.heading__title').textContent;
        const headingIntroText = document.querySelector('.heading__intro').innerHTML;
        const homeNews = document.querySelector('.news');
        document.querySelector('.main').insertAdjacentHTML('beforebegin', '<div class="welcome container"></div>');
        document.querySelector('.welcome').insertAdjacentHTML('afterbegin', `<section class="intro"><h2>${headingTitleText}</h2><article class="welcome__text">${headingIntroText}</article></section>`);
        document.querySelector('.welcome').appendChild(homeNews);
        setTimeout(() => document.querySelector('.main').classList.add('widebg'), 1000);
        setTimeout(() => document.body.classList.add('body-widebg'), 1000);
    }
    const sectionNewsALl = document.querySelector('.news__list--all ');
    if (sectionNewsALl) {
        setTimeout(() => sectionNewsALl.classList.add('widebg'), 1000);
        setTimeout(() => document.body.classList.add('body-widebg'), 1000);
    }
    const newsSectionAll = document.querySelector('[data-section="all"]');
    const newsSectionimportant = document.querySelector('[data-section="important"]');
    if (newsSectionAll) {
        const title = newsSectionAll.dataset.title;
        newsSectionAll.insertAdjacentHTML('afterbegin', `<h2 class="section__title">${title}</h2>`);
    }
    if (newsSectionimportant) {
        const title = newsSectionimportant.dataset.title;
        newsSectionimportant.insertAdjacentHTML('afterbegin', `<h2 class="section__title">${title}</h2>`);
    }
});

/* End */
;; /* /local/templates/microsite/js/script.js?16842722302755*/
; /* /local/templates/microsite/js/theme0.js?16842722301803*/
