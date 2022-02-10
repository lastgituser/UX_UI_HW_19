let cloudsDraw = (p) => {
    p.setup = function() {
        var cnv = p.createCanvas(p.windowWidth, p.windowHeight);
        cnv.position(0, 0);
        cnv.style("display", "block");
        cnv.style("z-index", "-2");
        p.colorMode(p.HSB);
        p.frameRate(1);
    }

    p.windowResized = function() {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    }

    p.draw = function() {
        p.background(255, 255, 255);
        p.noStroke();
        for(var i = 0; i <= p.windowWidth; i+=5) {
            for( var j =0 ; j <= p.windowHeight; j +=5){			
                var sat = 50 * p.noise(i / 100, j / 100);
                p.fill(210, sat, 100);
                p.circle(i, j, 10);
		    }
	    }
    }
}

export { cloudsDraw }