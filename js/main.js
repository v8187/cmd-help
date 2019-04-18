import { menuItems } from './menu-items.js';

/**
 * Clouser to avoid global variable access
 */
(() => {
    /**
     * Method to compile string of <ul> for menuItems passed to it recursively
     * @param {*} menuItems 
     */
    const compileMenuItems = (menuItems) => {
        let elMenu = '<ul>';
        menuItems.map(item => {
            elMenu += `<li><a href="#" id="${item.id}">${item.label}</a></li>`;
            if (item.children) {
                elMenu += compileMenuItems(item.children);
            }
        });
        elMenu += '</ul>';
        return elMenu;
    };
    // Store element references
    const elRefs = {};
    document.addEventListener('DOMContentLoaded', (event) => {
        elRefs.sideBar = document.querySelector('.side-bar');
        elRefs.sideBar.innerHTML = compileMenuItems(menuItems);
        console.log('DOMContentLoaded loaded', menuItems, elRefs, window, document);
    });
})();

