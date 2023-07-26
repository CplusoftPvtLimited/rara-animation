import React from 'react'
import './index.css'
import {useState, useEffect} from 'react'
import Pic from '../../assets/imgaes/pic.jpg'
function Fellows() {


    const [fellowsData, setFellowsData] = useState([]);

    useEffect (() => {
        const fetchFellowData = async () => {
            try{
            const response = await fetch ('http://localhost:4500/api/profile/getAllProfiles')
            const data = await response.json();
            setFellowsData(data.profiles);
            console.log('*************Data', fellowsData)
        }
     catch (err) {
        console.error('Error fetching fellows data:', err);
     }
    };
    fetchFellowData ();
}, [])
      
  return (
    <section className='mt-[45px]'>
         {/************************** RAAR Fellow Section ******************************/}
         <div className='top-bar flex justify-between'>
            <div className='flex'>
            <div class="bullet-point"></div>
                 <h2 className='rara-text'>RARAフェロー</h2> 
           </div>
            <h3 className='my-auto'>16 RARA FELLOWS</h3>
         </div>

         {/************************** Profile Section ******************************/}

         <div >
         <div className="fellows-container w-[85%] mx-auto">
        {fellowsData.length === 0 ? (
          <p>Loading...</p>
        ) : (
          fellowsData.map((fellow) => (
            <div key={fellow.id} className="fellow-box">
              <div>
              <img className="thumbnail" src={Pic} alt=""  />
              </div>
              <div className='mt-[25px] pl-[40px]'>
              <h4 >{fellow.name}</h4>
              <p >{fellow.nameEnglish}</p>

              <h6 className='tag'>{fellow.tagLine}</h6>
              </div>
            </div>
            
          ))
        )}
        </div>
      </div>

       {/************************** RARA Associate Fellow Section ******************************/}
       <div className='top-bar flex justify-between'>
            <div className='flex'>
            <div class="bullet-point"></div>
                 <h2 className='rara-text'>RARAフェロー</h2> 
           </div>
            <h3 className='my-auto'>16 RARA FELLOWS</h3>
         </div>

           {/************************** Assosiate Profile Section ******************************/}

           <div >
         <div className="fellows-container w-[85%] mx-auto">
        {fellowsData.length === 0 ? (
          <p>Loading...</p>
        ) : (
          fellowsData.map((fellow) => (
            <div key={fellow.id} className="fellow-box">
              <div>
              <img className="thumbnail" src={Pic} alt=""  />
              </div>
              <div className='mt-[25px] pl-[40px]'>
              <h4 >{fellow.name}</h4>
              <p >{fellow.nameEnglish}</p>

              <h6 className='tag'>{fellow.tagLine}</h6>
              </div>
            </div>
            
          ))
        )}
        </div>
      </div>
    </section>
  )
}

export default Fellows