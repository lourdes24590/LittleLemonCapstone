import './styles.css';
function Specials(props) {
    return(
    <div id="specialCard">
        <img src={props.link} alt="nothing"/>
        <div id="specialTitlePrice">
       <span>{props.title}</span>
       <span style={{color:'red'}}>{props.price}</span>
        </div>
        <p>{props.text}</p>
        <span style={{fontWeight:'bold'}}>Order a delivery</span>
    </div>
    );
};

export default Specials;