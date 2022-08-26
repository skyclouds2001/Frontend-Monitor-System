import JsError from "@/model/JsError";
import ResourceError from "@/model/ResourceError";
import { postRecord } from "@/api/postRecord";

/**
 * 捕获并处理全局 JS & 资源 错误
 * @param event 错误事件
 */
const handleGlobalJsError = async (event: ErrorEvent) => {

  if ((event.error as any)?.isUnWatch) { return }

  if(event.target instanceof Window) {
    const e = new JsError(event)

    console.log(e);
    const res = await postRecord(e, 1);
    console.log(res);
  }
  if(event.target instanceof HTMLElement) {
    const e = new ResourceError(event);

    console.log(e);
    const res = await postRecord(e, 2);
    console.log(res);
  }
}

/**
 * 捕获并抛出全局 UnhandledRejectionError 错误
 * @param event 未捕获的 PromiseRejection 事件
 */
const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
  throw event.reason;
}

const initExceptionMonitor = () => {
  window.addEventListener('error', handleGlobalJsError, true);
  window.addEventListener('unhandledrejection', handleUnhandledRejection);
}

export default initExceptionMonitor
