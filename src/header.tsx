import { CSSProperties } from "react";

interface Props {
    onMenuClick: () => void;
}
function Header(props:Props) {
    return(
        
        <header style={headerStyle}>
            <p onClick={props.onMenuClick}>H</p>
            <h1>Hello World!</h1>
        </header>
    )

}

const headerStyle: CSSProperties = {
    position: 'fixed',
    background: 'black',
    color: 'white',
    left: 0,
    top: 0,
    right: 0,
    height: '5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}
export default Header;