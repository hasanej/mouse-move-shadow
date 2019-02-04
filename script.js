(() => {
    const hero = document.querySelector('.hero'),
    text = hero.querySelector('h1'),
    walk = 500;

    const shadow = (e) => {
        const { offsetWidth: width, offsetHeight: height } = hero;
        let { offsetX: x, offsetY: y } = e;

        if (e.currentTarget !== e.target) {
            x += e.target.offsetLeft;
            y += e.target.offsetTop;
        }

        const xWalk = Math.round((x / width * walk) - (walk / 2)),
            yWalk = Math.round((y / height * walk) - (walk / 2));

        text.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
        ${-xWalk}px ${yWalk}px 0 rgba(0,255,255,0.7),
        ${yWalk}px ${-xWalk}px 0 rgba(0,255,0,0.7),
        ${-yWalk}px ${-xWalk}px 0 rgba(0,0,255,0.7)
        `;
    }

    hero.addEventListener('mousemove', shadow);
})();