import { faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CurrencyRow from "./CurrencyRow";

interface ConverterProps {
  currencyOptions: Array<string>;
  toCurrency: string,
  fromCurrency: string,
  setFromCurrency: (e: any) => void,
  setToCurrency: (e: any) => void,
  handleFromAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  handleToAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  fromAmount: number,
  toAmount: number
}

const Converter: React.FC<ConverterProps> = ({
    currencyOptions, fromCurrency, setFromCurrency, handleFromAmountChange, toCurrency, handleToAmountChange, setToCurrency, fromAmount, toAmount
}) => {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <CurrencyRow
          currencyOptions={currencyOptions}
          selectedCurrency={fromCurrency}
          onChangeCurrency={setFromCurrency}
          onChangeAmount={handleFromAmountChange}
          amount={fromAmount}
        />
        <FontAwesomeIcon icon={faMoneyBillTransfer} className='m-2'/>
        <CurrencyRow
          currencyOptions={currencyOptions}
          selectedCurrency={toCurrency}
          onChangeCurrency={setToCurrency}
          onChangeAmount={handleToAmountChange}
          amount={toAmount}
        />
    </div>
  );
};

export default Converter;
