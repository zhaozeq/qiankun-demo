import { useState } from 'react';
import { MicroApp } from 'umi';
import style from './index.css';

export default function () {
  const [microAppState, setState] = useState('Hello');

  return (
    <div className={style.container}>
      <p>
        如果在使用中遇到任何问题，请在
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/umijs/umi/issues/new/choose"
        >
          此处
        </a>
        提Issue
      </p>

      {/* <MicroApp testProp1={microAppState} name="app1" /> */}
    </div>
  );
}
