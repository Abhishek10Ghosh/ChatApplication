import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type='text' placeholder='Find a user'/>
      </div>
      <div className='userChat'>
        <img src='https://s-media-cache-ak0.pinimg.com/236x/10/d1/ae/10d1aea41f98ea64bcdb899bc7b3fa89.jpg'/>
        <div className='userChatInfo'>
            <span>Mr. Bean</span>
        </div>
      </div>
    </div>
  )
}

export default Search
