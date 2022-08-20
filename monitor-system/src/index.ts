'use strict';

import env from '@/src/handleEnv';
import initExceptionMonitor from '@/src/handleException';
import initPerformanceMonitor from '@/src/handlePerformance';

window.addEventListener('load', function MonitorSystem () {
  'use strict';

  if(!(Window && window && window instanceof Window)) {
    throw new Error('Invalid running environment!');
  }

  console.log(env);

  initExceptionMonitor();
  initPerformanceMonitor();

  async function test () {
    // document.body.innerHTML = '<img src="1a" />';
    // eval('var 1');
    // await instance.get('/34')
  }

  test();

})
