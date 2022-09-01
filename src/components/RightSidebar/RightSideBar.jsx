import React from 'react'
import Updates from '../Updates/Updates.jsx';
import CollegeReview from '../../CollegeReview/CollegeReview.jsx';

function RightSideBar() {
  return (
    <div className='RightSide'>
        <div>
            <h3>Updates</h3>
            <Updates/>
        </div>
        <div>
            <h3>College Review</h3>
            <CollegeReview/>
        </div>
      
    </div>
  )
}

export default RightSideBar
