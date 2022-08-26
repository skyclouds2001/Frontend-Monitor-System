const getEnv = () => {
  return {
    userAgent: window.navigator.userAgent,
    platform: window.navigator.platform,
    language: window.navigator.language,
    url: window.location.href,
    net: (window.navigator.connection as any).effectiveType,
    screenW: window.screen.width,
    screenH: window.screen.height,
    cookieEnabled: window.navigator.cookieEnabled,
    plugins: navigator.plugins,
    mimeTypes: navigator.mimeTypes,
    appName: navigator.appName,
    appVersion: navigator.appVersion,
  }
}

const env = getEnv()

export default env;
