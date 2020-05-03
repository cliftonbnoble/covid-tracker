import React from 'react';
import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css';
import { fetchData } from './api';
import coronaImage from './images/image.jpg'
import { Typography } from '@material-ui/core';
// import MediaCard from './components/MediaCard/MediaCard';
import ListDivider from './components/ListDivider/ListDivider'
import Map from './components/Map/Map'

class App extends React.Component {

    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData})
    }

    handCountryChange = async (country) => {
        const fetchedData = await fetchData(country)
        
        this.setState({ data: fetchedData, country: country });
        
    }

    render() {
        const { data, country } = this.state;
        return (
        <React.Fragment>
            <div className={styles.banner}>
            <img className={styles.image} src={coronaImage} alt="COVID-19"/>
            </div>
        <div className={styles.container}>
        <h1><span role="img" aria-label="virus">🦠</span>Stat Tracker<span role="img" aria-label="virus">🦠</span></h1>
            <h6 className={styles.highlight}>Viewing Data from: {this.state.country ? this.state.country : "Global"}</h6>
            <Cards data={data}/>
            <Typography variant="button" display="block">For up to the minute stats provided by John Hopkins.  Click on the github link for more information.  <a href="https://github.com/mathdroid/covid-19-api" target="_blank" rel="noopener noreferrer"> <i className="fab fa-github-alt fa-2x"></i></a></Typography>
            <ListDivider  />
            <h7 className={styles.highlight}>Choose from the dropdown to display stats above and graph below.</h7>
            <ListDivider  />
            <CountryPicker handCountryChange={this.handCountryChange} />
            <ListDivider  />
            <Chart data={data} country={country} />
            <ListDivider  />
            <div>
            <Map />
            </div>
            {/* <MediaCard /> */}
        </div>
        </React.Fragment>
        )
    }
}

export default App;