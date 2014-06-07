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

    for (var i = 0; i < enemies.length; i++) {
        enemies[i].attrs.x -= gameSpeed / 2 * mod;

        if (enemies[i].attrs.x < hero.attrs.x + 70) {
            enemies[i].attrs.x = hero.attrs.x + 70;
        }
    }

    if (32 in keysDown) {
        hero.setAnimation('punch');
        
        for (var i = 0, len = enemies.length; i < len; i++) {
            var currEnemy = enemies[i];

            if (currEnemy.attrs.x <= hero.attrs.x + 70) {
                console.log("hit");
            }
        }

    hero.afterFrame(2, function () {
        hero.setAnimation('idle');
    });
}

    
}

function render() {
    //field.clear();
}

function loadChar(posX, posY, imageSrc, animations, charWidth, speed) {
    var imageObj = new Image()
    imageObj.src = imageSrc;

    function createCharSprite() {
        var sprite = new Kinetic.Sprite({
            x: posX,
            y: posY,
            image: imageObj,
            animation: 'idle',
            animations: animations,
            frameRate: speed,
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

function generateEnemy() {
    var animations = {
        idle: [{
            x: 2,
            y: 138,
            width: 74,
            height: 122
        }, {
            x: 76,
            y: 138,
            width: 84,
            height: 122
        }, {
            x: 346,
            y: 138,
            width: 120,
            height: 122
        }]
    };
    return loadChar(canvas.getWidth() - 70, canvas.getHeight() - 120, "http://www.html5canvastutorials.com/demos/assets/blob-sprite.png", animations, 70, 200);
}
