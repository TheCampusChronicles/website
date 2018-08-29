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


$(document).ready(function () {

    // Find all YouTube videos
    let $allVideos = $("iframe[src^='https://www.facebook.com']");

    // The element that is fluid width
    let $fluidEl = $(".column");

    // Figure out and save aspect ratio for each video
    $allVideos.each(function () {
        const aspectRatio = $(this).height() / $(this).width();
        console.log($(this).height());
        console.log($(this).width());
        console.log(aspectRatio);
        $(this).data('aspectRatio', aspectRatio)
        // and remove the hard coded width/height
            .removeAttr('height')
            .removeAttr('width');
    });

    // When the window is resized
    $(window).resize(function () {

        let newWidth = $fluidEl.width();

        // Resize all videos according to their own aspect ratio
        $allVideos.each(function () {
            let $el = $(this);
            $el.width(newWidth).height(newWidth * $el.data('aspectRatio'));
        });

        // Kick off one resize to fix all videos on page load
    }).resize();

});

