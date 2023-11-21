import React from 'react'
import style from './InsightCardList.module.css'
import SubNavbar from '../common/SubNavbar/SubNavbar'
import InsightCard from '../common/InsightCard/InsightCard'
import InsightList from '../InsightList/InsightList'
import Footer from '../common/Footer/Footer'

const InsightCardList = ({data}) => {
  return (
    <React.Fragment>
    <SubNavbar  
     discription="Browse & discover Gyan videos, expert talks, tips and more from Indian professionals, business owners, startup founders, and more"
     inputPlaceholder="Search Category" 
    />
    <div className='container'>
   <InsightList data={data} />
   </div>
   <Footer/>
    </React.Fragment>
  )
}

export default InsightCardList