'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { FaArrowCircleDown, FaArrowCircleUp } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '@/components/Navbar';
import { itemsByCategory, divisions } from '@/data/data';

const Page =() => {
  const [result, setResult] = useState({
    category: '',
    item: '',
    firstName: '',
    firstTeam: '',
    secondName: '',
    secondTeam: '',
    thirdName: '',
    thirdTeam: '',
  });

  const [after, setAfter] = useState('');
  const [teamPoints, setTeamPoints] = useState([
    { team: 'Kasaragod', points: '' },
    { team: 'Manjeshwar', points: '' },
    // { team: 'Uppala', points: '' },
    // { team: 'Badiadka', points: '' },
    // { team: 'Mulleria', points: '' },
    // { team: 'Kanhangad', points: '' },
    // { team: 'Thrikkarippur', points: '' },
    // { team: 'Kumbala', points: '' },
    // { team: 'Uduma', points: '' },
  ]);

  const handleTeamPointsChange = (index, newPoints) => {
    const updatedTeamPoints = teamPoints.map((team, i) =>
      i === index ? { ...team, points: newPoints } : team
    );
    setTeamPoints(updatedTeamPoints);
  };

  const [isResult, setIsResult] = useState(false);
  const [isTeamPoints, setIsTeamPoints] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const categories = Object.keys(itemsByCategory);

  let items = itemsByCategory[result.category] || [];

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('/api/results', {
        category: result.category,
        item: result.item,
        firstName: result.firstName,
        firstTeam: result.firstTeam,
        secondName: result.secondName,
        secondTeam: result.secondTeam,
        thirdName: result.thirdName,
        thirdTeam: result.thirdTeam,
      });
      if (res.statusText === 'OK') {
        toast.success('Successfully uploaded.');
      }

      setResult({
        category: '',
        item: '',
        firstName: '',
        firstTeam: '',
        secondName: '',
        secondTeam: '',
        thirdName: '',
        thirdTeam: '',
      });
    } catch (error) {
      toast.error('Failed to add the participant');
    }
  };

  const teamPointSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/teampoints', { teams: teamPoints, after });
      if (res.statusText === 'OK') {
        toast.success('Team points updated successfully.');
      }
    } catch (error) {
      toast.error('Failed to update team points');
    }
  };

  return (
    <div className='min-h-screen text-primary'>
      <Navbar />
      <div className='pt-[32%] lg:pt-[19vh] md:pt-[19vh] p-6 px-12 md:px-24 lg:px-24 py-20 w-full space-y-20'>
        {/* result */}
        <div className='bg-lightYellow flex flex-col space-y-12'>
          <button onClick={() => {
            setIsResult(!isResult);
            setIsTeamPoints(false);
          }} className='font-semibold text-xl bg-black text-primary py-3 rounded-xl flex items-center justify-center gap-2 duration-150 shadow-xl'>
            Upload Results {!isResult ? <FaArrowCircleDown size={25} /> : <FaArrowCircleUp size={25} />}
          </button>
          {isResult &&
            <div className='flex flex-col space-y-3 px-14 pb-8 duration-150' data-aos='fade-down'>
              <div className='flex gap-3 md:gap-24 w-full'>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="result Number" className='font-semibold text-lg text-primary'>Category</label>
                  <select
                    required
                    value={result.category}
                    onChange={(e) => setResult({ ...result, category: e.target.value })}
                    className='bg-lightYellow h-full hover:bg-lightYellow p-2 rounded border-2' name="" id="">
                    <option value="">Select Category</option>
                    {categories.map((category, i) => <option key={i} value={category}>{category}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="result Number" className='font-semibold text-lg text-primary'>Item</label>
                  <select
                    required
                    value={result.item}
                    onChange={(e) => setResult({ ...result, item: e.target.value })}
                    className='bg-lightYellow h-full hover:bg-lightYellow p-2 rounded border-2 w-fit' name="" id="">
                    <option value="">Select Item</option>
                    {items.map((item, i) => <option key={i} value={item}>{item}</option>)}
                  </select>
                </div>
              </div>

              {/* <div className='flex flex-col md:flex-grow gap-4 pt-5 md:flex-row'> */}
              {/* first */}
              <div className='flex flex-col'>
                <h1 className='font-semibold text-lg'>First Place</h1>
                <div className='flex flex-col gap-1 md:flex-row'>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="result Number" className='text-lg'>Name</label>
                    <input
                      required
                      value={result.firstName}
                      onChange={(e) => setResult({ ...result, firstName: e.target.value })}
                      className='bg-lightYellow hover:bg-lightYellow p-2 rounded border-2' type="text" />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="result Number" className='text-lg'>Team</label>
                    <select
                      required
                      value={result.firstTeam}
                      onChange={(e) => setResult({ ...result, firstTeam: e.target.value })}
                      className='bg-lightYellow h-full hover:bg-lightYellow p-2 rounded border-2' name="" id="">
                      <option value="">Select Team</option>
                      {divisions.map((division, i) => <option key={i} value={division}>{division}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              {/* second */}
              <div className='flex flex-col'>
                <h1 className='font-semibold text-lg'>Second Place</h1>
                <div className='flex flex-col gap-1 md:flex-row'>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="result Number" className='text-lg'>Name</label>
                    <input
                      required
                      value={result.secondName}
                      onChange={(e) => setResult({ ...result, secondName: e.target.value })}
                      className='bg-lightYellow hover:bg-lightYellow p-2 rounded border-2' type="text" />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="result Number" className='text-lg'>Team</label>
                    <select
                      required
                      value={result.secondTeam}
                      onChange={(e) => setResult({ ...result, secondTeam: e.target.value })}
                      className='bg-lightYellow h-full hover:bg-lightYellow p-2 rounded border-2' name="" id="">
                      <option value="">Select Team</option>
                      {divisions.map((division, i) => <option key={i} value={division}>{division}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              {/* third */}
              <div className='flex flex-col'>
                <h1 className='font-semibold text-lg'>Third Place</h1>
                <div className='flex flex-col gap-1 md:flex-row'>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="result Number" className='text-lg'>Name</label>
                    <input
                      required
                      value={result.thirdName}
                      onChange={(e) => setResult({ ...result, thirdName: e.target.value })}
                      className='bg-lightYellow hover:bg-lightYellow p-2 rounded border-2' type="text" />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="result Number" className='text-lg'>Team</label>
                    <select
                      required
                      value={result.thirdTeam}
                      onChange={(e) => setResult({ ...result, thirdTeam: e.target.value })}
                      className='bg-lightYellow h-full hover:bg-lightYellow p-2 rounded border-2' name="" id="">
                      <option value="">Select Team</option>
                      {divisions.map((division, i) => <option key={i} value={division}>{division}</option>)}
                    </select>
                  </div>
                </div>
              </div>
              {/* </div> */}

              <button
                onClick={onSubmit}
                className='bg-primary hover:bg-green-800 text-white font-semibold py-2 px-4 rounded-lg mt-4'
              >
                Submit Results
              </button>
            </div>
          }
        </div>

        {/* Team Points */}
        <div className='bg-lightYellow flex flex-col space-y-12'>
          <button onClick={() => {
            setIsTeamPoints(!isTeamPoints);
            setIsResult(false);
          }} className='font-semibold text-xl bg-black text-primary py-3 rounded-xl flex items-center justify-center gap-2 duration-150 shadow-xl'>
            Team Points {!isTeamPoints ? <FaArrowCircleDown size={25} /> : <FaArrowCircleUp size={25} />}
          </button>

          {isTeamPoints &&
            <div className='flex flex-col px-14 pb-8' data-aos='fade-down'>
              <div className='flex flex-col gap-2'>
                <label htmlFor="result Number" className='text-lg'>After</label>
                <input
                  value={after}
                  onChange={(e) => setAfter(e.target.value)}
                  className='bg-lightYellow hover:bg-lightYellow p-2 rounded border-2' type="text" />
              </div>

              <div className='grid grid-cols-2 md:grid-cols-3 gap-4 pt-4'>
                {teamPoints.map((team, index) => (
                  <div key={index} className='flex flex-col'>
                    <label htmlFor={`team-${index}`} className='text-lg'>{team.team}</label>
                    <input
                      id={`team-${index}`}
                      value={team.points}
                      onChange={(e) => handleTeamPointsChange(index, e.target.value)}
                      className='bg-lightYellow hover:bg-lightYellow p-2 rounded border-2' type="text"
                    />
                  </div>
                ))}
              </div>

              <button
                onClick={teamPointSubmit}
                className='bg-primary hover:bg-green-800 text-white font-semibold py-2 px-4 rounded-lg mt-4'
              >
                Update Points
              </button>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default Page;