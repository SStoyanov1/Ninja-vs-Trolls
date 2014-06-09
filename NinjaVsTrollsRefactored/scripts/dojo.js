function drawDojo() {
    var paper = Raphael(document.getElementById('svgSpot'), 1000, 700);

    var dojoFloor = paper.rect(0, 550, 1000, 150);
    dojoFloor.attr("fill", "lightgrey");
    dojoFloor.attr("stroke-width", 0);

    var dojoWall = paper.rect(0, 0, 1000, 550);
    dojoWall.attr("fill", "RGB(61, 37, 17)");
    dojoWall.attr("stroke", "black");
    dojoWall.attr("stroke-width", 2);

    var telerikSeenFromLeft = paper.image("images/telerik-left.png", 100, 100, 250, 210);
    var telerikSeenFromRight = paper.image("images/telerik-right.png", 650, 100, 250, 210);

    var dojoWindowLeft = paper.rect(100, 100, 250, 210);
    dojoWindowLeft.attr("fill", "");
    dojoWindowLeft.attr("stroke", "black");
    dojoWindowLeft.attr("stroke-width", 20);

    var leftBarH = paper.rect(220, 100, 10, 200);
    leftBarH.attr("fill", "black");

    var rightBarH = paper.rect(770, 100, 10, 200);
    rightBarH.attr("fill", "black");

    var leftBarV = paper.rect(110, 200, 240, 10);
    leftBarV.attr("fill", "black");

    var rightBarV = paper.rect(650, 200, 240, 10);
    rightBarV.attr("fill", "black");

    var dojoWindowRight = paper.rect(650, 100, 250, 210);
    dojoWindowRight.attr("fill", "");
    dojoWindowRight.attr("stroke", "black");
    dojoWindowRight.attr("stroke-width", 20);

    var dojoSenseiFrame = paper.rect(400, 50, 200, 100);
    dojoSenseiFrame.attr("fill", "purple");
    dojoSenseiFrame.attr("stroke", "white");
    dojoSenseiFrame.attr("stroke-width", 2);

    var sensei = paper.image("images/super_ninja_for_frame.png", 400, 50, 100, 90);
    var shurikenOne = paper.image("images/shuriken.png", 490, 70, 40, 40);
    shurikenOne.attr({ opacity: 0.2 });
    var shurikenTwo = paper.image("images/shuriken.png", 520, 90, 40, 40);
    shurikenTwo.attr({ opacity: 0.4 });
    var shurikenAnimate = paper.image("images/shuriken.png", 550, 110, 40, 40);
    shurikenAnimate.attr({ opacity: 0.6 });

    var degree = "r360";
    var spin = Raphael.animation({
        transform: degree
    }, 5000).repeat(Infinity);
    shurikenAnimate.animate(spin);

    var windowOpacity = 0.4;

    var dojoLeftWindowsUL = paper.rect(110, 110, 110, 90);
    dojoLeftWindowsUL.attr("fill", "white");
    dojoLeftWindowsUL.attr("stroke-width", 0);
    dojoLeftWindowsUL.attr({ opacity: windowOpacity });

    var dojoLeftWindowsDL = paper.rect(110, 210, 110, 90);
    dojoLeftWindowsDL.attr("fill", "white");
    dojoLeftWindowsDL.attr("stroke-width", 0);
    dojoLeftWindowsDL.attr({ opacity: windowOpacity });

    var dojoLeftWindowsUR = paper.rect(230, 110, 110, 90);
    dojoLeftWindowsUR.attr("fill", "white");
    dojoLeftWindowsUR.attr("stroke-width", 0);
    dojoLeftWindowsUR.attr({ opacity: windowOpacity });

    var dojoLeftWindowsUL = paper.rect(230, 210, 110, 90);
    dojoLeftWindowsUL.attr("fill", "white");
    dojoLeftWindowsUL.attr("stroke-width", 0);
    dojoLeftWindowsUL.attr({ opacity: windowOpacity });

    var dojoRightWindowsUL = paper.rect(660, 110, 110, 90);
    dojoRightWindowsUL.attr("fill", "white");
    dojoRightWindowsUL.attr("stroke-width", 0);
    dojoRightWindowsUL.attr({ opacity: windowOpacity });

    var dojoRightWindowsDL = paper.rect(660, 210, 110, 90);
    dojoRightWindowsDL.attr("fill", "white");
    dojoRightWindowsDL.attr("stroke-width", 0);
    dojoRightWindowsDL.attr({ opacity: windowOpacity });

    var dojoRightWindowsUR = paper.rect(780, 110, 110, 90);
    dojoRightWindowsUR.attr("fill", "white");
    dojoRightWindowsUR.attr("stroke-width", 0);
    dojoRightWindowsUR.attr({ opacity: windowOpacity });

    var dojoRightWindowsUL = paper.rect(780, 210, 110, 90);
    dojoRightWindowsUL.attr("fill", "white");
    dojoRightWindowsUL.attr("stroke-width", 0);
    dojoRightWindowsUL.attr({ opacity: windowOpacity });

    var flagLeft = paper.rect(410, 175, 80, 175);
    flagLeft.attr("fill", "yellowgreen");
    flagLeft.attr("stroke", "white");

    var flagRight = paper.rect(510, 175, 80, 175);
    flagRight.attr("fill", "yellowgreen");
    flagRight.attr("stroke", "white");

    var textLeftFlatA = paper.text(450, 210, "が");
    textLeftFlatA.attr("font-size", 50);
    textLeftFlatA.attr("fill", "white");

    var textLeftFlatB = paper.text(450, 260, "ぎ");
    textLeftFlatB.attr("font-size", 50);
    textLeftFlatB.attr("fill", "white");

    var textLeftFlatC = paper.text(450, 310, "ぼ");
    textLeftFlatC.attr("font-size", 50);
    textLeftFlatC.attr("fill", "white");

    var textRightFlatA = paper.text(550, 210, "ぷ");
    textRightFlatA.attr("font-size", 50);
    textRightFlatA.attr("fill", "white");

    var textRightFlatB = paper.text(550, 260, "す");
    textRightFlatB.attr("font-size", 50);
    textRightFlatB.attr("fill", "white");

    var textRightFlatC = paper.text(550, 310, "キ");
    textRightFlatC.attr("font-size", 50);
    textRightFlatC.attr("fill", "white");

    var reverse = false;
    var maskedHeadLeft = paper.image("images/headone.png", 250, 250, 50, 50).animate({ transform: "r-7200,220,200" }, 500000);
    maskedHeadLeft.attr({ opacity: 0.5 });

    var maskedHeadRight = paper.image("images/headone.png", 770, 250, 50, 50).animate({ transform: "r7200,770,200" }, 500000);
    maskedHeadRight.attr({ opacity: 0.5 });

    var tvSet = paper.image("images/tv.png", 350, 360, 300, 190);
    var tvAnimation = paper.image("images/animation.gif", 368, 377, 265, 133);
    tvAnimation.attr({ opacity: 0.3 });
}