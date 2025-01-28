import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const {title, cover, author, author_img, reading_time, posted_date, hashtags} = blog;
    return (
        <div>
            <img src={cover} alt={`The cover picture of ${title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-14 h-15 rounded-full' src={author_img} alt={`Image of ${author}`} />
                    <div className='ml-6'>
                        <h2 className='text-2xl'>{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>

                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
};

export default Blog;