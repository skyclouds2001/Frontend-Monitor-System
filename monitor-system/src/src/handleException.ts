import JsError from "@/model/JsError";
import ResourceError from "@/model/ResourceError";

/**
 * 捕获并处理全局 JS & 资源 错误
 * @param event 错误事件
 */
const handleGlobalJsError = (event: ErrorEvent) => {

  if(event.target instanceof Window) {
    const e: JsError = new JsError(event)

    console.log(e);
  }
  if(event.target instanceof HTMLElement) {
    const e: ResourceError = new ResourceError(event);

    console.log(e);
  }
}

/**
 * 捕获并抛出全局 UnhandledRejectionError 错误
 * @param event 未捕获的 PromiseRejection 事件
 */
const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
  throw event.reason;
}

const initExceptionMonitor = (global: Window) => {
  global.addEventListener('error', handleGlobalJsError, true);
  global.addEventListener('unhandledrejection', handleUnhandledRejection);
}

export default initExceptionMonitor
