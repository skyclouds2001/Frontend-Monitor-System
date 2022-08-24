'use strict';

import test from '@/lib/test'
import env from '@/src/handleEnv';
import initExceptionMonitor from '@/src/handleException';

window.addEventListener('load', function MonitorSystem () {
  'use strict';

  if(!(Window && window && window instanceof Window)) {
    throw new Error('Invalid running environment!');
  }

  console.log(env);

  initExceptionMonitor();

  test();

})
