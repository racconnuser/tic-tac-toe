window.onload = function() {
    const city = [
        'Москва', 
        'Санк-Петербург', 
        'Минск', 
        'Караганда', 
        'Челябинск', 
        'Керчь', 
        'Волгоград', 
        'Самара', 
        'Днепропетровск', 
        'Екатеринбург', 
        'Одесса', 
        'Ухань', 
        'Шымкен', 
        'Нижний Новгород', 
        'Калининград', 
        'Вроцлав', 
        'Ростов-на-дону', 
    ];

    const formSearch = document.querySelector('.form-search'),
          inputCitiesFrom = document.querySelector('.input__cities-from'),
          dropdownCitiesFrom = document.querySelector('.dropdown__cities-from'),
          inputCitiesTo = document.querySelector('.input__cities-to'),
          dropdownCitiesTo = document.querySelector('.dropdown__cities-to'),
          inputDateRepair = document.querySelector('.input__date-repair');

    const showCity = (input, list) => {
        list.textContent = '';
        
        if(input.value !== '') {
            const filterFity = city.filter((item) => {
                const fixItem = item.toLowerCase();
    
                return fixItem.includes(input.value.toLowerCase());
            });
            
            filterFity.forEach((item) => {
                const li = document.createElement('li');
                li.classList.add('dropdown__city');
                li.textContent = item;
                list.append(li);
            });
        }
    };

    inputCitiesFrom.addEventListener('input', () => {
        showCity(inputCitiesFrom, dropdownCitiesFrom)
    });
    
    inputCitiesTo.addEventListener('input', () => {
        showCity(inputCitiesTo, dropdownCitiesTo)
    });

    dropdownCitiesFrom.addEventListener('click', (e) => {
        const target = e.target;

        if(target.tagName.toLowerCase() === 'li' || target.tagName.toUpperCase() === 'LI') {
            inputCitiesFrom.value = target.textContent;
            dropdownCitiesFrom.textContent = '';
        }
    });
    
    dropdownCitiesTo.addEventListener('click', (e) => {
        const target = e.target;

        if(target.tagName.toLowerCase() === 'li' || target.tagName.toUpperCase() === 'LI') {
            inputCitiesTo.value = target.textContent;
            dropdownCitiesTo.textContent = '';
        }
    });
}