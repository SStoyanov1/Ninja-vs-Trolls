function drawBackground() {
    var svg = document.getElementById('backgroundSvg');
    svg.setAttributeNS(null, 'height', '700');
    svg.setAttributeNS(null, 'width', '1000');
}

var keysDown = {};

window.addEventListener('keydown', function (e) {
    if ([38, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
    keysDown[e.keyCode] = true;
});

window.addEventListener('keyup', function (e) {
    delete keysDown[e.keyCode];
});

function update(mod) {
    if (37 in keysDown) {
        hero.attrs.x -= gameSpeed * mod;

        if (hero.attrs.x < 0) {
            hero.attrs.x = 0;
        }
    }

    if (39 in keysDown) {
        hero.attrs.x += gameSpeed * mod;

        if (hero.attrs.x > canvas.getWidth() - hero.attrs.totalWidth) {
            hero.attrs.x = canvas.getWidth() - hero.attrs.totalWidth;
        }
    }

    if (32 in keysDown) {
        hero.setAnimation('punch');
        hero.afterFrame(2, function () {
            hero.setAnimation('idle');
        });
    }
}

function render() {
    //field.clear();
}

function loadChar(posX, posY, imageSrc, animations, charWidth) {
    var imageObj = new Image()
    imageObj.src = imageSrc;

    function createCharSprite() {
        var sprite = new Kinetic.Sprite({
            x: posX,
            y: posY,
            image: imageObj,
            animation: 'idle',
            animations: animations,
            frameRate: 50,
            totalWidth: charWidth,
            index: 0
        });

        //// add the shape to the layer
        field.add(sprite);

        //// add the layer to the stage
        canvas.add(field);

        //// start sprite animation
        sprite.start();

        return sprite;
    }

    return createCharSprite();
}


function generateEnemies() {

}
