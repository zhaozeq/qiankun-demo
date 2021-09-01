import { Component } from 'react';
import styles from './index.scss';

import Coder from 'src/utils/coder/index';
import * as Doc from 'src/documents/1.basic-data';

class App extends Component {
  state = { count: 0 };
  render() {
    return (
      <div className={styles.wrap}>
        <div className={styles.block}>
          <h3 style={{ paddingTop: 20 }}>常量</h3>
          <Coder value={Doc.scalar} />
          <Coder value={Doc.tensor2d} />
          <Coder value={Doc.zeros} />
          <Coder value={Doc.ones} />
        </div>
        <div className={styles.block}>
          <h3 style={{ paddingTop: 20 }}>变量</h3>
          <Coder value={Doc.scalar} />
          <Coder value={Doc.tensor2d} />
          <Coder value={Doc.zeros} />
          <Coder value={Doc.ones} />
        </div>
      </div>
    );
  }
}

export default App;
