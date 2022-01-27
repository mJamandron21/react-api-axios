async function getCoinList() {
    try{
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=false&price_change_percentage=1h%2C24h%2C7d`)
        const data = await response.json()
        // console.log(data)
        return data;
    }catch(error){
        return error
    }
}

export { getCoinList }