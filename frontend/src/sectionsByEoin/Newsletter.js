import React from "react";

function Newsletter() {
  return (
    <div>
      <section className="homepagebox centreThis">
        <div className="coloredBox yellow">
          <h2>Newsletter Signup</h2>
        </div>
        <div className="white">
          <p>***Text about what our news letter contains and why we send it.</p>
          <form
            action="https://gmail.us19.list-manage.com/subscribe/post?u=5f345ee5b52850316f8e104b4&amp;id=e9b9605d2b"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_blank"
            novalidate
          >
            <div>
              <label>Subscribe to our News Letter</label>
              <div className="newsletterForm">
                <input placeholder="your@email.here" />
                <input className="subscribeButton" type="submit" value="Subscribe" name="subscribe" />
              </div>
            </div>
          </form>
        </div>
        <hr className="bottomHR" />
      </section>
    </div>
  );
}

export default Newsletter;
