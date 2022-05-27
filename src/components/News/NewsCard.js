import React from 'react'

export default function NewsCard(props) {
    return (

        <div className='container mx-auto w-80 h-[28rem] text-sm '>
            <div className='newscard container border-green-700 border-2 w-80 h-[28rem] rounded relative newscard'>
                <div className='container'>
                    <img className='h-48 w-full' src={props.urlToImage} />
                </div>
                <hr className='hr' />
                <div className='container p-3 '>
                    <p className='text-xl font-mono'>{props.name}</p>
                    <p className='text-lg font-sans'>{props.title}...</p>
                    <hr />
                    <p className='font-sans'>{(props.description)}...</p>
                    <hr />
                    <p className='text-gray-400'>Published At {props.publishedAt}</p>
                    <button className='absolute bottom-0 bg-green-700 border-2 my-2 border-green-700 rounded text-white p-1 hover:bg-green-200 hover:text-green-700 hover:border-2 hover:border-green-700'><a href={props.url} target='_blank'>Read More</a></button>
                </div>
            </div>

        </div>

    )
}
