import React from "react";

function BlogCard() {
	return (
		<div className="col-md-4">
			<div className="card mb-4 box-shadow">
				<img
					className="card-img-top"
					src="https://picsum.photos/id/237/200/200"
					alt="Card image cap"
				/>
				<small className="text-muted">Author Name</small>
				<div className="card-body">
					<p className="card-text">
						This is a wider card with supporting text below as a natural lead-in
						to additional content. This content is a little bit longer.
					</p>
					<div className="d-flex justify-content-between align-items-center">
						<div className="btn-group">
							<button
								type="button"
								className="btn btn-sm btn-outline-secondary"
							>
								View
							</button>
							<button
								type="button"
								className="btn btn-sm btn-outline-secondary"
							>
								Edit
							</button>
						</div>
						<small className="text-muted">Category Tag</small>
						<small className="text-muted">9 mins</small>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BlogCard;
