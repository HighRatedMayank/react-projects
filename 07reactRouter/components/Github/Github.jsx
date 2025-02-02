import React from 'react'

function Github() {

    const [data, setData] = useState()
    
    useEffect(() => {
        fetch("https://api.github.com/users/HighRatedMayank")
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setData(data)
        })
        .catch((err) => console.error(err)
        )
    }, [])

    return (
        <>
            <div className='text-3xl bg-gray-600 rounded-lg text-white'>Github followers: {data.followers}
                <img src={data.avatar_url} width={300} />
            </div>
        </>
    )
}

export default Github