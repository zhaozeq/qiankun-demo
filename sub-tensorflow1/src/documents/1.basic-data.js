const scalar = `const a = tf.scalar(3.14);
a.print(); // 输出零维张量
`;

const tensor2d = `const b = tf.tensor2d([
      [2, 3, 4],
      [5, 6, 7],
    ]);
b.print(); // 输出二维张量
`;

const zeros = `const c = tf.zeros([2, 3]);
c.print(); // 输出2行3列的值全是0的张量
`;

const ones = `const d = tf.ones([3, 5]);
d.print(); // 输出3行5列的值全是1的张量
`;

export { scalar, tensor2d, zeros, ones };
