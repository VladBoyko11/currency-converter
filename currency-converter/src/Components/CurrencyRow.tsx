import React from 'react'

interface CurrencyRowProps {
    currencyOptions: Array<string>,
    selectedCurrency: string,
    onChangeCurrency: (event: any) => void,
    onChangeAmount: (event: any) => void,
    amount: number
}

const CurrencyRow: React.FC<CurrencyRowProps> = ({currencyOptions, selectedCurrency, onChangeCurrency, onChangeAmount, amount}) => {
  return (
    <div className='d-flex justify-content-center'>
      <input type="number" className='input' value={amount} onChange={onChangeAmount} />
      <select className='form-select' value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}

export default CurrencyRow