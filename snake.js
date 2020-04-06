class Snake {
    constructor(x, y, xSpeed, ySpeed, width, canvasWidth) {
        this.x = x;
        this.y = y;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.width = width;
        this.scale = width;
        this.canvasWidth = canvasWidth;
    }

    render() {
        let c = color(255, 255, 255);
        noStroke();
        fill(c);
        rect(this.x, this.y, this.scale, this.scale);
    }

    setDirection(dir) {
        this.direction = dir;
    }

    update() {
        this.move();
        this.wrap();
    }

    move() {
        switch (this.direction) {
            case direction.LEFT:
                this.x -= this.xSpeed * this.scale;
                break;

            case direction.RIGHT:
                this.x += this.xSpeed * this.scale;
                break;

            case direction.UP:
                this.y -= this.ySpeed * this.scale;
                break;

            case direction.DOWN:
                this.y += this.ySpeed * this.scale;
                break;

            default: break;
        }
    }

    wrap() {
        let maxLimit = this.canvasWidth - this.width;
        let minLimit = 0;

        if (this.x > maxLimit) {
            this.x = minLimit;
        }
        else if (this.x < minLimit) {
            this.x = maxLimit;
        }
        else if (this.y > maxLimit) {
            this.y = minLimit;
        }
        else if (this.y < minLimit) {
            this.y = maxLimit;
        }
    }
}