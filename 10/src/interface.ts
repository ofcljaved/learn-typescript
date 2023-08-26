//interface with class

interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

interface Story {
  createStory(): void;
}

class Instagram implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
}

class Youtube implements TakePhoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public shorts: string
  ) {}
  createStory(): void {
    console.log('story creating');
  }
}

/**Interface set a protocol of something
 * like here instagram and youtube who's implementing takePhoto must have
 * those properties defined in the TakePhoto
 * You can always have more property than interface but not less than that
 */
