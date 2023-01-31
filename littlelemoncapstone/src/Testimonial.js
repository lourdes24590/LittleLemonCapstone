import './styles.css';
function Testimonial(props) {
    return(<div id="testimonialBox">
            Rating:{props.rating}
            <br/>
            <img src={props.image} alt="nothing"/>
            <span style={{paddingLeft:"5%"}}>{props.name}</span>
            <br/>
            {props.review}
    </div>);
}

export default Testimonial;