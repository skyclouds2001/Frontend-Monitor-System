class ResourceError {
  public readonly target: EventTarget;
  public readonly timeStamp: DOMHighResTimeStamp;
  public readonly type: string;

  constructor(event: ErrorEvent) {
    this.target = event.target as EventTarget;
    this.timeStamp = event.timeStamp;
    this.type = 'ResourceError';
  }
}

export default ResourceError
