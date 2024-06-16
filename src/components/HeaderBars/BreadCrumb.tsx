import React from "react";

function BreadCrumb() {
	return (
		<>
			<nav aria-label="breadcrumb">
				<ol className="breadcrumb">
					<li className="breadcrumb-item">
						<a href="#">Home</a>
					</li>
					<li className="breadcrumb-item active">
						<a href="#">Blogs</a>
					</li>
				</ol>
			</nav>
		</>
	);
}

export default BreadCrumb;
