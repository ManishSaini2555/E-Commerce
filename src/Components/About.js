import React from "react";

const About = (props) => {
  const aboutStyle = {
    minHeight: "88vh",
  };
  props.search(false);
  return (
    <div className="container" style={aboutStyle}>
      <h3 className="text-center py-4">
        E-Commerce: The One-stop Shopping Destination
      </h3>
      <p>
        E-commerce is revolutionizing the way we all shop in India. Why do you
        want to hop from one store to another in search of the latest phone when
        you can find it on the Internet in a single click? Not only mobiles.
        Flipkart houses everything you can possibly imagine, from trending
        electronics like laptops, tablets, smartphones, and mobile accessories
        to in-vogue fashion staples like shoes, clothing and lifestyle
        accessories; from modern furniture like sofa sets, dining tables, and
        wardrobes to appliances that make your life easy like washing machines,
        TVs, ACs, mixer grinder juicers and other time-saving kitchen and small
        appliances; from home furnishings like cushion covers, mattresses and
        bedsheets to toys and musical instruments, we got them all covered. You
        name it, and you can stay assured about finding them all here. For those
        of you with erratic working hours, Flipkart is your best bet. Shop in
        your PJs, at night or in the wee hours of the morning. This e-commerce
        never shuts down.
      </p>
      <br />
      <p>
        What's more, with our year-round shopping festivals and events, our
        prices are irresistible. We're sure you'll find yourself picking up more
        than what you had in mind. If you are wondering why you should shop from
        Flipkart when there are multiple options available to you, well, the
        below will answer your question.
      </p>
      <br />
      <p>
        In an attempt to make high-end products accessible to all, our No Cost
        EMI plan enables you to shop with us under EMI, without shelling out any
        processing fee. Applicable on select mobiles, laptops, large and small
        appliances, furniture, electronics and watches, you can now shop without
        burning a hole in your pocket. If you've been eyeing a product for a
        long time, chances are it may be up for a no cost EMI. Take a look ASAP!
        Terms and conditions apply.
      </p>
      <br />
      <div className="pt-5">
        <img
          src="https://miro.medium.com/max/1400/1*SwFB1o_k1LGprN-XRUZQ8w.jpeg"
          alt="Addvertizement1"
          width="33%"
          height="250px"
        />
        <img
          src="https://www.x-cart.com/img/16591/ecommerce-p800.jpg"
          alt="Addvertizement2"
          width="33%"
          height="250px"
        />
        <img
          src="https://cdn.acowebs.com/wp-content/uploads/2019/02/Impact-of-eCommerce-On-Society.png"
          alt="Addvertizement3"
          width="33%"
          height="250px"
        />
      </div>
    </div>
  );
};

export default About;
