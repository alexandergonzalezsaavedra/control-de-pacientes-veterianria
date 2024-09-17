import React from 'react'

const MenssageError = ({ children }: { children: React.ReactNode }) => {
    return (
        <p className='text-center my-4 bg-red-100 text-red-800 p-3 uppercase text-xs rounded-lg'>
            {children}
        </p>
    )
}

export default MenssageError
