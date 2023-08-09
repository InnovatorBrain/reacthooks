import React, { useContext } from 'react'
import LanguageContext from './LanguageContext'

const TextComponent = () => {
    const Language = useContext(LanguageContext)
    const content = Language === 'en' ? 'Its an English Language' : '今日の天気です'

    return (
        <h3>{content}</h3>
    )
}

export default TextComponent