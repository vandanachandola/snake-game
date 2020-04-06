class Food {
    constructor(xpos, ypos, width, canvasWidth) {
        this.x = xpos;
        this.y = ypos;
        this.width = width;
        this.canvasWidth = canvasWidth;
    }

    render() {
        let c = color(255, 0, 0);
        noStroke();
        fill(c);
        rect(this.x, this.y, this.width, this.width);
    }
}