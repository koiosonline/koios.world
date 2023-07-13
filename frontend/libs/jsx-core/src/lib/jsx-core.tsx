import styles from './jsx-core.module.css';

/* eslint-disable-next-line */
export interface JsxCoreProps {}

export function JsxCore(props: JsxCoreProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to JsxCore!</h1>
    </div>
  );
}

export default JsxCore;
