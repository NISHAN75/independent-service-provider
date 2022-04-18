import React from "react";
import { Container } from "react-bootstrap";
import { TiArrowForwardOutline } from "react-icons/ti";

const Blogs = () => {
  return (
    <div className="blog-area mt-5">
      <Container>
        <div className="q-area">
          <h5 style={{ color: "#18BA60" }}>
            (A) Difference between authorization and authentication?
          </h5>
          <div className="q-ans">
            <div className="q-info">
              <p style={{ color: "#18BA60" }}>
                <TiArrowForwardOutline />
                Authentication
              </p>
              <p>
                1.In authentication process, the identity of users are checked
                for providing the access to the system.
              </p>
              <p>
                2. In authentication process, users or persons are verified.
              </p>
              <p>3.It is done before the authorization process.</p>
              <p>4.It needs usually user’s login details. </p>
            </div>
            <div className="q-info">
              <p style={{ color: "#18BA60" }}>
                <TiArrowForwardOutline />
                Authorization
              </p>
              <p>
                1.While in authorization process, person’s or user’s authorities
                are checked for accessing the resources.
              </p>
              <p>2. While in this process, users or persons are validated.</p>
              <p>
                3.While this process is done after the authentication process..
              </p>
              <p>4.While it needs user’s privilege or security levels. </p>
            </div>
          </div>
        </div>
        <div className="q-area">
          <h5 style={{ color: "#18BA60" }}>
            (B) Why are you using firebase? What other options do you have to
            implement authentication?
          </h5>
          <div className="q-info">
            <p style={{ color: "#18BA60" }}>
              <TiArrowForwardOutline /> Why are you using firebase?
            </p>
            <p>
              Firebase Authentication makes it easier to get your users
              signed-in without having to understand the complexities behind
              implementing our own authentication system.It supports
              authentication using passwords, phone numbers, popular federated
              identity providers like Google, Facebook and Twitter, and more.
            </p>
          </div>
          <div className="q-info">
            <p style={{ color: "#18BA60" }}>
              <TiArrowForwardOutline /> What other options do you have to
              implement authentication?
            </p>
            <p>
              I have to Implement authentication <br />
              1.a password or personal identification number (PIN);
              <br />
              2.something you have: a token, such as bank card;
              <br />
              3.something you are: biometrics, such as fingerprints and voice
              recognition.
            </p>
          </div>
        </div>
        <div className="q-area">
          <h5 style={{ color: "#18BA60" }}>
            (C) What other services does firebase provide other than authentication?
          </h5>
          <div className="q-info">
            <p>
              Yes,there are many services which Firebase provides ,most useful of us:<br/>
              1.Hosting.<br/>
              2.Cloud Storage.<br/>
              3.Predictions.<br/>
              4.Cloud Messaging.<br/>
              5.Cloud Functions.<br/>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blogs;
