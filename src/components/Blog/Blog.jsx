import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmark,  handleMarksAsRead}) => {
    const {title,cover,author, author_img, reading_time, posted_date, hashtags} = blog;

    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full rounded mb-8' src={cover} alt={`Cover picture of the title${title}`} />
            <div className='flex justify-between items-center mb-4'>
                <div className='flex items-center'>
                    <img className='w-16' src={author_img} />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2 text-2xl text-red-600'><FaBookmark /></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hashtag, idx, ) => <span key={idx}><a href=''> {hashtag}</a></span>)
                }
            </p>
            <button onClick={()=> handleMarksAsRead(reading_time)} className='text-purple-600 font-bold underline'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarksAsRead: PropTypes.func.isRequired
}

export default Blog;