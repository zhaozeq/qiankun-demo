import React, { useState } from 'react';
import { Button } from 'antd';
import { Controlled as CodeMirror } from 'react-codemirror2';
import styles from './index.less';

require('codemirror/mode/javascript/javascript');

type CoderType = {
  value: string;
};

export default function Coder({ value }: CoderType) {
  const [data, setData] = useState(value);

  return (
    <div className={styles.coder}>
      <Button
        size="small"
        type="primary"
        onClick={() => {
          window.postMessage(data, window.location.origin + '/iframe');
        }}
      >
        运行
      </Button>
      <CodeMirror
        value={data}
        options={{
          mode: 'javascript',
          theme: 'darcula',
          lineNumbers: true,
        }}
        // onBeforeChange={(editor, data, value) => {
        //   setData(value);
        // }}
        onChange={(editor, data, value) => {
          setData(value);
        }}
      />
    </div>
  );
}
