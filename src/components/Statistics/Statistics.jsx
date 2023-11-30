import { Component } from 'react';
import css from "./Statistics.module.css";

 class Statistics extends Component  {
    return(
        <h1 className = { css.title } > Statistics</h1>
            
            <div className={css.statisticsCounter}>
    <span className={css.statisticsItem}>Good:{0}</span>
            <span className={css.statisticsItem}>Neutral:{0}</span>
                <span className={css.statisticsItem}>Bad:{0}</span>
                </div>
    )
}


export default Statistics;
