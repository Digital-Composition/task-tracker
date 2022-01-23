
import { useSelector, useDispatch } from "react-redux";
import { set_ShowDropdown } from "store/reducers/navbarReducer";
export const Navbar = () => {
	var ShowDropdown = useSelector((state) => state.navbar.ShowDropdown);
	const dispatch = useDispatch();
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg rounded-bottom">
			<div className="container-fluid">
				<div className="navbar-brand">Task Tracker</div>
				<button className="navbar-toggler">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse">
					<ul className="navbar-nav">
						<li className="nav-item dropdown">
							<div
								className={`nav-link dropdown-toggle ${ShowDropdown ? "show" : ""}`}
								id="navbarDropdown"
								role="button"
								onClick={() => dispatch(set_ShowDropdown(!ShowDropdown))}>
								Options
							</div>
							<ul className={`dropdown-menu ${ShowDropdown ? "show" : ""}`}>
								<li>
									<div className="dropdown-item">Action</div>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
