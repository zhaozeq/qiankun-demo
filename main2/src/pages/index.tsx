import styles from './index.less';

export default function IndexPage() {
  return (
    <div className="mainapp">
      <header className="mainapp-header">
        <h1>QianKun</h1>
      </header>
      <div className="mainapp-main">
        <main id="subapp-container"></main>
      </div>
    </div>
  );
}
