var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<p class='letter'>$&</p>");

anime.timeline({
        loop: true
    })
    .add({
        targets: '.ml11',
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: .5
    })
    .add({
        targets: '.ml11',
        easing: "easeOutExpo",
        duration: .1,
        delay:1000
    }).add({
        targets: '.ml11 .letter',
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 400,
        offset: '-=775',
        delay: (el, i) => 2 * (i + 1)
    }).add({
        targets: '.ml11',
        opacity: 0,
        duration: 100,
        easing: "easeOutExpo",
        delay: 10000000
    });