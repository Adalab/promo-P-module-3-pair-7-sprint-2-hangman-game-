import PropTypes from 'prop-types';

const Loading = (props) => {
  return <div className={props.isEditMode ? 'loading' : ''}></div>;
};

Loading.PropType = {
  isEditMode: PropTypes.string,
};
export default Loading;
