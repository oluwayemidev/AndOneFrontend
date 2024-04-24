import React, { useState } from 'react'
import i18next from '../i18n'

function LanguageSelector() {

    const [selectedLanguage, setSelectedLanguage] = useState(i18next.language)

    const chooseLanguage = (e) => {
        e.preventDefault()
        i18next.changeLanguage(e.target.value)
        setSelectedLanguage(e.target.value)
    }

    return (
        <select defaultValue={selectedLanguage} onChange={chooseLanguage}>
            <option value="en">English</option>
            <option value="de">German</option>
            <option value="it">Italian</option>
            <option value="zh">Chinese</option>
            <option value="pt">Portuguese</option>
            <option value="es">Spanish</option>
            <option value="ar">Arabic</option>
            <option value="fr">French</option>
        </select>
    )
}

export default LanguageSelector
