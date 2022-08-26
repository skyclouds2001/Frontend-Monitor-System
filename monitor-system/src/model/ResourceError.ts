class ResourceError {
  public readonly target: EventTarget;
  public readonly timeStamp: DOMHighResTimeStamp;
  public readonly type: string;

  constructor(event: ErrorEvent) {
    this.target = event.target as EventTarget;
    this.timeStamp = event.timeStamp;
    this.type = ResourceError.getErrorType(event);
  }

  public static getErrorType = (event: ErrorEvent) => {
    const target = event.target as EventTarget;
    let type = 'UnknownResourceError';
    if(target instanceof HTMLAudioElement) type = 'AudioResourceError';
    if(target instanceof HTMLVideoElement) type = 'VideoResourceError';
    if(target instanceof HTMLImageElement) type = 'ImageResourceError';
    return type;
  }
}

export default ResourceError
