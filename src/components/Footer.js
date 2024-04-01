import React from 'react'
import { useTranslation } from "react-i18next";

export const Footer = () => {
    
  const { t } = useTranslation();

  return (
    <div className='content gray-text footer'>
        <div style={{paddingTop: '120px'}}>
        <p>{t("about")}</p>
    </div>
        <hr/>
        <div className='footer-content'>
            <div className='footer-content-row'>
                <p>Copyright © 2024</p>
                {/* <a href=''>О проекте</a> */}
                <a href='https://github.com/lletov/nohello-react' target='_blank'>
                    {t("github_page")} GitHub</a>
            </div>
            <div>
                {t("language")}
            </div>
        </div>
    </div>
  )
}
