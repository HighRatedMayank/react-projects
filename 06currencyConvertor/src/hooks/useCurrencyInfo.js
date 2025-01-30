import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    useEffect(() => {
        const [data, setData] =  useState({})
        //https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => {
            res.json();
        })
        .then((res) => setData(res[currency]))
        console.log(data)
    }, [currency]);

    return data;
}

export default useCurrencyInfo;