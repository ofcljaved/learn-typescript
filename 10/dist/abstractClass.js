"use strict";
class TakePhoto {
    constructor(camerMode, filter) {
        this.camerMode = camerMode;
        this.filter = filter;
    }
    getcount() {
        return 8;
    }
}
const user = new TakePhoto('test', 'test'); // see we can't create object from abstract class
class Instagra extends TakePhoto {
    constructor(camerMode, filter, burst) {
        super(camerMode, filter);
        this.camerMode = camerMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log('Sepia');
    }
}
const instaUser = new Instagra('test', 'test', 3);
instaUser.getcount();
/**The difference between interface and abstract class is that we can't define method in interface while we can do it in the abstract classs and we can't create object with abrstract class only extends it */
