import { Link } from "react-router-dom";
import "./Home.scss";
import { Accordion } from "react-bootstrap";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container header-container">
          <div className="content-body">
            <div className="button-url">
              <h4>Sales & Marketing Experts</h4>
              <img
                src="https://res.cloudinary.com/dwrvexxbo/image/upload/v1704909945/boldbrandz/jevmtmuuj5x9xjaz5zfd.png"
                alt=""
              />
            </div>
            <div className="heading-div">
              <h2>
                Bold Strategies, <span>solid results</span>
              </h2>
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
                <img
                  src="https://res.cloudinary.com/dwrvexxbo/image/upload/v1704909948/boldbrandz/udwqxeo588y0khzxpln9.png"
                  alt=""
                />
              </div>
              <div className="service-content">
                <h4>Sales</h4>
                <h2>
                  Tailored Market Research: Uncover Opportunities in Your
                  Competitive Landscape.
                </h2>
                <button className="learn-button">Learn More</button>
              </div>
            </div>
            {/* Service Two */}
            <div className="service-one">
              <div className="image-box">
                <img
                  src="https://res.cloudinary.com/dwrvexxbo/image/upload/v1704909949/boldbrandz/xspfvet2zsnroq2ircxg.png"
                  alt=""
                />
              </div>
              <div className="service-content">
                <h4>MARKETING & GROWTH</h4>
                <h2>
                  Tailored Market Research: Uncover Opportunities in Your
                  Competitive Landscape.
                </h2>
                <button className="learn-button">Learn More</button>
              </div>
            </div>
            {/* Service Three */}
            <div className="service-one">
              <div className="image-box">
                <img
                  src="https://res.cloudinary.com/dwrvexxbo/image/upload/v1704909950/boldbrandz/bip4lxywzgg1wl4nrjik.png"
                  alt=""
                />
              </div>
              <div className="service-content">
                <h4>SITE & SOCIAL</h4>
                <h2>
                  Tailored Market Research: Uncover Opportunities in Your
                  Competitive Landscape.
                </h2>
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
            <p>
              No guessing or gut-feelings, only a proven framework backed by
              data.
            </p>
            <button className="how-button">Find Out More</button>
          </div>
          {/* Right Side Content */}
          <div className="right-container">
            <div className="container-position">
              <img
                src="https://res.cloudinary.com/dwrvexxbo/image/upload/v1704909945/boldbrandz/mqfqzuuj1evipaypmg4i.png"
                alt=""
              />
              <h4>ANALYSIS</h4>
              <p>
                We start with a deep dive into your brand, offering, audience
                and growth goals to identify competitor and market factors.
              </p>
            </div>
            <div className="container-position">
              <img
                src="https://res.cloudinary.com/dwrvexxbo/image/upload/v1704909946/boldbrandz/n7hj5dzq0cwx6pthsqbz.png"
                alt=""
              />
              <h4>DEFINING</h4>
              <p>
                We start with a deep dive into your brand, offering, audience
                and growth goals to identify competitor and market factors.
              </p>
            </div>
            <div className="container-position">
              <img
                src="https://res.cloudinary.com/dwrvexxbo/image/upload/v1704909945/boldbrandz/vevwteajmqvbrxnzgiy3.png"
                alt=""
              />
              <h4>EXECUTION</h4>
              <p>
                We start with a deep dive into your brand, offering, audience
                and growth goals to identify competitor and market factors.
              </p>
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
            <p>
              Blending in is not an option for us. We{"’"}re a pragmatic,
              hard-working marketing agency that uses design, digital
              experiences, and strategy to help businesses break away from the
              pack and become a brand people can’t ignore.
            </p>
            <button className="how-button">Book a short consult</button>
          </div>
          <div className="who-right-container">
            <img
              src="https://res.cloudinary.com/dwrvexxbo/image/upload/v1704909952/boldbrandz/myzdrhyuwtdxk9pz6v45.png"
              alt=""
            />
            <div className="position-image">
              <img
                src="https://res.cloudinary.com/dwrvexxbo/image/upload/v1704909945/boldbrandz/b2att2osscmcydglmw9w.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ sections */}
      <section className="faq_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h4>FAQ's</h4>
                <h2>Frequently asked question</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Our experts have the ability to deal with sales service?
                  </Accordion.Header>
                  <Accordion.Body>
                    Our experts have the ability to deal with facility service,
                    regular cleaning, specialized cleaning, office cleaning, Our
                    experts have the ability to deal with facility service,
                    regular cleaning, specialized cleaning, office cleaning.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Our experts have the ability to deal with sales service?
                  </Accordion.Header>
                  <Accordion.Body>
                    Our experts have the ability to deal with facility service,
                    regular cleaning, specialized cleaning, office cleaning, Our
                    experts have the ability to deal with facility service,
                    regular cleaning, specialized cleaning, office cleaning.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    Our experts have the ability to deal with sales service?
                  </Accordion.Header>
                  <Accordion.Body>
                    Our experts have the ability to deal with facility service,
                    regular cleaning, specialized cleaning, office cleaning, Our
                    experts have the ability to deal with facility service,
                    regular cleaning, specialized cleaning, office cleaning.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    Our experts have the ability to deal with sales service?
                  </Accordion.Header>
                  <Accordion.Body>
                    Our experts have the ability to deal with facility service,
                    regular cleaning, specialized cleaning, office cleaning, Our
                    experts have the ability to deal with facility service,
                    regular cleaning, specialized cleaning, office cleaning.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Our Blog Section */}
      <section className="our_blog">
        <div className="container">
          {/* Heading Area */}
          <div className="row">
            <div className="col-md-12">
              <div className="blog_header">
                <h4>Our Blogs</h4>
                <h2>
                  Dive into a reservoir of insights & evolve with the latest
                  market trends
                </h2>
              </div>
            </div>
          </div>
          {/* Blog Card Area */}
          <div className="row">
            <div className="col-md-6">Baal</div>
            <div className="col-md-6">Heda</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
