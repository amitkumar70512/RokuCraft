import React from "react";
import SidebarAbout from "./SidebarAbout";

function Sidebar() {
	return (
		<>
			<aside className="col-md-4 blog-sidebar">
                
                <SidebarAbout />

			</aside>
			{/* /.blog-sidebar */}
		</>
	);
}

export default Sidebar;
