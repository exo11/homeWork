const request = new XMLHttpRequest();

request.open('GET', 'https://netology-fbb-store-api.herokuapp.com/weather');
request.send();

request.addEventListener('load', () => {
    setData(JSON.parse(request.responseText));
});