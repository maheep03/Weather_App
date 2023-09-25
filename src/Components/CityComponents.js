import styled from 'styled-components';
import img from '../icons/perfect-day.svg';

const WeatherLogo = styled.img`
width: 140px;
height: 140px;
margin: 40px auto;
`

const ChooseCityLabel = styled.span`
color: white;
font-size: 18px;
font-weight: bold;
margin: 10px auto
`

const SearchBox = styled.form`
display: flex;
flex-direction: row;
border: black solid 1px;
border-radius: 2px;
border-color: white;
color: black;
font-size: 18px;
font-weight: bold;
margin: 20px auto
& input{
    padding: 10px;
    font-size: 14px;
    outline: none;
    border: none;
    font-weight: bold;
}

& button{
    padding: 10px;
    font-size: 14px;
    outline: none;
    border: none;
    font-weight: bold;
    color:white;
    background-color: black;
    cursor: pointer;
}
`



const CityComponent = (props) => {
    const {updatecity, fetchWeather} = props;

    return(
        <>
        <WeatherLogo src={img}/>
        <ChooseCityLabel>Find Weather of the City</ChooseCityLabel>
        <SearchBox onSubmit={fetchWeather}>
            <input placeholder="City" onChange={(e)=> updatecity(e.target.value)}
            />
            <button type="submit">Search</button>
        </SearchBox>
        </>
    );
};

export default CityComponent;