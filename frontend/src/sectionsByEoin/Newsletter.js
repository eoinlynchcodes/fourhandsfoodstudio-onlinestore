import React from "react";

function Newsletter() {
  return (
    <div>
      <section className="homepagebox">
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
              <div>
                <input placeholder="your@email.here" />
                <div>
                  <input type="submit" value="Subscribe" name="subscribe" />
                </div>
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
