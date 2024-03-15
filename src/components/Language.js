import React, { useState } from 'react'

export default function Language({ language, setLanguage }) {
    return (
        <div>
            <label>Language</label>
            <input type="text" value={language} onChange={(e) => setLanguage(e.target.value)} />
        </div>
    )
}
