field = new Kinetic.Layer();

function drawStartPage() {
    var complexText = new Kinetic.Text({
        x: 300,
        y: 120,
        text: 'NINJA vs TROLLS\n\nTelerik Academy has been attacked by vicious trolls. The mission to save it is entrusted to the Trainers. Choose the one to fight with them.',
        fontSize: 24,
        fontFamily: 'Calibri',
        fill: 'white',
        width: 380,
        padding: 20,
        align: 'center'
    });

    var rect = new Kinetic.Rect({
        x: 300,
        y: 120,
        stroke: 'yellowgreen',
        strokeWidth: 5,
        color: '#fff',
        fill: 'black',
        width: 380,
        height: 220,
        shadowColor: 'white',
        shadowBlur: 5,
        shadowOffset: { x: 10, y: 10 },
        shadowOpacity: 0.2,
        cornerRadius: 10
    });

    var nikiText = new Kinetic.Text({
        x: 300,
        y: 360,
        text: 'Trainer Niki',
        fontSize: 24,
        fontFamily: 'Calibri',
        fill: 'white',
        width: 380,
        padding: 20,
        align: 'left'
    });

    var trainerNiki = new Kinetic.Rect({
        x: 300,
        y: 360,
        stroke: 'blue',
        strokeWidth: 5,
        fill: '#ddd',
        width: 380,
        height: 60,
        shadowColor: 'black',
        shadowBlur: 10,
        shadowOffset: { x: 10, y: 10 },
        shadowOpacity: 0.2,
        cornerRadius: 10
    });

    var donchoText = new Kinetic.Text({
        x: 300,
        y: 440,
        text: 'Trainer Doncho',
        fontSize: 24,
        fontFamily: 'Calibri',
        fill: '#555',
        width: 380,
        padding: 20,
        align: 'left'
    });

    var trainerDoncho = new Kinetic.Rect({
        x: 300,
        y: 440,
        stroke: 'blue',
        strokeWidth: 5,
        fill: '#ddd',
        width: 380,
        height: 60,
        shadowColor: 'black',
        shadowBlur: 10,
        shadowOffset: { x: 10, y: 10 },
        shadowOpacity: 0.2,
        cornerRadius: 10
    });

        var ivoText = new Kinetic.Text({
        x: 300,
        y: 520,
        text: 'Trainer Ivo',
        fontSize: 24,
        fontFamily: 'Calibri',
        fill: '#555',
        width: 380,
        padding: 20,
        align: 'left'
    });

    var trainerIvo = new Kinetic.Rect({
        x: 300,
        y: 520,
        stroke: 'blue',
        strokeWidth: 5,
        fill: '#ddd',
        width: 380,
        height: 60,
        shadowColor: 'black',
        shadowBlur: 10,
        shadowOffset: { x: 10, y: 10 },
        shadowOpacity: 0.2,
        cornerRadius: 10
    });

    var svg = document.getElementById('backgroundSvg');

    donchoText.on('click', function () {
        removeElement(svg);
        //drawDojo();
        startGame('donchoSprite.png');
    });

    // add the shapes to the layer
    field.add(rect);
    field.add(complexText);
    field.add(trainerNiki);
    field.add(nikiText);
    field.add(trainerDoncho);
    field.add(donchoText);
    field.add(trainerIvo);
    field.add(ivoText);
    canvas.add(field);

    function removeElement(element) {
        var elementToRemove = element;
        elementToRemove.parentNode.removeChild(elementToRemove);
    }
}

function drawBackground() {
    var svg = document.getElementById('backgroundSvg');
    svg.style.display = 'block';
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
                woundEnemy();
            }
        }

    hero.afterFrame(2, function () {
        hero.setAnimation('idle');
    });
}
    function woundEnemy() {
        if (currEnemy.attrs.health > 0) {
            currEnemy.attrs.health--;
        }
        else {
            enemies[i].destroy();
            //enemies.splice(i, 1);
        }
    }
    
}

function render() {
    //field.clear();
}

function loadChar(posX, posY, imageSrc, animations, charWidth, speed, charHealth) {
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
            health:charHealth,
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
    return loadChar(canvas.getWidth() - 70, canvas.getHeight() - 120, "http://www.html5canvastutorials.com/demos/assets/blob-sprite.png", animations, 70, 200,50);
}
