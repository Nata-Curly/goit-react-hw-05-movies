import PropTypes from 'prop-types';
import css from './Button.module.css'

const LoadMore = ({ onClick }) => {
    return (
        <button type='button' className={css.LoadMoreBtn} onClick={onClick}>more...</button>
    );

}

LoadMore.propTypes = {
    onClick: PropTypes.func.isRequired
}
export default LoadMore;