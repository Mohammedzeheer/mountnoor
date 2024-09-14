'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";
import { categories, itemsByCategory } from '../data/data.js'
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter';

function Result() {
  const [dbResults, setDbResults] = useState([])
  const [displayedResult, setDisplayedResult] = useState([])
  const [notUploaded, setNotUploaded] = useState(false)
  const [category, setCategory] = useState('')
  const [item, setItem] = useState('')

  const fetchResults = async () => {
    try {
      const res = await axios.get('/api/results/');
      const fetchedResults = res.data.results;
      setDbResults(fetchedResults);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchResults();
  }, [])

  // useEffect(() => {
  //   if (dbResults.length > 0) {
  //     setNotUploaded(false);
  //     const filteredResults = dbResults.filter(result => result.category === category && result.item === item);
  //     setDisplayedResult(filteredResults);
  //     console.log(`displayedResult----------------`, displayedResult)
  //     if (filteredResults.length === 0) {
  //       setNotUploaded(true);
  //     }
  //   }
  // }, [item, category, dbResults]);

  useEffect(() => {
    if (Array.isArray(dbResults) && dbResults.length > 0) {
      setNotUploaded(false);
      const filteredResults = dbResults.filter(result => result.category === category && result.item === item);
      setDisplayedResult(filteredResults);
      if (filteredResults.length === 0) {
        setNotUploaded(true);
      }
    }
  }, [item, category, dbResults]);
  

  return (
    <div className="w-full p-6 px-12 lg:px-36 md:px-24">
      <div className="flex md:flex-row flex-col md:justify-between space-y-1.5 md:space-y-0 ">
        <div className="flex flex-col items-start">
          <label htmlFor="" className="text-lg">Category</label>
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setItem('');
            }}
            className="bg-black w-full text-black-600 md:text-lg p-2 py-3 md:p-3 font-medium  md:px-8 rounded">
            <option value="">Select Category</option>
            {categories.map((cat, i) => <option key={i} value={cat}>{cat}</option>)}
          </select>
        </div>
        <div className="flex flex-col items-start">
          <label className="text-lg" htmlFor="">Item</label>
          <select
            value={item}
            onChange={(e) => setItem(e.target.value)}
            className="bg-black w-full py-3 text-black-600 md:text-lg p-2 md:p-3 font-medium  md:px-8 rounded">
            <option value="">Select Item</option>
            {category && itemsByCategory[category].map((item, i) => <option key={i} value={item}>{item}</option>)}
          </select>
        </div>
      </div>

      <div className="mt-0 md:mt-8 ">
        {displayedResult.length == 1 && <div className="flex flex-col w-full pt-4">
          <div className="flex flex-col md:flex-row p-8 gap-4">
            <div className="flex items-center gap-5">
              <h1 className="text-xl font-semibold ">1</h1>
              <div className="-space-y-2">
                <h1 className="text-2xl font-bold">{capitalizeFirstLetter(displayedResult[0].firstName)}</h1>
                <h1>{displayedResult[0].firstTeam}</h1>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <h1 className="text-xl font-semibold">2</h1>
              <div className="-space-y-2">
                <h1 className="text-2xl font-bold">{capitalizeFirstLetter(displayedResult[0].secondName)}</h1>
                <h1>{displayedResult[0].secondTeam}</h1>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <h1 className="text-xl font-semibold">3</h1>
              <div className="-space-y-2">
                <h1 className="text-2xl font-bold">{capitalizeFirstLetter(displayedResult[0].thirdName)}</h1>
                <h1>{displayedResult[0].thirdTeam}</h1>
              </div>
            </div>
          </div>
        </div>}

        {item === '' && <h1 className='pt-4'>Please Select Your Item</h1>}
        {notUploaded && item ? <h1 className='pt-4'>Sorry.. This result isn&apos;t uploaded yet.</h1> : null}
      </div>
    </div>
  )
}

export default Result