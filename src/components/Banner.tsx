import React from 'react'
import { DialogMessage } from './DialogMessage'
import { useTranslation } from "react-i18next";

export const Banner = () => {
    const { t } = useTranslation();
  return (
    <div className='content banner'>
        <div className='h2-content'>
            <h1>no hello</h1>
            <p className='gray-text'>
                {t("short_description")}
            </p>
        </div>
        <div className='banner-content'>
            <div className='banner-column'>
                <h3>{t("instead")}</h3>
                <div className='dialog'>
                    <DialogMessage
                        user={'left'}
                        tone={'wrong'}
                        text={t("hello")}
                    />
                    <DialogMessage
                        user={'right'}
                        tone={'wrong'}
                        text={t("hello")}
                    />
                    <DialogMessage
                        user={'left'}
                        tone={'wrong'}
                        text={t("have_a_minute_q")}
                    />
                    <DialogMessage
                        user={'right'}
                        tone={'wrong'}
                        text={t("yes")}
                    />
                    <DialogMessage
                        user={'left'}
                        tone={'wrong'}
                        text={t("meeting_time_q")}
                    />
                    <DialogMessage
                        user={'right'}
                        tone={'wrong'}
                        text={t("meeting_time")}
                    />
                </div>
            </div>
            
            <div className='vertical-line-div'></div>
            <div className='banner-column'>
                <h3>{t("try_use")}</h3>
                <div className='dialog'>
                    <DialogMessage
                        user={'left'}
                        tone={'true'}
                        text={t("long_hello")}
                    />
                    <DialogMessage
                        user={'right'}
                        tone={'wrong'}
                        text={t("long_answer")}
                    />
                </div>
                
            </div>
        </div>
        {/* <a href='#reasons'><h6 className='gray-text' id='find-more-link'>{t("find_more")}</h6></a> */}
    </div>
  )
}
