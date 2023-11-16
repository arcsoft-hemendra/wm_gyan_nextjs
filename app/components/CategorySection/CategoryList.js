"use client";
import React from 'react'
import MainHeading from '../common/MainHeading/MainHeading'
import style from './CategoryList.module.css'
import LoaderComponent from '../common/Loader/Loader'
import VideoCard from '../common/VideoCard/VideoCard';
import Link from 'next/link';
import CategoryCard from '../common/CategoryCard/CategoryCard';
const CategoryList = ({ data, URL }) => {

    return (
        <React.Fragment>
            <MainHeading title="CATEGORIES" />
            <div className={style.categorymain} >
                <div className={style.categoryContainer}>
                    {!data ? (
                        <div className={style.loaderHeight}>
                            <div className={style.loaderContainer}>
                                <LoaderComponent type={true} />
                            </div>
                        </div>
                    ) : (

                        <CategoryCard data={data} URL={URL} />
                    )

                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default CategoryList;