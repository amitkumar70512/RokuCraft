import ContinueReading from "../Blogs/ContinueReading";
import LatestBlogs from "../Blogs/LatestBlogs";
import React from "react";
import FeaturedBlogs from "../Blogs/FeaturedBlogs";
import Sidebar from "../Sidebar/Sidebar";


function Home() {
	return (
		<>
			<ContinueReading/>
			<LatestBlogs />
			<h2>Featured Blogs</h2>
			<FeaturedBlogs />
			
			<Sidebar />
		</>
	)
}

export default Home;
