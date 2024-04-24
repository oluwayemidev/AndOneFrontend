import React from 'react'
import { useTranslation } from 'react-i18next'

function Sidebar() {
    const { t } = useTranslation()

    return (
        <div style={{marginTop: "10px"}}>
            <button>{t("Home")}</button>
            <button>{t("Contact")}</button>
            <button>{t("About")}</button>
        </div>
    )
}

export default Sidebar
