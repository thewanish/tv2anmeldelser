import axios from 'axios';

// https request mulig gjennom denne koden til våres api 
// slipper å bruke flere baseurls til endpoint
// tar med ngrok for å ikke bli blokket av CORS deling 
export default axios.create({
    baseURL:'http://localhost:8080',
    headers: {"ngrok-skip-browser-warning": "true"}
});