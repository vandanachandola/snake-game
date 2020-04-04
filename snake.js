class Snake {
    constructor(x, y, width, canvasWidth) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.speedPerSecond = 0;
        this.canvasWidth = canvasWidth;
    }

    render() {
        rect(this.x, this.y, this.width, this.width);
    }

    setDirection(dir) {
        this.direction = dir;
    }

    setSpeed(speedIn) {
        this.speedPerSecond = speedIn;
    }

    update(deltaTime) {
        this.move(deltaTime);
        this.wrap();
    }

    move(deltaTime) {
        switch (this.direction) {
            case direction.LEFT:
                this.x -= this.speedPerSecond * deltaTime;
                break;

            case direction.RIGHT:
                this.x += this.speedPerSecond * deltaTime;
                break;

            case direction.UP:
                this.y -= this.speedPerSecond * deltaTime;
                break;

            case direction.DOWN:
                this.y += this.speedPerSecond * deltaTime;
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