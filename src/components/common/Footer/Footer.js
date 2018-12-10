import React from "react";

import styles from "./Footer.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Footer = () => (
  <footer className={cx("footer")}>
    <p>
      <a href="https://github.com/cemujax" title="cemujax GitHub">
        #cemujax
      </a>
    </p>
  </footer>
);

export default Footer;
