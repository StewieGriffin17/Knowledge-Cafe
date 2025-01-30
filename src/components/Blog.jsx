import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {title, cover, author, author_img, reading_time, posted_date, hashtags, id} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8 rounded-2xl' src={cover} alt={`The cover picture of ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14 h-15 rounded-full' src={author_img} alt={`Image of ${author}`} />
                    <div className='ml-6'>
                        <h2 className='text-2xl'>{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>

                <div className='flex items-center gap-2'>
                    <span>{reading_time} min read</span>
                    <button className='' onClick={() => handleAddToBookmark(blog)}><FaRegBookmark /></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
            <button className='mt-2 font-bold underline' onClick={() => handleMarkAsRead(reading_time, id)}>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func
};

export default Blog;