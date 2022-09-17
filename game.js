var game = {
    init: function(){     
        for (const cell of model) {
            for (let index = 0; index < 13; index++) {
                const span = document.createElement('span');
                span.classList.add(game.types[cell[index]]);
                span.classList.add('square');
                game.tableau.appendChild(span);
            }
        game.tableau.style.width = '650px';
        }
        document.addEventListener('keydown', game.moveBurger)
    },
    cellWidth: 50,
    tableau: document.querySelector('.terrain_de_jeu'),
    types: {
        'x': 'classic',
        '*': 'wall',
        'o': 'burger',
        '-': 'goal'
    },
    moveBurger: function(event) {
        const burger = document.querySelector('.burger');
        // console.log(burger.getBoundingClientRect());
        let xBurger = burger.getBoundingClientRect().x;
        let xBurgerMore = xBurger + 50;
        let xBurgerLess = xBurger - 50;
        let yBurger = burger.getBoundingClientRect().y;
        let yBurgerMore = yBurger + 50;
        let yBurgerLess = yBurger - 50;
        // console.log(xBurgerMore);
        // console.log(xBurgerLess);
        // console.log(yBurgerMore);
        // console.log(yBurgerLess);

        if (event.key === "ArrowLeft") {
            const nextSpan = document.elementFromPoint(xBurgerLess, yBurger);
            const notWall = (!(nextSpan.classList.contains('wall')));
            // console.log(nextSpan);
            if (nextSpan.tagName === 'SPAN' && notWall) {
                burger.classList.remove('burger');
                burger.classList.add('classic');
                nextSpan.classList.add('burger');
            }
            if (nextSpan.classList.contains('goal')) {
                alert('Vous avez gagné !');
            }
        } else if (event.key === "ArrowRight") {
            // const test = document.elementFromPoint(xBurgerMore, yBurger);
            const nextSpan = burger.nextElementSibling;
            const indexOfNextSPan = Array.from(burger.parentNode.children).indexOf(burger) + 1;
            const notWall = (!(nextSpan.classList.contains('wall')));
            // console.log(test);
            // console.log(nextSpan);
            if (nextSpan.tagName === 'SPAN' && indexOfNextSPan % 13 !== 0 && notWall) {
                burger.classList.remove('burger');
                burger.classList.add('classic');
                nextSpan.classList.add('burger');
            }
            if (nextSpan.classList.contains('goal')) {
                alert('Vous avez gagné !');
            }
            // test.classList.add('burger');
        } else if (event.key === "ArrowUp") {
            const nextSpan = document.elementFromPoint(xBurger, yBurgerLess);
            const notWall = (!(nextSpan.classList.contains('wall')));
            // console.log(nextSpan);
            if (nextSpan.tagName === 'SPAN' && notWall) {
                burger.classList.remove('burger');
                burger.classList.add('classic');
                nextSpan.classList.add('burger');
            }
            if (nextSpan.classList.contains('goal')) {
                alert('Vous avez gagné !');
            }
        } else {
            // const nextSpan = document.elementFromPoint(xBurger, yBurgerMore);
            // console.log(burger.nodeValue);
            // console.log(nextSpan);
            const indexOfBurger = Array.from(burger.parentNode.children).indexOf(burger);
            const indexOfNextSpan = indexOfBurger + 13;
            const nextSpan = Array.from(game.tableau.children)[indexOfNextSpan];
            const notWall = (!(nextSpan.classList.contains('wall')));
            // console.log(nextSpan);
            if (nextSpan.tagName === 'SPAN' && notWall) {
                burger.classList.remove('burger');
                burger.classList.add('classic');
                nextSpan.classList.add('burger');
            }
            if (nextSpan.classList.contains('goal')) {
                alert('Vous avez gagné !');
            }
        }
    }
};


document.addEventListener('DOMContentLoaded', game.init);

var model = [
    'xxxxxxxxx**xx',
    'x********xx-x',
    'xxxxxxxx*x**x',
    'xx*****xxx*x*',
    'xxxxxx*x***x*',
    '****xx*x*xxx*',
    'xxx*xx*x*xxxx',
    'x*o*xx**xx*xx',
    'x***xxxxxx*xx',
    'xxxxxx*****xx',
];