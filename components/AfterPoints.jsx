import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import AOS from 'aos';
import 'aos/dist/aos.css';


function AfterPoints() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [afterOf, setAfterOf] = useState()
  const [teampoints, setTeampoints] = useState([])

  const fetchCurrentStatus = async () => {
    try {
      const res = await axios.get('/api/teampoints/');
      return res.data;
    } catch (error) {
      console.error('Error in fetchCurrentStatus:', error);
      throw error;
    }
  };

  const { data, status } = useQuery({
    queryKey: ['currentStatus'],
    queryFn: fetchCurrentStatus,
  });

  useEffect(() => {
    if (status === 'success') {
      const DbData = data.currentStatus;
      const forafter = DbData.afterOf[0].after;
      const forteam = DbData.totalPoint;
      setAfterOf(forafter);
      let arr = forteam
      arr.sort((a, b) => b.points - a.points);
      setTeampoints(arr);

    }
  }, [data])


  return (
    <div className='w-full p-6 px-12 lg:px-36 md:px-24 min-h-[26rem] md:min-h-24' data-aos="fade-down" >
      {/* <h1 className='font-bold text-4xl'>Team Points <br /><span className='font-medium text-base italic'>After {afterOf} Results Declared</span> </h1> */}
      <h1 className='font-bold text-4xl'>Team Points <br /><span className='font-medium text-base italic'>Final Result</span> </h1>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col lg:flex-row gap-3  md:gap-6'>
          {teampoints.slice(0, 3).map((team, i) => {
            return (

              <div key={i} className='flex relative gap-3 font-bold text-2xl bg-yellow-200 shadow-lg  p-2 px-4 rounded '>
                <div className='bg-green-700 rounded-full w-1'></div>
                {i === 0 && <div className='w-4 absolute -top-1 -right-1 animate-ping bg-orange-700 rounded-full h-4'></div>}
                {/* <div></div> */}
                <h1>{team.team}</h1>
                <h1>{team.points}</h1>
              </div>

            )
          })}
        </div>
        <div className='flex flex-col lg:flex-row pl-[4%] lg:pl-0'>
          {teampoints.slice(3, 9).map((team, i) => {
            return (

              <div key={i} className=' flex pr-5 gap-3 font-medium text-lg'>
                {/* <div></div> */}
                <h1 >{team.team}</h1>
                <h1>{team.points}</h1>
              </div>

            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AfterPoints
