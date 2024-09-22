class WeatherModel {
    constructor(data) {
        this.temprature = data.main.temp;
        this.city = data.name;
    }
}

export default WeatherModel;