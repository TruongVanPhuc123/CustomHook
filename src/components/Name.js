import React, { useState } from 'react'

export default function Language({ name, setName }) {
    return (
        <div>
            <label>Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    )
}
