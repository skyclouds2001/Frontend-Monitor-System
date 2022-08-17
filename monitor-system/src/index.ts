'use strict';

import initExceptionMonitor from '@/src/handleException';
// import instance from '@/lib/request'

(function MonitorSystem () {
  'use strict';

  if(!(Window && window && window instanceof Window)) {
    throw new Error('Invalid global!');
  }

  initExceptionMonitor(window)

})()

async function test () {
  // document.body.innerHTML = '<img src="1a" />';
  // eval('var 1');
  // await instance.get('/34')
}

test();
