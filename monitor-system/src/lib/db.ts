import IndexDBWrapper from 'indexdbwrapper';
import type DBWrapper from 'indexdbwrapper';

const db: DBWrapper = new IndexDBWrapper('monitor-system', 1);
db.open();

export default db;
