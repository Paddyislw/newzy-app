import React, { useEffect } from 'react'
import NewsCard from './NewsCard'
import { useState } from 'react';
import Navbar from '../Navbar';
export default function NewsPage(props) {
    const api1 = '7c8bea014c6d4e1eaaa65c0853a865c2';
    const [articles, setArticles] = useState([]);
    const [totalResults, setTotalResults] = useState('');
    const [page, setPage] = useState(1);
    const [disablePrev, setDisablePrev] = useState(true)
    const [disableNext, setDisableNext] = useState(false)
    const [loading, setLoading] = useState(true);
    let pageSize = 12;
    let className = ' w-32 bg-green-700 border-2 my-2 border-green-700 rounded text-white p-1 hover:bg-green-200 hover:text-green-700 hover:border-2 hover:border-green-700'
    const [disP, setDisP] = useState('cursor-not-allowed');
    const [disN, setdisN] = useState('');
    const [searchLoad, setsearchLoad] = useState(false);
    const [text, setText] = useState('');
    const [noresult, setNoresult] = useState(0);
    const nextHandler = () => {
        if (page < maxPage && page !== maxPage - 1) {
            setPage(page + 1);
            setDisablePrev(false)
            setDisableNext(false)
            setDisP('')
        }
        else if (page === (maxPage - 1)) {
            setPage(page + 1);
            setDisableNext(true)
            setDisP('')
            setdisN('cursor-not-allowed')
        }
    }
    const previousHandler = () => {
        if (page !== 1) {
            setPage(page - 1);
            setDisableNext(false)
            setDisP('')
            setdisN('')
        }
        if (page == 2) {
            setPage(page - 1)
            setDisablePrev(true)
            setDisP('cursor-not-allowed')
            setdisN('')
        }
    }
    const frontHandler = ()=>{
        setPage(1);
    }
    const lastHandler = ()=>{
        setPage(maxPage);
    }
    const onChange = (e)=>{
        setText(e.target.value);
        console.log('text is changing')
        if(e.target.value===''){
            setsearchLoad(false)
        }
    }
    const onClick = ()=>{
        setsearchLoad(true);
        console.log('Button is pressed')
    }

    useEffect(() => {
        const getData = async () => {
            try {
                const fetchApi = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${api1}&pageSize=${pageSize}&page=${page}&category=${props.category}`);
                const data = await fetchApi.json();
                setArticles(data.articles)
                setTotalResults(data.totalResults)
                console.log('han vai')
                console.log(page);
                setLoading(false)
            }
            catch (error) {
                console.log(error)
            }
        }
        getData();
    }, [page])
    let maxPage = Math.ceil((totalResults / pageSize));
    // console.log(page);
    // console.log('han')
    // console.log(`${articles}-articles`)
    let arr = articles.filter((e)=>{
       if(e.description && e.description.toLocaleLowerCase().includes(text.toLocaleLowerCase()) || e.title && e.title.toLocaleLowerCase().includes(text.toLocaleLowerCase()))
       {
           return true
        }
     
    })
    
   
    // console.log(arr)
    if (!loading && !searchLoad ) {
        return (
            <>
                <Navbar text={text} onChange={onChange} onClick={onClick}/>
                <p className='font-mono text-5xl text-center my-7 text-green-900'>NEWS HEADLINES</p>
                <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 container justify-between mx-auto sm:grid-cols-1 gap-x-3' >
                    {articles.map((e) => {
                        return <div className='flex m-5 ' key={e.url}><NewsCard description={e.description && e.description.slice(0, 140)} title={e.title && e.title.slice(0, 40)}
                            urlToImage={e.urlToImage ? e.urlToImage : 'https://cdn.sanity.io/images/0vv8moc6/act/d198c3b708a35d9adcfa0435ee12fe454db49662-640x400.png'} url={e.url} publishedAt={e.publishedAt} name={e.source.name} /></div>
                    })}
                </div>
                <div className='flex justify-between my-8'>
                    <div className='flex '>
                        <button type='button' onClick={frontHandler} className={`${className} front mx-2`}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                        </svg></button>
                        <button type="button" onClick={previousHandler} disabled={disablePrev} className={`${className} ${disP} h-25`}>Previous</button>
                    </div>
                    <div className='flex'>
                        <button type="button" onClick={nextHandler} disabled={disableNext} className={`${className} ${disN}`}>Next</button>
                        <button type='button' onClick={lastHandler} className={`${className} last mx-2 `}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                        </svg></button>
                    </div>
                </div>
            </>
        )
    }
    else if (searchLoad){
        return (
            <>
                <Navbar text={text} onChange={onChange} onClick={onClick}/>
                <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 container justify-between mx-auto sm:grid-cols-1 gap-x-3' >
                    {arr.map((e) => {     
                        return <div className='flex m-5 ' key={e.url}><NewsCard description={e.description && e.description.slice(0, 140)} title={e.title && e.title.slice(0, 40)}
                            urlToImage={e.urlToImage ? e.urlToImage : 'https://cdn.sanity.io/images/0vv8moc6/act/d198c3b708a35d9adcfa0435ee12fe454db49662-640x400.png'} url={e.url} publishedAt={e.publishedAt} name={e.source.name} /></div>
                    }
                    )===[]?<p>NO RESULTS</p>:arr.map((e) => {     
                        return <div className='flex m-5 ' key={e.url}><NewsCard description={e.description && e.description.slice(0, 140)} title={e.title && e.title.slice(0, 40)}
                            urlToImage={e.urlToImage ? e.urlToImage : 'https://cdn.sanity.io/images/0vv8moc6/act/d198c3b708a35d9adcfa0435ee12fe454db49662-640x400.png'} url={e.url} publishedAt={e.publishedAt} name={e.source.name} /></div>
                    }
                    )        
                    }
                </div>
                <div className='flex justify-between my-8'>
                    <div className='flex '>
                        <button type='button' onClick={frontHandler} className={`${className} front mx-2`}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                        </svg></button>
                        <button type="button" onClick={previousHandler} disabled={disablePrev} className={`${className} ${disP} h-25`}>Previous</button>
                    </div>
                    <div className='flex'>
                        <button type="button" onClick={nextHandler} disabled={disableNext} className={`${className} ${disN}`}>Next</button>
                        <button type='button' onClick={lastHandler} className={`${className} last mx-2 `}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                        </svg></button>
                    </div>
                </div>
            </>
        )
    }
    
    else {
        return (
            <p>LOADING</p>
        )
    }

}
