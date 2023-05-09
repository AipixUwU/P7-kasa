import { useState } from 'react'

function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="collapse">
            <div className="collapse-title">
                <span>{title}</span>
                <span onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <i class="fa-solid fa-chevron-up"></i>
                        : <i class="fa-solid fa-chevron-down"></i>}
                </span>
            </div>
            <div className="collapse-description" style={{ display: isOpen ? '' : 'none' }}>
                {children}
            </div>
        </div>
    )
}

export default Collapse