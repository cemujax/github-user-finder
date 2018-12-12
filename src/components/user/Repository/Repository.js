import React, { Component } from "react";
import parse from "date-fns/parse";
import distanceInWords from "date-fns/distance_in_words";

import { ReactComponent as StarIcon } from "./Star.svg";
import { ReactComponent as ForkIcon } from "./Fork.svg";

import styles from "./Repository.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

class Repository extends Component {
  parsedDate = date => {
    return distanceInWords(parse(date), new Date());
  };

  render() {
    const { isPending, repositories } = this.props;
    const { parsedDate } = this;

    return (
      <div className={cx("repositoreis")}>
        <h2>Repository</h2>
        {isPending ? (
          <h2>Loading</h2>
        ) : repositories.length > 0 ? (
          <ul className={cx("repos-list")}>
            {repositories.map(repos => (
              <li key={repos.id} className={cx("repos")}>
                <p className={cx("repos-title")}>
                  <a href={repos.html_url} className={cx("repos-link")}>
                    {repos.name}
                  </a>
                  {repos.fork ? (
                    <span className={cx("repos-fork")}>(fork)</span>
                  ) : null}
                </p>
                {repos.description ? (
                  <p className={cx("repos-description")}>{repos.description}</p>
                ) : null}
                <div className={cx("repos-footer")}>
                  {repos.language ? <p>{repos.language}</p> : null}
                  <p>
                    <StarIcon width={18} height={18} />
                    {repos.stargazers_count}
                  </p>
                  <p>
                    <ForkIcon width={18} height={18} />
                    {repos.forks}
                  </p>
                  <p className={cx("pushDate")}>
                    Updated {parsedDate(repos.pushed_at)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No Repository</p>
        )}
      </div>
    );
  }
}

export default Repository;
