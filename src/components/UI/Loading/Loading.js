

function Loading(props) {
	return (
		<div>
			<div className="d-flex justify-content-center">
				<div className={`spinner-border text-${props.blue_color}`} role="status">
					<span className="sr-only"></span>
				</div>
			</div>
		</div>
	);
}

export default Loading;

