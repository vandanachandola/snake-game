class Snake {
    constructor(x, y, xSpeed, ySpeed, width, canvasWidth) {
        this.x = x;
        this.y = y;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.width = width;
        this.scale = width;
        this.canvasWidth = canvasWidth;
        this.length = 1;
        this.tail = [];
    }

    render() {
        let c = color(255, 255, 255);
        noStroke();
        fill(c);
        for (let i = 0; i < this.tail.length; ++i) {
            rect(this.tail[i].x, this.tail[i].y, this.scale, this.scale);
        }
        rect(this.x, this.y, this.scale, this.scale);
    }

    setDirection(dir) {
        this.direction = dir;
    }

    update() {
        this.move();
        this.wrap();
        this.updateTail();
    }

    updateTail() {
        if (this.length === this.tail.length) {
            for (let i = 0; i < this.tail.length - 1; ++i) {
                this.tail[i] = this.tail[i + 1];
            }
        }
        this.tail[this.length - 1] = createVector(this.x, this.y);
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

    eat(food) {
        let snake_x = this.x;
        let snake_y = this.y;
        if (snake_x == food.x && snake_y == food.y) {
            ++this.length;
            return true;
        }
        return false;
    }
}