import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate} }) => {
    if (!confirmed) {
        return 'Loading...'
    }

    const percent = deaths.value*100/confirmed.value

    return (
        <div className={styles.container}>
            <Grid container direction="row" spacing={12} justify="center" >
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                <CardContent>
                <Typography variant="h2" align="center"><span role="img" aria-label="sick">🤒</span></Typography>
                    <Typography align="center" variant="h4" gutterBottom>Infected</Typography>
                    <Typography variant="h3" align="center" gutterBottom>
                        <CountUp start={0} end={confirmed.value} duration={2.5} separator="," /></Typography>
                    <Typography color="textSecondary" align="center">Last Updated: {new Date(lastUpdate).toDateString()}</Typography>
                </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                <CardContent>
                <Typography variant="h2" align="center"><span role="img" aria-label="grinning-face">😀</span></Typography>
                <Typography align="center" variant="h4" gutterBottom>Recovered</Typography>
                    <Typography variant="h3" align="center" gutterBottom>
                        <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
                    </Typography>
                    <Typography color="textSecondary" align="center">Last Updated: {new Date(lastUpdate).toDateString()}</Typography>
                </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                <CardContent>
                <Typography variant="h2" align="center"><span role="img" aria-label="skull">💀</span></Typography>
                    <Typography variant="h4" align="center" gutterBottom>Deaths</Typography>
                    <Typography variant="h3" align="center" gutterBottom>
                        <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary" align="center">Last Updated: {new Date(lastUpdate).toDateString()}</Typography>
                </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={2} className={cx(styles.card, styles.percent)}>
                <CardContent>
                <Typography variant="h2" align="center"><span role="img" aria-label="sick">☠️</span></Typography>
                    <Typography align="center" variant="h4" gutterBottom>Death %</Typography>
                    <Typography variant="h3" align="center" gutterBottom>
                        <CountUp start={0} end={percent.toFixed(2)} duration={4.5} separator="," />%
                        </Typography>
                    <Typography color="textSecondary" align="center">Last Updated: {new Date(lastUpdate).toDateString()}</Typography>
                </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;