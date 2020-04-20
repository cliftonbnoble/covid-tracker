import React from 'react';
import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css';
import { fetchData } from './api';
import coronaImage from './images/image.jpg'
import { Typography } from '@material-ui/core';
import MediaCard from './components/MediaCard/MediaCard';
import ListDivider from './components/ListDivider/ListDivider'

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
        <h1 className={Typography}><span role="img" aria-label="china">🇨🇳🇨🇳🇨🇳</span>China Virus<span role="img" aria-label="vomit">🇨🇳🇨🇳🇨🇳</span></h1>
            <Cards data={data}/>
            <ListDivider  />
            <CountryPicker handCountryChange={this.handCountryChange} />
            <ListDivider  />
            <Chart data={data} country={country} />
            <ListDivider  />
            <MediaCard />
        </div>
        </React.Fragment>
        )
    }
}

export default App;