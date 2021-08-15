import React from 'react';
import styles from './index.less';

import Coder from '@/utils/coder';
import * as Doc from '@/documents/1.basic-data';

class App extends React.Component {
  state = { count: 0 };
  componentDidMount() {
    Promise.resolve().then(() => {
      console.log(this.state.count);
      this.setState({ count: this.state.count + 1 });
      console.log(this.state.count);
      this.setState({ count: this.state.count + 1 });
      console.log(this.state.count);
    });
  }
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
