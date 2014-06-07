function drawStartPage() {
    var field = new Kinetic.Layer();

    var ninjaTitle = drawKineticText(270, 120, 'NINJAS', 42, 'Warnock Pro', 'yellowgreen', 380, 20, 'left');
    var vsTitle = drawKineticText(440, 120, 'vs', 42, 'Warnock Pro', 'red', 380, 20, 'left');
    var trollsTitle = drawKineticText(500, 120, 'TROLLS', 42, 'Warnock Pro', 'yellowgreen', 380, 20, 'left');
    ninjaTitle.setFontStyle('bold');
    var introText = drawKineticText(250, 180, 'Telerik Academy\nhas been attacked by vicious trolls. The mission to save it is entrusted to the Trainers.Choose the one to fight with them.', 24, 'Century Gothic', 'white', 460, 10, 'center');

    var introRectangle = drawKineticRect(230, 120, 'yellowgreen', 5, '#fff', 'black', 500, 220);
    introRectangle.setCornerRadius(10);

    var nikiText = drawKineticText(300, 360, 'Trainer Niki', 24, 'Calibri', 'white', 380, 20, 'left');

    var nikiRectangle = drawKineticRect(230, 360, '#fff', 5, "#fff", 'black', 140, 160);
    nikiRectangle.setCornerRadius(10);

    var donchoText = drawKineticText(300, 440, 'Trainer Doncho', 24, 'Calibri', '#555', 380, 20, 'left');

    var donchoRectangle = drawKineticRect(410, 360, '#fff', 5, '#ddd', 'black', 140, 160);
    donchoRectangle.setCornerRadius(10);

    var ivoText = drawKineticText(199, 200, 'Trainer Ivo', 24, 'Calibri', '#555', 380, 20, 'left');

    var ivoRectangle = drawKineticRect(590, 360, '#fff', 5, '#ddd', 'black', 140, 160);
    ivoRectangle.setCornerRadius(10);

    var nikiImage = new Image();
    nikiImage.onload = function () {
        var nikiImg = new Kinetic.Image({
            x: 245,
            y: 375,
            image: nikiImage,
            width: 110,
            height: 130
        });

        nikiImg.on('mouseover', function () {
            document.body.style.cursor = 'pointer';
        });

        nikiImg.on('mouseout', function () {
            document.body.style.cursor = 'default';
        });

        nikiImg.on('click', function () {
            removeIntro();
            //drawDojo();
            startGame('donchoSprite.png');
        });

        field.add(nikiImg);

        canvas.add(field);
    };

    var donchoImage = new Image();
    donchoImage.onload = function () {
        var donchoImg = new Kinetic.Image({
            x: 425,
            y: 375,
            image: donchoImage,
            width: 110,
            height: 130
        });

        donchoImg.on('mouseover', function () {
            document.body.style.cursor = 'pointer';
        });

        donchoImg.on('mouseout', function () {
            document.body.style.cursor = 'default';
        });

        donchoImg.on('click', function () {
            removeIntro();
            //drawDojo();
            startGame('donchoSprite.png');
        });

        field.add(donchoImg);

        canvas.add(field);
    };

    var ivoImage = new Image();
    ivoImage.onload = function () {
        var ivoImg = new Kinetic.Image({
            x: 605,
            y: 375,
            image: ivoImage,
            width: 110,
            height: 130
        });

        ivoImg.on('mouseover', function () {
            document.body.style.cursor = 'pointer';

        });

        ivoImg.on('mouseout', function () {
            document.body.style.cursor = 'default';
        });

        ivoImg.on('click', function () {
            removeIntro();
            //drawDojo();
            startGame('donchoSprite.png');
        });

        field.add(ivoImg);

        canvas.add(field);
    };

    nikiImage.src = 'trainerNiki.jpg';

    donchoImage.src = 'trainerDoncho.jpg';

    ivoImage.src = 'trainerIvo.jpg';

    var svg = document.getElementById('backgroundSvg');

    var rectangles = [nikiRectangle, donchoRectangle, ivoRectangle];

    for (var i = 0; i < rectangles.length; i++) {
        rectangles[i].on('mouseover', function () {
            document.body.style.cursor = 'pointer';
        });

        rectangles[i].on('mouseout', function () {
            document.body.style.cursor = 'default';
        });

        rectangles[i].on('click', function () {
            removeIntro();
            //drawDojo();
            startGame('donchoSprite.png');
        });
    }

    // add the shapes to the layer
    field.add(introRectangle);
    field.add(introText);
    field.add(nikiRectangle);
    field.add(ninjaTitle);
    field.add(vsTitle);
    field.add(trollsTitle);
    //field.add(nikiText);
    field.add(donchoRectangle);
    //field.add(donchoText);
    field.add(ivoRectangle);
    //field.add(ivoText);
    canvas.add(field);

    function removeIntro() {
        removeElement(svg);
        field.clear(0, 0, 1000, 700);
    }

    function removeElement(element) {
        var elementToRemove = element;
        elementToRemove.parentNode.removeChild(elementToRemove);
    }


    function drawKineticRect(x, y, stroke, strokeWidth, color, fill, width, height) {
        var rectangle = new Kinetic.Rect({
            x: x,
            y: y,
            stroke: stroke,
            strokeWidth: strokeWidth,
            color: color,
            fill: fill,
            width: width,
            height: height
        });

        return rectangle;
    }

    function drawKineticText(x, y, text, fontSize, fontFamily, fill, width, padding, align) {
        var kineticText = new Kinetic.Text({
            x: x,
            y: y,
            text: text,
            fontSize: fontSize,
            fontFamily: fontFamily,
            fill: fill,
            width: width,
            padding: padding,
            align: align
        });

        return kineticText;
    };
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

            if (currEnemy.attrs.x <= hero.attrs.x + 100) {
                woundEnemy();
            }
        }

        hero.afterFrame(2, function () {
            hero.setAnimation('idle');
        });
    }
    else {
        checkForEnemiesInProximity();
    }

    function checkForEnemiesInProximity() {
        for (var i = 0, len = enemies.length; i < len; i++) {
            var currEnemy = enemies[i];

            if (currEnemy.attrs.x <= hero.attrs.x + 100) {
                dealDamageToHero();
            }
        }
    }

    function dealDamageToHero() {
        if (hero.attrs.health > 0) {
            hero.attrs.health--;
        }
        else {
            hero.destroy();
        }
    }

    function woundEnemy() {
        if (currEnemy.attrs.health > 0) {
            currEnemy.attrs.health--;
        }
        else {
            enemies[i].destroy();
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
            health: charHealth,
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

function drawHeroHealthBar(width, height, xPos, yPos, outline, lifeColor, initialHeroHealth) {
    var group = new Kinetic.Group({
    });
    var healthOutline = new Kinetic.Rect({
        x: xPos,
        y: yPos,
        width: width,
        height: height,
        stroke: outline
    });

    var healthLine = new Kinetic.Line({
        points: [xPos, yPos + height / 2, xPos + (hero.attrs.health / initialHeroHealth) * width, yPos + height / 2],
        stroke: lifeColor,
        strokeWidth: 10
    });

    group.add(healthLine);
    group.add(healthOutline);

    field.add(group);
    canvas.add(field);

    return group;

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
    return loadChar(canvas.getWidth() - 70, canvas.getHeight() - 120, "http://www.html5canvastutorials.com/demos/assets/blob-sprite.png", animations, 70, 200, 30);
}
