import { CSSProperties } from "react";
import { isPropertySignature } from "typescript";

interface Props {
    isOpen: boolean;
    onSidebarClose: () => void;
}
function Sidebar(props: Props) {
    return(
        <aside 
            style={rootStyle(props)}
            onClick={props.onSidebarClose}
        >
            <span>Home</span>
            <span>Pricing</span>
            <span>About Us</span>
            <span>Contact</span>
        </aside>
    )
}

const rootStyle = (props: Props): CSSProperties => ({
    position: 'fixed',
    left: props.isOpen? 0 : '-100%',
    top: 0,
    bottom: 0,
    width: '100%',
    background: props.isOpen ? 'red' : 'transparent',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 1s'

})

export default Sidebar;