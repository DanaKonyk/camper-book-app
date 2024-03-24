import { Audio } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.wrap}>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="rgba(111, 147, 169, 0.5)"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
      ;
    </div>
  );
};

export default Loader;
