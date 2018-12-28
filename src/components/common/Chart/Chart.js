import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

import styles from "./Chart.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

class Chart extends Component {
  getLanguageStats = repos => {
    let stats = new Map();

    repos.forEach(repos => {
      const lang = repos.language || "None";
      stats.has(lang)
        ? stats.set(lang, stats.get(lang) + 1)
        : stats.set(lang, 1);
    });

    return {
      labels: [...stats.keys()],
      datasets: [
        {
          data: [...stats.values()],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#f38b4a",
            "#56d798",
            "#A901DB",
            "#CCEEFF"
          ],
          hoverBorderColor: "#000"
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
        {repositories.length > 0 ? (
          <Doughnut
            data={getLanguageStats(repositories)}
            width={300}
            height={200}
            options={{
              responsive: false
            }}
          />
        ) : (
          <p>No Items</p>
        )}
      </div>
    );
  }
}

export default Chart;
