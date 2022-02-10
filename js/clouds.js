let cloudsDraw = (p) => {

    function drawCloudBack() {
        p.noStroke();
        for(var i = 0; i <= p.windowWidth; i+=10) {
            for( var j =0 ; j <= p.windowHeight; j += 10){			
                var sat = 50 * p.noise(i / 100, j / 100);
                p.fill(210, sat, 100);
                p.circle(i, j, 20, 20);
		    }
	    }
    }

    let clouds = [];

    function Cloud() {
        this.x = p.random(p.windowWidth);
        this.y = p.random(p.windowHeight * 0.4) + p.windowHeight * 0.1;
    }

    Cloud.prototype.draw = function() {
        p.noStroke();
        p.fill(185, 21, 89);
        p.ellipse(this.x, this.y, 50, 50);
        p.ellipse(this.x + 40, this.y - 10, 70, 70);
        p.ellipse(this.x + 40 + 60, this.y - 10 - 10, 90, 90);
        p.ellipse(this.x + 40 + 60 + 60, this.y, 50, 50);
        p.rect(this.x, this.y, 160, 25);
    }

    function setupClouds() {
        for (let i = 0; i < 5; i++) {
            clouds.push(new Cloud());
        }
    }

    function drawClouds() {
        for (let i = 0; i < 5; i++) {
            if (clouds.x === p.windowWidth) {
                clouds.y = p.random(p.windowHeight * 0.4) + p.windowHeight * 0.1;
            }
            let speed = 5;
            clouds[i].x = (clouds[i].x + speed) % p.windowWidth;
            clouds[i].draw();
        }
    }

    p.setup = function() {
        var cnv = p.createCanvas(p.windowWidth, p.windowHeight);
        cnv.position(0, 0);
        cnv.style("display", "block");
        cnv.style("z-index", "-2");
        p.colorMode(p.HSB);
        p.frameRate(20);
        p.background(255, 0, 100);
        setupClouds();
    }

    p.windowResized = function() {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    }

    p.draw = function() {
        p.background(255, 0, 100);
        drawClouds();
    }
}

export { cloudsDraw }