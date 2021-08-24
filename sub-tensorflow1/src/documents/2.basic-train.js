const lineTraining = {
  title: '一组线性数据的预测',
  code: `async function doTraining(model) {
  await model.fit(xs, ys, { // 培训函数 将xs拟合为ys
    epochs: 500, 
    callbacks: {
      onEpochEnd: async (epoch, logs) => {
        console.log('Epoch:'+ epoch, 'Loss:'+ logs.loss); // 打印epoch日志 和 期间损失
      },
    },
  });
}
const model = tf.sequential(); // 序列模型
model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' }); // 均方误差损失 和 优化器 
model.summary(); // 打印模型概况

// 拥有6个元素的一位数组 预测结果应当是接近 2X-1
const xs = tf.tensor2d([-1.0, 0.0, 1.0, 2.0, 3.0, 4.0], [6, 1]); 
const ys = tf.tensor2d([-3.0, -1.0, 2.0, 3.0, 5.0, 7.0], [6, 1]);
doTraining(model).then(() => {
  alert(model.predict(tf.tensor2d([10], [1, 1]))); // 结果应当接近 19
});
`,
};

const cateTraining = {
  title: '分类训练',
  code: `async function run() {
    const csvUrl = './train-datas/iris.csv';
    const trainingData = tf.data.csv(csvUrl, {
      columnConfigs: {
        species: { // 指定 species列 为label
          isLabel: true,
        },
      },
    });
  
    const numOfFeatures = (await trainingData.columnNames()).length - 1; // 减一去除species列
    const numOfSamples = 150; // 样本数
    const convertedData = trainingData
      .map(({ xs, ys }) => {
        const labels = [
          ys.species == 'setosa' ? 1 : 0,
          ys.species == 'virginica' ? 1 : 0,
          ys.species == 'versicolor' ? 1 : 0,
        ];
        return { xs: Object.values(xs), ys: Object.values(labels) };
      })
      .batch(10);
  
    const model = tf.sequential();
    // 添加具有五个神经元的隐藏层作为输入
    model.add(tf.layers.dense({ inputShape: [numOfFeatures], activation: 'sigmoid', units: 5 }));
    //  三个类别作为输出
    model.add(tf.layers.dense({ activation: 'softmax', units: 3 }));
  
    // 编译模型：分类交叉熵损失 和 0.06 的学习率
    model.compile({ loss: 'categoricalCrossentropy', optimizer: tf.train.adam(0.06) });
  
    await model.fitDataset(convertedData, {
      epochs: 100,
      callbacks: {
        onEpochEnd: async (epoch, logs) => {
          console.log('Epoch: ' + epoch + ' Loss: ' + logs.loss);
        },
      },
    });
  
    // Test Cases:
  
    // Setosa
    const testVal = tf.tensor2d([4.4, 2.9, 1.4, 0.2], [1, 4]);
  
    // Versicolor
    // const testVal = tf.tensor2d([6.4, 3.2, 4.5, 1.5], [1, 4]);
  
    // Virginica
    // const testVal = tf.tensor2d([5.8,2.7,5.1,1.9], [1, 4]);
  
    const prediction = model.predict(testVal);
    const pIndex = tf.argMax(prediction, 1).dataSync();
  
    const classNames = ['Setosa', 'Virginica', 'Versicolor'];
  
    alert(classNames[pIndex]);
  }
  run();
`,
};

export default [lineTraining, cateTraining];
