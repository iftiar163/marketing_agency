import { Link } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  return <>
  {/* Hero Section */}
    <section className="hero-section">
      <div className="container header-container">
        <div className="content-body">
          <div className="button-url">
            <h4>Sales & Marketing Experts</h4>
            <img src="../src/assets/object-1.png" alt="" />
          </div>
          <div className="heading-div">
            <h2>Bold Strategies, <span>solid results</span></h2>
            <p>Innovative Strategies. Tailored Solutions. Proven Results.</p>
            <Link to={"#"}>Discover Our Approach</Link>
          </div>
        </div>
      </div>
    </section>

  {/* Service Section */}
    <section className="service-section">
      <div className="container">
      <div className="service-head">
        <h4>Our services</h4>
        <h2>What you can expect from us</h2>
      </div>
      <div className="service-name">
        {/* Service One */}
        <div className="service-one">
          <div className="image-box">
            <img src="../src/assets/service_one.png" alt="" />
          </div>
          <div className="service-content">
            <h4>Sales</h4>
            <h2>Tailored Market Research: Uncover Opportunities in Your Competitive Landscape.</h2>
            <button className="learn-button">Learn More</button>
          </div>
        </div>
        {/* Service Two */}
        <div className="service-one">
          <div className="image-box">
            <img src="../src/assets/service_two.png" alt="" />
          </div>
          <div className="service-content">
            <h4>MARKETING & GROWTH</h4>
            <h2>Tailored Market Research: Uncover Opportunities in Your Competitive Landscape.</h2>
            <button className="learn-button">Learn More</button>
          </div>
        </div>
        {/* Service Three */}
        <div className="service-one">
          <div className="image-box">
            <img src="../src/assets/service_three.png" alt="" />
          </div>
          <div className="service-content">
            <h4>SITE & SOCIAL</h4>
            <h2>Tailored Market Research: Uncover Opportunities in Your Competitive Landscape.</h2>
            <button className="learn-button">Learn More</button>
          </div>
        </div>
      </div>
      </div>
    </section>

    {/* How We Work Section */}

    <section className="how-work">
      <div className="container how-work-container">
        {/* Left Side Content */}
        <div className="left-container">
          <h4>HOW WE WORK</h4>
          <h2>Our Process Of Analysis To Execution</h2>
          <p>No guessing or gut-feelings, only a proven framework backed by data.</p>
          <button className="how-button">Find Out More</button>
        </div>
        {/* Right Side Content */}
        <div className="right-container">
          <div className="container-position">
            <img src="../src/assets/bulb.png" alt="" />
            <h4>ANALYSIS</h4>
            <p>We start with a deep dive into your brand, offering, audience and growth goals to identify competitor and market factors.</p>
          </div>
          <div className="container-position">
            <img src="../src/assets/search.png" alt="" />
            <h4>DEFINING</h4>
            <p>We start with a deep dive into your brand, offering, audience and growth goals to identify competitor and market factors.</p>
          </div>
          <div className="container-position">
            <img src="../src/assets/note.png" alt="" />
            <h4>EXECUTION</h4>
            <p>We start with a deep dive into your brand, offering, audience and growth goals to identify competitor and market factors.</p>
          </div>
        </div>
      </div>
    </section>

    {/* WHO WE ARE */}
    <section className="who-we">
      <div className="container who-container">
        <div className="who-left-container">
        <h4>WHO WE ARE</h4>
          <h2>We{"’"}re Pragmatic Creatives Helping Small Businesses Win</h2>
          <p>Blending in is not an option for us. We{"’"}re a pragmatic, hard-working marketing agency that uses design, digital experiences, and strategy to help businesses break away from the pack and become a brand people can’t ignore.</p>
          <button className="how-button">Book a short consult</button>
        </div>
        <div className="who-right-container">
          <img src="../src/assets/who_we.png" alt="" />
          <div className="position-image">
          <img src="../src/assets/circle.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  
  </>
};

export default Home;

