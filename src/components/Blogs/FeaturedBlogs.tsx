import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';
import { Blog } from '../../firebase/interface';
import { getFilteredBlogs } from '../../firebase/blogs';

interface FilterProps {
  limit?: number; // Number of blogs to be displayed (default: 5)
  author?: string; // Filter by author if provided
  coins?: number; // Filter by number of coins if provided
  dop?: Date; // Filter by date of publication of blog if provided
  premium?: boolean; // Filter by premium status if provided
  isAdmin?: boolean; // Flag to determine if admin view (default: false)
}

function FeaturedBlogs({ limit = 5, author, coins, dop, premium, isAdmin }: FilterProps) {
    const [blogData, setBlogData] = useState<Blog[]>([]); // State to hold blog data

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                // Construct filters based on provided props
                const filters: FilterProps = {};

                if (author) {
                    filters.author = author;
                }
                if (coins !== undefined) {
                    filters.coins = coins;
                }
                if (dop) {
                    filters.dop = dop;
                }
                if (premium !== undefined) {
                    filters.premium = premium;
                }
                if (isAdmin !== undefined) {
                    filters.isAdmin = isAdmin;
                }

                // Fetch filtered blogs from Firestore
                const data = await getFilteredBlogs(filters, limit);
                setBlogData(data); // Update state with fetched data
                console.log('Featured Blogs Fetched Successfully');
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchBlogs();
    }, [author, coins, dop, premium, isAdmin]); // Effect runs when any of these dependencies change

    return (
        <>{
            (blogData.length > 0) &&
      <div className="album py-5 bg-light">
          <div className="container">
              {/* Render BlogCard components dynamically */}
              <div className="row">
                  {blogData.map((blog) => (
                      <BlogCard blog={blog} key={blog.id} />
                  ))}
              </div>
          </div>
      </div>
        }
        </>
    );
}

export default FeaturedBlogs;