import React from 'react'
import './index.css'
import {useState, useEffect} from 'react'

function Fellows() {


    const [fellowsData, setFellowsData] = useState([]);

    useEffect (() => {
        const fetchFellowData = async () => {
            try{
            const response = await fetch ('http://localhost:4500/api/profile/getAllProfiles')
            const data = await response.json();
            setFellowsData(data.profiles);
        }
     catch (err) {
        console.error('Error fetching fellows data:', err);
     }
    };
    fetchFellowData ();
}, [])
      
  return (
    <section className='mt-[45px]'>
         {/************************** Fellow Section ******************************/}
         <div className='top-bar flex justify-between'>
            <div className='flex'>
            <div class="bullet-point"></div>
                 <h2 className='rara-text'>RARAフェロー</h2> 
           </div>
            <h3 className='my-auto'>16 RARA FELLOWS</h3>
         </div>

         {/************************** Profile Section ******************************/}

         <div>
        {fellowsData.length === 0 ? (
          <p>Loading...</p>
        ) : (
         fellowsData.map((fellow) => (
            <div> 
                Hii
            </div>
         ))
        )}
      </div>
    </section>
  )
}

export default Fellows