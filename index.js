fetch('https://api.covid19api.com/summary')
    .then(function (response) { return response.json(); })
    .then(function (data) {
    var countries = data.Countries;
    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');
    // Create table headers
    var headers = ['Country', 'Total Confirmed Cases', 'Total Deaths', 'Total Recoveries'];
    var trHeader = document.createElement('tr');
    headers.forEach(function (header) {
        var th = document.createElement('th');
        th.innerText = header;
        trHeader.appendChild(th);
    });
    thead.appendChild(trHeader);
    table.appendChild(thead);
    // Create table rows
    countries.forEach(function (country) {
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        td1.innerText = country.Country;
        var td2 = document.createElement('td');
        td2.innerText = country.TotalConfirmed;
        var td3 = document.createElement('td');
        td3.innerText = country.TotalDeaths;
        var td4 = document.createElement('td');
        td4.innerText = country.TotalRecovered;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    document.body.appendChild(table);
})
    .catch(function (error) { return console.log(error); });
