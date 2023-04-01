import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import { getCurrencies, getLatest } from "./API/Api";
import { currency, latestChangeCurrency } from "./Types/types";
import Converter from "./Components/Converter";

function App() {
  const [latestChange, setLatestChange] = useState<Array<latestChangeCurrency>>(
    []
  );
  const [currencyOptions, setCurrencyOptions] = useState<Array<string>>([]);
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("UAH");
  const [exchangeRate, setExchangeRate] = useState<number>(1);
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] =
    useState<boolean>(true);

  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  var myHeaders = new Headers();
  myHeaders.append("apikey", "V4G5NUHP7RmjldVyEcpBo90dKWwPwKSs");

  var requestOptions: RequestInit = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  useEffect(() => {
    getCurrencies().then((data) => {
      let firstCurrency: string;
      if (data) {
        const obj: currency = JSON.parse(data);
        firstCurrency = Object.keys(obj.rates)[0];
        setCurrencyOptions([obj.base, ...Object.keys(obj.rates)]);
        setFromCurrency(obj.base);
        setToCurrency(firstCurrency);
        setExchangeRate(obj.rates.USD);
      }
    });
  }, []);

  useEffect(() => {
    getLatest().then((res) => {
      if (res) {
        const obj: Array<latestChangeCurrency> = JSON.parse(res);
        setLatestChange([...obj]);
      }
    });
  }, []);

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(
        `https://api.apilayer.com/exchangerates_data/latest?base=${fromCurrency}&symbols=${toCurrency}`,
        requestOptions
      )
        .then((res) => res.json())
        .then((data) => setExchangeRate(data.rates[toCurrency]));
    }
  }, [fromCurrency, toCurrency]);

  function handleFromAmountChange(event: React.ChangeEvent<HTMLInputElement>) {
    setAmount(Number(event.target.value));
    setAmountInFromCurrency(true);
  }

  function handleToAmountChange(event: React.ChangeEvent<HTMLInputElement>) {
    setAmount(Number(event.target.value));
    setAmountInFromCurrency(false);
  }

  return (
    <div className="App">
      <Header currentCurrencies={latestChange} />
      <Converter
        currencyOptions={currencyOptions}
        toCurrency={toCurrency}
        fromCurrency={fromCurrency}
        setFromCurrency={(e) => setFromCurrency(e.target.value)}
        setToCurrency={(e) => setToCurrency(e.target.value)}
        handleFromAmountChange={handleFromAmountChange}
        handleToAmountChange={handleToAmountChange}
        fromAmount={fromAmount}
        toAmount={toAmount}
      />
    </div>
  );
}

export default App;
