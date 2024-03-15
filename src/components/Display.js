import React from 'react'

export default function Display({ language, name }) {
    return (
        <div>
            <label>Hey {name}, Your Language {language}</label>
        </div>
    )
}
