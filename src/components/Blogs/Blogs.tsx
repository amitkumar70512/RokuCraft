import React from "react";
import BlogCard from "./BlogCard";
import RecentRead from "./RecentRead";
import LatestBlogs from "./LatestBlogs";

export default function Blogs() {
	return (
		<>
			{/* blogs */}
			<div className="album py-5 bg-light">
				<div className="container">
					<RecentRead />
					<LatestBlogs />
					<div className="row">
						<BlogCard />
						<BlogCard />
						<BlogCard />
						<BlogCard />
						<BlogCard />
						<BlogCard />
						<BlogCard />
						<BlogCard />
						<BlogCard />
					</div>
				</div>
			</div>
		</>
	);
}
