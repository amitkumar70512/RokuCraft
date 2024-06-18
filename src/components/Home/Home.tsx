import ContinueReading from "../Blogs/ContinueReading";
import LatestBlogs from "../Blogs/LatestBlogs";
import React from "react";
import FeaturedBlogs from "../Blogs/FeaturedBlogs";
import Sidebar from "../Sidebar/Sidebar";
import Blogs from "../Blogs/Blogs";


function Home() {
	return (
		<div className="m-5">
			<ContinueReading />
			<LatestBlogs />
			<h2>Featured Blogs</h2>
			<FeaturedBlogs />
			<div className="row">
				<Sidebar />
				<main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
					<div>
						<h1>TOP LIked BLOGS</h1>
						<Blogs />
					</div>
				</main>
			</div>
		</div>
	)
}

export default Home;
