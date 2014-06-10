function createField(fieldName, fieldWidth, fieldHeight) {
    var field = new Kinetic.Stage({
        container: fieldName,
        width: fieldWidth,
        height: fieldHeight
    });

    return field;
}

function addKeyEventListeners(gameObject) {
    window.addEventListener('keydown', function (e) {
        // If Up or Down do nothing
        if ([38, 40].indexOf(e.keyCode) > -1) {
            e.preventDefault();
        }

        gameObject.keyPressed[e.keyCode] = true;
    });

    window.addEventListener('keyup', function (e) {
       gameObject.keyPressed[e.keyCode] = false;
    });
}

// both directions for the trainers' sprites are set and workng properly but had to put one in comments since I couldn't figure out how to change the direction
function heroAnimations() {
    var animations = {
        idle: [/*{
            x: 920,
            y: 0,
            width: 230,
            height: 200
        }, */{
            x: 0,
            y: 200,
            width: 230,
            height: 200
        }],
        punch: [/*{
            x: 690,
            y: 0,
            width: 230,
            height: 200
        }, {
            x: 460,
            y: 0,
            width: 230,
            height: 200
        }, {
            x: 230,
            y: 0,
            width: 230,
            height: 200
        }, {
            x: 0,
            y: 0,
            width: 230,
            height: 200
        }, */{
            x: 230,
            y: 200,
            width: 230,
            height: 200
        }, {
            x: 460,
            y: 200,
            width: 230,
            height: 200
        }, {
            x: 690,
            y: 200,
            width: 230,
            height: 200
        }, {
            x: 920,
            y: 200,
            width: 230,
            height: 200
        }]
    };

    return animations;
}

function enemyAnimations() {
    var animations = {
        idle: [{
            x: 0,
            y: 0,
            width: 230,
            height: 200
        }],
        punch: [{
            x: 230,
            y: 0,
            width: 230,
            height: 200
        }, {
            x: 460,
            y: 0,
            width: 230,
            height: 200
        }, {
            x: 690,
            y: 0,
            width: 230,
            height: 200
        }, {
            x: 920,
            y: 0,
            width: 230,
            height: 200
        }]
    };

    return animations;
}

// randomly picks which of the 2 sprites for the enemies will be loaded
function GetEnemySprite() {
    var randomNumber = Math.random(),
        numberToCheck = Math.round(randomNumber * 100),
        enemyStringSource;

    if (numberToCheck >= 2 && numberToCheck % 2 === 0) {
        enemyStringSource = 'images/idiot-troll-sprite-to-left.png';
    } else {
        enemyStringSource = 'images/fighting-troll-sprite-to-left.png';
    }

    return enemyStringSource;
}

// I've created a function for the enemyAnimations since the sprite for the trolls has just one direction and the one for the trainers has 2 directions now
function generateEnemy() {
    return new Character(game.field.getWidth(), game.getBottom(), /* game.enemieSprite*/ GetEnemySprite(), enemyAnimations(), /*heroAnimations(), */game.defaultEnemieHealth, game.heroWidth, game.mainLayer, game.field, game.frameSpeed)
}

function drawStartPage() {
    var svg = document.getElementById('backgroundSvg');
    var field = new Kinetic.Layer();

    var ninjaTitle = drawKineticText(270, 120, 'NINJAS', 42, 'Warnock Pro', 'yellowgreen', 380, 20, 'left');
    var vsTitle = drawKineticText(440, 120, 'vs', 42, 'Warnock Pro', 'red', 380, 20, 'left');
    var trollsTitle = drawKineticText(500, 120, 'TROLLS', 42, 'Warnock Pro', 'yellowgreen', 380, 20, 'left');
    ninjaTitle.setFontStyle('bold');
    var introText = drawKineticText(250, 180, 'Telerik Academy\nhas been attacked by vicious trolls. The mission to save it is entrusted to the Trainers.Choose the one to fight with them.', 24, 'Century Gothic', 'white', 460, 10, 'center');

    var introRectangle = drawKineticRect(230, 120, 'yellowgreen', 5, '#fff', 'black', 500, 220);
    introRectangle.setCornerRadius(10);

    //Niki
    //var nikiText = drawKineticText(300, 360, 'Trainer Niki', 24, 'Calibri', 'white', 380, 20, 'left');
    var nikiRectangle = drawKineticRect(230, 360, '#fff', 5, "#fff", 'black', 140, 160);
    nikiRectangle.setCornerRadius(10);
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
            nikiRectangle.attrs.stroke = "yellowgreen";
            field.draw();
        });

        nikiImg.on('mouseout', function () {
            document.body.style.cursor = 'default';
            nikiRectangle.attrs.stroke = "white";
            field.draw();
        });

        nikiImg.on('click', function () {
            removeIntro();
            field.destroy();
            startGame('images/nikiSprite.png');
        });

        field.add(nikiImg);

        canvas.add(field);
    };
    nikiImage.src = 'images/trainerNiki.jpg';

    //Doncho
    //var donchoText = drawKineticText(300, 440, 'Trainer Doncho', 24, 'Calibri', '#555', 380, 20, 'left');
    var donchoRectangle = drawKineticRect(410, 360, '#fff', 5, '#ddd', 'black', 140, 160);
    donchoRectangle.setCornerRadius(10);
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
            donchoRectangle.attrs.stroke = "yellowgreen";
            field.draw();
        });

        donchoImg.on('mouseout', function () {
            document.body.style.cursor = 'default';
            donchoRectangle.attrs.stroke = "white";
            field.draw();
        });

        donchoImg.on('click', function () {
            removeIntro();
            field.destroy();
            startGame('images/donchoSprite.png');
        });

        field.add(donchoImg);

        canvas.add(field);
    };
    donchoImage.src = 'images/trainerDoncho.jpg';

    //Ivo
    //var ivoText = drawKineticText(199, 200, 'Trainer Ivo', 24, 'Calibri', '#555', 380, 20, 'left');
    var ivoRectangle = drawKineticRect(590, 360, '#fff', 5, '#ddd', 'black', 140, 160);
    ivoRectangle.setCornerRadius(10);
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
            ivoRectangle.attrs.stroke = "yellowgreen";
            field.draw();

        });

        ivoImg.on('mouseout', function () {
            document.body.style.cursor = 'default';
            ivoRectangle.attrs.stroke = "white";
            field.draw();
        });

        ivoImg.on('click', function () {
            removeIntro();
            field.destroy();
            startGame('images/ivoSprite.png');
        });

        field.add(ivoImg);

        canvas.add(field);
    };

    ivoImage.src = 'images/trainerIvo.jpg';

    // Add the shapes to the layer
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
        element.outerHTML = "";
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