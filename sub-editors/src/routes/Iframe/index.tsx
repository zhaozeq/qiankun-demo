//@ts-nocheck
import React from 'react';

const tf = require('@tensorflow/tfjs');

function addListener(node: EventTarget, type: string, callback: any) {
  node.addEventListener(type, callback);
  return {
    destroy() {
      node.removeEventListener(type, callback);
    },
  };
}

class Iframe extends React.Component {
  listener: { destroy: () => void } | undefined;
  componentDidMount = () => {
    this.listener = addListener(window, 'message', (e: MessageEvent) => {
      let result = '';
      if (typeof e.data !== 'string') return; // 非字符串不处理
      try {
        result = eval(e.data);
      } catch (e) {
        result = 'eval() threw an exception:' + e.message;
      }
      if (result) {
        try {
          console.log(result);
        } catch (e) {
          console.log(e);
        }
      }
    });
  };

  componentWillUnmount = () => this.listener?.destroy();

  render() {
    return (
      <iframe
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-downloads"
        title="sandbox"
        id="sandbox"
        style={{ display: 'none' }}
      ></iframe>
    );
  }
}

export default Iframe;

/**
 * allow
  加速器
  环境光源感测器
  自动播放
  摄像功能
  加密媒体信息
  全屏功能
  地理定位
  陀螺仪
  延迟加载
  麦克风
  Midi
  支付请求
  画中画(Picture-in-picture)
  扬声器
  USB
  VR / XR
 */
