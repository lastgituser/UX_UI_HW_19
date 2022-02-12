let starsDraw = (p) => {

    function drawStars() {
        p.background(210, 100, 36);
        for (let i = 0; i < 50; i++) {
            stars[i].draw();
        }
        for (let i = 0; i < 50; i++) {
            let rand = p.random([0, 1]);
            if (rand) {
                stars[i].twinkle();
            }
        }
    }

    var stars = [];

    function Star() {
        this.x = p.random(p.windowWidth);
        this.y = p.random(p.windowHeight * 0.6);
        this.w = 2;
        this.h = 2;
    }

    Star.prototype.twinkle = function() {
        if (this.w == 2) {
            this.w = 3;
            this.h = 3;
        } else {
            this.w = 2;
            this.h = 2;
        }
    }

    Star.prototype.draw = function() {
        p.colorMode(p.HSB);
        p.noStroke();
        p.fill(0, 0, 94);
        p.ellipse(this.x, this.y, this.w, this.h);
    }

    p.setup = function() {
        var cnv = p.createCanvas(p.windowWidth, p.windowHeight);
        cnv.position(0, 0);
        cnv.style("display", "block");
        cnv.style("position", "fixed");
        cnv.style("z-index", "-2");
        for (var i = 0; i < 50; i++) {
            stars.push(new Star());
        }
        p.colorMode(p.HSB);
        p.background(210, 100, 36);
        p.frameRate(1);
    }

    p.windowResized = function() {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    }

    p.draw = function() {
        drawStars();
    }

}

export { starsDraw };