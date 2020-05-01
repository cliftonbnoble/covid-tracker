import React from 'react';
import styles from './Map.module.css';
import { Grid } from '@material-ui/core';



const Map = () => {
    // if (!data) {
    //     return 'Loading...'
    // }

    return (
        <React.Fragment>
            <div className={styles.container}>
                <Grid item container direction="row" spacing={10} justify="center" xs={4} md={12} lg={12}>
            <iframe id="map" src="https://covid-survey.dataforgood.fb.com/map.html" width="1200" height="800" frameBorder="" title="Facebook Map"></iframe>
            </Grid>
            </div>
        </React.Fragment>
    )
}

export default Map;