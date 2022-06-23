import React, { useState, useEffect } from 'react';
import './giftDetails.scss'

export const GiftDetail = (props) => {
    const { ...gift } = props
   
    const [userBanner, setUserBanner] = useState("")
    const [userAvatar, setUserAvatar] = useState("")
    const [userInstagram, setUserInstagram] = useState("")
    const user = gift.user ? {...gift.user} : false;
    console.log(gift)

    useEffect(() => {
        if (user) {
            if (gift.user.banner_url !== "") {
                setUserBanner(gift.user.banner_url)
            }
            if (gift.user.avatar_url !== "") {
                setUserAvatar(gift.user.avatar_url)
            }
            if (gift.user.instagram_url !== "") {
                setUserInstagram(gift.user.instagram_url)
            }
        }

    }, [])

    return (
        <div>

            <div className='banner-user'>
                {user && userBanner !== "" ? <img src={userBanner} height={90} /> : null}
            </div>


            <div className='gift-details-card'>

                <div className='gift-card__gift-cont'>
                    <img src={props.images.downsized_medium.url} className="gift-details__img" width={gift.images.downsized_medium.width} height={gift.images.downsized_medium.height} alt="" />
                </div>

                <div className='gift-card__gift-information-cont'>
                    <div className='gift-card__personal-dates'>
                        {user && userAvatar !== "" ? <img src={userAvatar} width={50} max-height={50} max-width={50} height={50} alt={gift.username} /> : null}
                        <div className='personal-dates'>
                            <h5 className=' gift-card__heading sub-titles'>{gift.username}</h5>
                            {user && userInstagram !== "" ? <a href={userInstagram}>@{gift.username}</a> : null}
                        </div>
                    </div>
                    <h3 className='gift-card__heading title'>{gift.title}</h3>
                    <a className='gift-card__heading sub-titles' href={gift.url}>Gif Url</a>
                    <h3 className='gift-card__heading sub-titles'>Width: {gift.images.downsized_medium.width}</h3>
                    <h3 className='gift-card__heading sub-titles'>Height: {gift.images.downsized_medium.height}</h3>

                    <div className='gift-datail__rating'>
                        <h6 className='gift-datail__rating'> Rating:  {props.rating}</h6>
                    </div>
                </div>

            </div>
        </div>
    )
}