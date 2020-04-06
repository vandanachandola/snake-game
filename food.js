class Food {
    constructor(xpos, ypos, width) {
        this.x = xpos;
        this.y = ypos;
        this.width = width;
    }

    render() {
        let c = color(255, 0, 0);
        noStroke();
        fill(c);
        rect(this.x, this.y, this.width, this.width);
    }
}