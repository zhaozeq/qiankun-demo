import { useState } from 'react';
import styles from './index.scss';

import Coder from 'src/utils/coder';
import TrainList from 'src/documents/2.basic-train';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.wrap}>
      {TrainList.map((o, i) => (
        <div className={styles.block} key={i}>
          <h3
            style={{ paddingTop: 20 }}
            onClick={() =>
              Promise.resolve().then(() => {
                console.log(count);
                setCount(count + 1);
                console.log(count);
                setCount(count + 1);
                console.log(count);
              })
            }
          >
            例子{i + 1}：{o.title}
          </h3>
          <Coder value={o.code} />
        </div>
      ))}
    </div>
  );
}

export default App;
