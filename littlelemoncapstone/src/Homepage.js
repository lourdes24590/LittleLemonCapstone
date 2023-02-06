import './styles.css';
import Specials from './Specials';
import Testimonial from './Testimonial';
import About from './About';
function Homepage() {
    return (
      <main>
        <div id="entry">
            <div id ="textPart">
              <span id="titleEntry">Little Lemon</span>
              <span style={{paddingTop:'2%',fontSize:'32px'}}>Chicago</span>
              <p>We are a family owned restaurant, focused on traditional recipes served with a modern twist.
              </p>
              <button>Reserve a Table</button>
            </div>
            <div id="picPart">
              <img src="restauranfood.jpg" alt="nothing"/>
            </div>
        </div>
        <div id="specials">
          <div id="title"><span style={{size:'40pt',fontWeight:'regular'}}>Specials</span>
          <button>Online Menu</button>
          </div>
          <div id="dishes">
            <Specials title="Greek Salad" price="$12.99" link="greek salad.jpg" text="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."/>
            <Specials title="Bruschetta" price="$5.99" link="bruchetta.svg" text="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "/>
            <Specials title="Lemon Dessert" price="$5.00" link="lemon dessert.jpg" text="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."/>
          </div>
        </div>
        <div id="testimonials">
            <h2>Testimonials</h2>
            <br/>
            <div id="testimonialSet">
            <Testimonial name="John" image="bruchetta.svg" review="Delicious!" rating="5"/>
            <Testimonial name="John" image="bruchetta.svg" review="Delicious!" rating="5"/>
            <Testimonial name="John" image="bruchetta.svg" review="Delicious!" rating="5"/>
            <Testimonial name="John" image="bruchetta.svg" review="Delicious!" rating="5"/>
            </div>
        </div>
        <About/>
      </main>
    )
};

export default Homepage;