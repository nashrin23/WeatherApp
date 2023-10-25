import moment from "moment";
import { Icons } from "../assets/constants/global.images";

export const SelectIcn = (key) => {
    switch (key) {
      case "01d":
        return Icons.D01;
      case "01n":
        return Icons.N01;
      case "02d":
        return Icons.D02;
      case "02n":
        return Icons.N02;
      case "03d":
        return Icons.D03;
      case "03n":
        return Icons.N03;
      case "04d":
        return Icons.D04;
      case "04n":
        return Icons.N04;
      case "09d":
        return Icons.D09;
      case "09n":
        return Icons.N09;
      case "10d":
        return Icons.D10;
      case "10n":
        return Icons.N10;
      case "11d":
        return Icons.D11;
      case "11n":
        return Icons.N11;
      case "13d":
        return Icons.D13;
      case "13n":
        return Icons.N13;
      case "50d":
        return Icons.D50;
      case "50n":
        return Icons.N50;
    
      default:
        break;
    }
};

export const KtoC = (kelvin) => {
    const celcius = kelvin - 273;
    return celcius.toFixed(1);
};

export const TempFn = (temp) => {
    const timestamp = temp * 1000; // Convert seconds to milliseconds
    const date = new Date(timestamp);

    const day = moment(date).format('dddd');    
    const ddmm = moment(date).format('L');    
    let arr = ddmm.split('/');
    const ddmmF = arr[0] + "/" + arr[1];

    return {day,ddmmF};
};

export const PeriodFn = (temp) => {
    const timestamp = temp * 1000; // Convert seconds to milliseconds
    const date = new Date(timestamp);

    const ampm = moment(date).format('LT');

    return ampm;
};