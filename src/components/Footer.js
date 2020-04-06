import React from 'react';
import config from '../../config';
export default function Footer() {
  return (
    <section id="footer">
      <div className="inner">
        <h2 className="major">엔서(ANSWER)에 대한 궁금증을 해결해 드립니다.</h2>
        <p>
          엔서(ANSWER)를 사용하는 모든 분들에게 감사의 말씀을 드리며,
          사용중 불편하거나 궁금하신 사항을 적극 해결하도록 노력 하겠습니다.
        </p>

        {/*<form method="post" action="/#">
          <div className="fields">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" />
            </li>
          </ul>
        </form>*/}

        <ul className="contact">
          <li className="fa-home">{config.address}</li>

          <li className="fa-phone">{config.phone}</li>

          {config.socialLinks.map(social => {
            const { icon, url } = social;
            return (
              <li className={`${icon}`} key={url}>
                <a href={url}>{url}</a>
              </li>
            );
          })}
        </ul>

        <ul className="copyright">
          <li>&copy; Bogonet. All rights reserved.</li>
        </ul>
      </div>
    </section>
  );
}
