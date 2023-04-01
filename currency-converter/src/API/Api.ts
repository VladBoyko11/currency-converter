export const getCurrencies = (): Promise<string | void> => {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "V4G5NUHP7RmjldVyEcpBo90dKWwPwKSs");
    
    var requestOptions: RequestInit = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };

    return fetch('https://api.apilayer.com/exchangerates_data/latest?symbols=USD%2CEUR&base=UAH', requestOptions)
    .then(response => response.text())
    .catch(error => console.log('error', error));
}

export const getLatest = (): Promise<string | void> => {
    return fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
    .then(response => response.text())
    .catch(error => console.log('error', error));
}

export const getCurrencyConvert = (fromCurrency: string, toCurrency: string): Promise<string | void> => {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "V4G5NUHP7RmjldVyEcpBo90dKWwPwKSs");
    
    var requestOptions: RequestInit = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };

    return fetch(`https://api.apilayer.com/exchangerates_data/latest?base=${fromCurrency}&symbols=${toCurrency}`, requestOptions)
    .then(response => response.json())
    .catch(error => console.log('error', error));
}