import styles from "../styles/Header.module.scss"
import { latestChangeCurrency } from "../Types/types"

interface HeaderProps {
    currentCurrencies: Array<latestChangeCurrency>
}

const Header: React.FC<HeaderProps> = ({currentCurrencies}) => {

    return (
    <header>
        <h1>Currency Converter</h1>
        <div className={styles.currentCurrency}>
            {currentCurrencies.map((item, index) => {  
            if(item.cc === "USD" || item.cc === "EUR") {
                return <div key={index}>{item.cc + ": " + item.rate}</div>
            }
            return null
            })}
        </div>
    </header>)    
}

export default Header