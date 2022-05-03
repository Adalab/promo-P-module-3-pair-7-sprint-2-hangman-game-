import PropTypes from 'prop-types';

const Loading = (props) => {
  return <div className={props.isEditMode ? 'loader' : ''}></div>;
};

Loading.PropType = {
  isEditMode: PropTypes.string,
};
export default Loading;
