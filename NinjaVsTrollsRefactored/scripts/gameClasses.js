function Game() {
    that = this; // THREE F@CKING HOURS F@CKING JS I HATE THAT SH@T
    that.field = {};
    that.mainLayer = {};
    that.currentTime = Date.now();
    that.speed = 300;
    that.frameSpeed = 100;
    that.hero = {};
    that.enemies = [];
    that.difficultyLevel = 100;
    that.maxDifficulty = 30; //Less = Harder
    that.keyPressed = {};
    that.defaultHeroHealth = 1000;
    that.defaultEnemieHealth = 10;
    that.enemieSprite = "images/blob.png";
    that.heroSprite = "images/blob.png";
    that.heroWidth = 100;
    that.spriteHeight = 200;
    that.heroAlive = true;
    that.killCount = 0;
    that.framesCount = 0;
    that.generatedEnemies = 0;
    that.heroDamage = 50;

    that.getCenter = function () {
        return that.field.getWidth() / 2
    };

    that.getBottom = function () {
        return that.field.getHeight() - that.spriteHeight;
    };

    that.updateGame = function () {
        // Set speed modifier for smooth fps
        var modifier = (Date.now() - that.currentTime) / 1000;

        // Move Left
        if (that.keyPressed[37]) { // 37 = left
            //that.hero.character.setAnimation('left');
            that.hero.setX(that.hero.getX() - that.speed * modifier);

            if (that.hero.getX() < 0) {
                that.hero.setX(0);
            }
        }

        // Move Right
        if (that.keyPressed[39]) { // 39 = right
            //that.hero.character.setAnimation('right');
            that.hero.setX(that.hero.getX() + that.speed * modifier);

            if (that.hero.getX() > that.field.getWidth() - that.hero.width) {
                that.hero.setX(that.field.getWidth() - that.hero.width);
            }
        }

        // Hit
        if (that.keyPressed[32]) { // 32 = space/hit
            that.hero.character.setAnimation('punch');

            // Hit enemy if possible
            for (var i = 0; i < that.enemies.length; i++) {
                var currEnemy = that.enemies[i];

                if (currEnemy.getX() <= that.hero.getX() + that.hero.width) {
                    hitEnemy(i);
                }
            }

            that.hero.character.afterFrame(3, function () {
                that.hero.character.setAnimation('right');
            });
        }

        // Hit Hero if possible
        for (var i = 0; i < that.enemies.length; i++) {
            var currEnemy = that.enemies[i];

            if (currEnemy.getX() <= that.hero.getX() + that.hero.width) {
                //If the enemy is close he will start punching
                currEnemy.character.setAnimation("punch");
                hitHero();
            } else {
                //Else normal walking
                currEnemy.character.setAnimation("right");
            }
        }

        // Update all enemies
        for (var i = 0; i < that.enemies.length; i++) {
            var enemyToMove = that.enemies[i];

            enemyToMove.setX(enemyToMove.getX() - that.speed / 2 * modifier);

            if (enemyToMove.getX() <= that.hero.getX() + that.hero.width) {
                enemyToMove.setX(that.hero.getX() + that.hero.width);
            }
        }

        function hitHero() {
            if (that.hero.health > 0) {
                that.hero.health--;
            }
            else {
                that.hero.character.destroy();
                that.heroAlive = false;
            }
        }

        function hitEnemy(enemyIndex) {
            var currEnemy = that.enemies[enemyIndex];

            if (currEnemy.health > 0) {
                currEnemy.health -= that.heroDamage;
            }
            else {
                that.killCount++;
                currEnemy.character.destroy();
                that.enemies.splice(enemyIndex, 1);
            }
        }

        this.currentTime = Date.now();
    }

    that.increaseDifficulty = function () {
        if (that.framesCount === that.difficultyLevel) {
            that.enemies.push(generateEnemy());
            that.generatedEnemies++;
            that.framesCount = 0;

            if (that.generatedEnemies === 5) {
                that.difficultyLevel -= 10;

                if (that.difficultyLevel <= that.maxDifficulty) {
                    that.difficultyLevel = that.maxDifficulty;
                }
                that.generatedEnemies = 0;
            }
        }

        that.framesCount++;
    }

    that.destroyAllEnemies = function () {
        for (var i = 0; i < that.enemies.length; i++) {
            var enemyToRemove = that.enemies[i];

            enemyToRemove.character.destroy();
            //that.enemies.splice(i, 1);
        }
    }
}

function Character(posX, posY, spriteSrc, animationsObj, characterHealth, characterWidth, layer, stage, animationSpeed) {
    
    this.health = characterHealth;
    this.width = characterWidth;

    this.getX = function () {
        return this.character.attrs.x;
    }

    this.setX = function (pos) {
        this.character.attrs.x = pos;
    }

    function createCharacterSprite() {
        imageObj = new Image();
        imageObj.src = spriteSrc;

        var currentSprite = new Kinetic.Sprite({
            x: posX,
            y: posY,
            image: imageObj,
            animation: 'right',
            animations: animationsObj,
            frameRate: animationSpeed
        });

        //// add the shape to the layer
        layer.add(currentSprite);

        //// add the layer to the stage
        stage.add(layer);

        //// start sprite animation
        currentSprite.start();

        return currentSprite;
    }
    this.character = createCharacterSprite();
}