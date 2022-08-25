'use strict';

import test from '@/lib/test'
import env from '@/src/handleEnv';
import initExceptionMonitor from '@/src/handleException';
import { postAppInfo } from '@/api/postAppInfo';

window.addEventListener('load', function MonitorSystem () {
  'use strict';

  if(!(Window && window && window instanceof Window)) {
    throw new Error('Invalid running environment!');
  }

  postAppInfo(env).then(result => result.success ? undefined : console.error(result)).catch(error => console.error(error));

  initExceptionMonitor();

  test();

})
