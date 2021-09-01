const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);  // （Cumulative Layout Shift）累计位移偏移
      getFID(onPerfEntry); // (First Input Delay) 首次输入延迟 <100 300>
      getFCP(onPerfEntry); // (First Content Paint) 首次内容绘制  <500 2000> 
      getLCP(onPerfEntry); // (Largest Contentful Paint) 最大内容绘制 <2.5  4>
      getTTFB(onPerfEntry); // 累积布局偏移  <0.1  0.25>
    });
  }
};

export default reportWebVitals;
