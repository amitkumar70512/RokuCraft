import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Bot } from '../../../firebase/interface';
import { getBotByUserName } from '../../../firebase/bots';
import { Blog } from '../../../firebase/interface';
import { getFilteredBlogs } from '../../../firebase/blogs';
import './UserProfile.css'

interface FilterProps {
    limit?: number; // Number of blogs to be displayed (default: 5)
    author?: string; // Filter by author if provided
    coins?: number; // Filter by number of coins if provided
    dop?: string; // Filter by date of publication of blog if provided
    premium?: boolean; // Filter by premium status if provided
    isAdmin?: boolean; // Flag to determine if admin view (default: false)
}

const UserProfile: React.FC = () => {
    const navigate = useNavigate();
    const { userName } = useParams<{ userName: string }>();
    const [blogData, setBlogData] = useState<Blog[]>([]); // State to hold blog data
    const [botData, setBotData] = useState<Bot | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchBotData = async () => {
            try {
                if (userName !== undefined) {
                    const bot = await getBotByUserName(userName);
                    console.log('Bot:', bot);
                    setBotData(bot);
                    fetchBlogs();
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching bot:', error);
                setLoading(false);
            }
        };

        const fetchBlogs = async () => {
            try {
                setLoading(true);
                const filters: FilterProps = {};
                filters.author = userName;
                const data = await getFilteredBlogs(filters);
                setBlogData(data); // Update state with fetched data
                setLoading(false);
            } catch (error) {
                console.error('Error fetching blogs:', error);
                setLoading(false);
                // Handle error (e.g., show error message)
            }
        };

        fetchBotData(); // Call fetchBotData when component mounts or userName changes

    }, [userName]);

    const handleBlogClick = (blogId: String) => {
        navigate(`/blog/show/${blogId}`);
    };

    return (
        <div className="row py-5 px-4" style={{
            background: "linear-gradient(to right, #e96443, #904e95), #654ea3",

            overflowX: "hidden"
        }}
        >
            <div className="col-md-5 mx-auto">
                <div className="bg-white shadow rounded overflow-hidden">
                    {/* Profile header */}
                    <div className="px-4 pt-0 pb-4 cover">
                        <div className="media align-items-end profile-head">
                            <div className="profile mr-3">
                                <img
                                    src={botData?.image || "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"}
                                    alt="Profile"
                                    style={{ width: "130px", height: "130px" }}
                                    className="rounded mb-2 img-thumbnail"
                                />

                            </div>
                            <div className="media-body mb-5 text-white">
                                <h4 className="mt-0 mb-0">{botData?.userName || "BOT"}</h4>
                                <h2 className="mb-2" style={{ color: "#654ea3", fontFamily: "cursive" }}>
                                    {botData?.name || "-"}
                                </h2>
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="bg-light p-4 d-flex justify-content-end text-center">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item p-2">
                                <h5 className="font-weight-bold mb-0 d-block">215</h5>
                                <small className="text-muted">
                                    Blogs
                                </small>
                            </li>
                            <li className="list-inline-item p-2">
                                <h5 className="font-weight-bold mb-0 d-block">745</h5>
                                <small className="text-muted">
                                    <i className="fas fa-user mr-1"></i>Followers
                                </small>
                            </li>
                            <li className="list-inline-item p-2">
                                <h5 className="font-weight-bold mb-0 d-block">340</h5>
                                <small className="text-muted">
                                    <i className="fas fa-user mr-1"></i>Following
                                </small>
                            </li>
                        </ul>
                    </div>

                    {/* About section */}
                    <div className="px-4 py-3">
                        <h5 className="mb-0">About</h5>
                        <div className="p-4 rounded shadow-sm bg-light">
                            <p className="font-italic mb-0">Web Developer</p>
                            <p className="font-italic mb-0">Lives in New York</p>
                            <p className="font-italic mb-0">Photographer</p>
                        </div>
                    </div>

                    {/* Recent Blogs */}
                    <div className="py-4 px-4">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <h5 className="mb-0">Recent Blogs</h5>
                            <a href="#" className="btn btn-link text-muted" >
                                Show all
                            </a>
                        </div>
                        <div className="row">
                            {blogData.map((blog) => (
                                <div key={blog.blogId} className="col-lg-6 mb-2 pr-lg-1">
                                    <div className="position-relative"
                                        onClick={() => handleBlogClick(blog.blogId)}
                                        style={{ cursor: "pointer" }}>
                                        <img
                                            src={blog.image || "https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"}
                                            alt="blog IMG"
                                            className="img-fluid rounded shadow-sm"
                                        />
                                        <div className="bg-dark  p-3 position-absolute bottom-0 start-0 end-0 text-white"
                                            style={{ opacity: "0.75" }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.opacity = '0.90';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.opacity = '0.75';
                                            }}>
                                            <h5 className="mb-0">{blog.title.slice(0, 20) || "Blog Title"}</h5>
                                            <p className="mb-0">{blog.summary.substring(30) || "Description of the blog"}</p>
                                        </div>
                                    </div>
                                </div>

                            ))}
                            {
                                loading &&
                                <div className='d-flex align-items-center justify-content-center mt-2'>
                                    <div className="spinner-border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
