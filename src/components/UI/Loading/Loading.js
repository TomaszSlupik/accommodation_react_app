import ColorContext from "../../context/ColorContext";

function Loading(props) {
	return (
		<ColorContext.Consumer>
		{
			({blue_color}) =>
		<div>
			<div className="d-flex justify-content-center">
				<div className={`spinner-border text-${blue_color}`} role="status">
					<span className="sr-only"></span>
				</div>
			</div>
		</div>
		}
		
		</ColorContext.Consumer>
		
	);
}

export default Loading;

