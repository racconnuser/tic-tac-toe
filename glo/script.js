window.onload = function() {

    const citiesApi = 'http://api.travelpayouts.com/data/ru/cities.json';
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const calendar = 'http://min-prices.aviasales.ru/calendar_preload';
    const API_KEY = '9009c465eeb1c886ab90ef6622f3016c';
    
    let city = [];

    const formSearch = document.querySelector('.form-search');
    const inputCitiesFrom = document.querySelector('.input__cities-from');
    const dropdownCitiesFrom = document.querySelector('.dropdown__cities-from');
    const inputCitiesTo = document.querySelector('.input__cities-to');
    const dropdownCitiesTo = document.querySelector('.dropdown__cities-to');
    const inputDateRepair = document.querySelector('.input__date-repair');

    const getData = (url, callback) => {
        const request = new this.XMLHttpRequest();

        request.open('GET', url);

        request.addEventListener('readystatechange', () => {
            if(request.readyState !== 4) return;

            if(request.status === 200) {
                callback(request.response);
            } else {
                console.error(request.status);
            }
        })
        request.send();
    };
  
    const showCity = (input, list) => {
        list.textContent = '';
        
        if(input.value !== '') {
            const filterFity = city.filter((item) => {
                const fixItem = item.name.toLowerCase();

                return fixItem.includes(input.value.toLowerCase());
            });
            
            filterFity.forEach((item) => {
                const li = document.createElement('li');
                li.classList.add('dropdown__city');
                li.textContent = item.name;
                list.append(li);
            });
        }
    };

    const selectrCity = (event, input, list) => {
        const target = event.target;

        if(target.tagName.toLowerCase() === 'li') {
            input.value = target.textContent;
            list.textContent = '';
        }
    }

    inputCitiesFrom.addEventListener('input', () => {
        showCity(inputCitiesFrom, dropdownCitiesFrom)
    });
    
    inputCitiesTo.addEventListener('input', () => {
        showCity(inputCitiesTo, dropdownCitiesTo)
    });

    dropdownCitiesFrom.addEventListener('click', (event) => {
        selectrCity(event, inputCitiesFrom, dropdownCitiesFrom);
    });
    
    dropdownCitiesTo.addEventListener('click', (event) => {
        selectrCity(event, inputCitiesTo, dropdownCitiesTo);
    });
    
    getData(proxy + citiesApi, (data) => {
        city = JSON.parse(data).filter(item => item.name);
    });
}