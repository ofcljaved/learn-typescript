"use strict";
//interface with class
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class Youtube {
    constructor(cameraMode, filter, burst, shorts) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.shorts = shorts;
    }
    createStory() {
        console.log('story creating');
    }
}
/**Interface set a protocol of something
 * like here instagram and youtube who's implementing takePhoto must have
 * those properties defined in the TakePhoto
 * You can always have more property than interface but not less than that
 */
