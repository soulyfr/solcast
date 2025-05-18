import localenv from "./env";
const api_key = localenv.apiKey;
const dataPromise = fetch(`https://api.nasa.gov/insight_weather/?api_key=${api_key}&feedtype=json&ver=1.0`).then((response) => {
    if (!response.ok) console.error("couldnt fetch mars data");
    return response.json();
});
export default dataPromise;