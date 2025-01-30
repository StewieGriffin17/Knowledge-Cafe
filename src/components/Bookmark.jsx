import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-slate-500 m-4 p-4 rounded-xl'>
            <h3 className='text-2xl'>{title}</h3>
        </div>
    );
};


Bookmark.propTypes = {
    bookmark: PropTypes.object
};
export default Bookmark;