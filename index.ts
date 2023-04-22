
fetch('https://api.covid19api.com/summary')
  .then(response => response.json())
  .then(data => {
    const countries = data.Countries;
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // Create table headers
    const headers = ['Country', 'Total Confirmed Cases', 'Total Deaths', 'Total Recoveries'];
    const trHeader = document.createElement('tr');
    headers.forEach(header => {
      const th = document.createElement('th');
      th.innerText = header;
      trHeader.appendChild(th);
    });
    thead.appendChild(trHeader);
    table.appendChild(thead);

    // Create table rows
    countries.forEach((country: { Country: string; TotalConfirmed: string; TotalDeaths: string; TotalRecovered: string; }) => {
      const tr = document.createElement('tr');
      const td1 = document.createElement('td');
      td1.innerText = country.Country;
      const td2 = document.createElement('td');
      td2.innerText = country.TotalConfirmed;
      const td3 = document.createElement('td');
      td3.innerText = country.TotalDeaths;
      const td4 = document.createElement('td');
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
  .catch(error => console.log(error));
