/**
 * JavaScript 错误事件上报类型
 */
class JsError {
  public readonly colno: number;
  public readonly error: Error;
  public readonly filename: string;
  public readonly lineno: number;
  public readonly message: string;
  public readonly timeStamp: DOMHighResTimeStamp;
  public readonly type: string;

  constructor(event: ErrorEvent) {
    this.colno = event.colno;
    this.lineno = event.lineno;
    this.filename = event.filename;
    this.message = event.message;
    this.error = event.error
    this.timeStamp = event.timeStamp
    this.type = JsError.getErrorType(event)
  }

  /**
   * 从错误事件中提取错误类型的字符串
   * @param event 错误事件
   */
  static getErrorType (event: ErrorEvent) {
      let type: string;
      if(/SyntaxError/.test(event.message)) type = 'SyntaxError';
      else if(/Uncaught ReferenceError/.test(event.message)) type = 'Uncaught ReferenceError';
      else if(/RangeError/.test(event.message)) type = 'RangeError';
      else if(/TypeError/.test(event.message)) type = 'TypeError';
      else if(/URIError/.test(event.message)) type = 'URIError';
      else if(/EvalError/.test(event.message)) type = 'EvalError';
      else if(/Network Error/.test(event.message)) type = 'NetworkError';
      else type = 'Error'
      return type;
  }
}

export default JsError
