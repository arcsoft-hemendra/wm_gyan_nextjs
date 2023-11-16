import Link from 'next/link'
import React from 'react'
import style from './CategoryCard.module.css'
import ScrollContainer from "react-indiana-drag-scroll";

const CategoryCard = ({ data, URL }) => {
    return (
        <React.Fragment>
            {
                data?.slice(0, 3)?.map((item, index) => (
                    <Link key={index} href={`/categories/${item.category}`} className={`${style.cat_link} ${style.category_d}`} >
                        <img
                            className={style.catimage}
                            src={`${URL}/images/gyan_category/${item.category}.png`}
                            alt={`${item.category} imageIcon`}
                        />
                    </Link>
                )
                )
            }
            <ScrollContainer className={style.mobile_link}>
                {
                    data?.slice(0, 3)?.map((item, index) => ( 
                        <div className={style.mobile_margin}>
                            <Link key={index} href={`/categories/${item.category}`} className={`${style.cat_link_mobile} ${style.category_m}`} >
                                <img
                                    className={style.catimage}
                                    src={`${URL}/images/gyan_category/${item.category}.png`}
                                    alt={`${item.category} imageIcon`}
                                />
                            </Link> 
                            </div>
                    )
                    )
                }
            </ScrollContainer>

        </React.Fragment>
    )
}

export default CategoryCard