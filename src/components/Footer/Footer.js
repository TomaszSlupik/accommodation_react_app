import ColorContext from "../context/ColorContext"

function Footer (props) {
    return (
        <ColorContext.Consumer>
        { ({blue_color}) =>
        <div>
        <div className={`text-${blue_color}`}>Stopka 2022</div>
        </div>
        }
        
        
        </ColorContext.Consumer>
        
    )
}

export default Footer