import React from "react";
import SidebarAbout from "./SidebarAbout";
import ArchiveList from "./ArchiveList";

function Sidebar() {
	return (
		<>
			<aside className="col-md-4 blog-sidebar">
                
                <SidebarAbout />
				< ArchiveList />

			</aside>
			{/* /.blog-sidebar */}
		</>
	);
}

export default Sidebar;
