import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

import styles from "./Chart.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

class Chart extends Component {
  getLanguageStats = repos => {
    let stats = new Map();

    for (let i = 0; i < repos.length; i++) {
      const lang = repos[i].language;
      if (lang !== null) {
        stats.has(lang)
          ? stats.set(lang, stats.get(lang) + 1)
          : stats.set(lang, 1);
      }
    }

    return {
      labels: [...stats.keys()],
      datasets: [
        {
          data: [...stats.values()]
        }
      ]
    };
  };

  render() {
    const { repositories } = this.props;
    const { getLanguageStats } = this;

    return (
      <div className={cx("chart")}>
        <h2>Language</h2>

        <Doughnut
          data={getLanguageStats(repositories)}
          width={150}
          height={150}
        />
      </div>
    );
  }
}

export default Chart;
