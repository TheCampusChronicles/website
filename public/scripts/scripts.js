document.addEventListener('DOMContentLoaded', function () {
    // // The Firebase SDK is initialized and available here!
    // firebase.auth().onAuthStateChanged(user => { });
    // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
    // firebase.messaging().requestPermission().then(() => { });
    // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
    /*
    try {
      let app = firebase.app();
      let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
      document.getElementById('load').innerHTML = `Firebase SDK loaded with ${features.join(', ')}`;
    } catch (e) {
      console.error(e);
    }
    */
});

// status of navigation menu.
// true means menu is visible, false means menu is hidden
let navState = false;

$(document).ready(function () {
    $(window).resize(function () {
        let navHeaderHeight = document.getElementById("nav-header").offsetHeight;
        document.getElementById("side-nav-menu").style.top = navHeaderHeight.toString() + "px";
    }).resize();

});

let sideNavMenu = document.getElementById("side-nav-menu");
let navStateElement = document.getElementById("nav-state");
window.onclick = function (event) {
    if (event.target !== sideNavMenu && event.target !== navStateElement) {
        if (navState) {
            sideNavMenu.style.width = "0px";
            document.getElementById("nav-state").innerHTML = "&#9776;";
            navState = !navState;
        }
    }
};

function openNav() {
    let width = $(navStateElement).width();
    let height = $(navStateElement).height();
    if (navState) {
        document.getElementById("side-nav-menu").style.width = "0px";
        document.getElementById("nav-state").innerHTML = "&#9776;";
    }
    else {
        if (window.innerWidth < 500)
            document.getElementById("side-nav-menu").style.width = "200px";
        else document.getElementById("side-nav-menu").style.width = "250px";
        document.getElementById("nav-state").innerHTML = "&#215;";
    }
    $(navStateElement).width(width);
    $(navStateElement).height(height);

    navState = !navState;
}

// Bind the swipeHandler callback function to the swipe event on div.box
$(document).on("swipe", swipeHandler);

// Callback function references the event target and adds the 'swipe' class to it
function swipeHandler(event) {
    $(event.target).addClass("swipe");
    openNav();
}


