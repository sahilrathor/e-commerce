import { useState } from "react"

const Partners = () => {
    const [partners, _setPartners ] = useState<string[]>([
        'https://placehold.co/200x100',
        'https://placehold.co/200x100',
        'https://placehold.co/200x100',
        'https://placehold.co/200x100',
        'https://placehold.co/200x100',
    ])


    return (
        <div className='w-full min-h-32 bg-blue-200/20 px-12 pb-3 relative flex flex-col '>
            <h1 className='text-lg font-semibold text-center text-slate-800/50'>Partners</h1>
            <div
                className='container pt-0 h-full w-full flex items-center justify-evenly flex-wrap gap-2'>
                {partners.map((partner, index) => (
                    <img key={index} src={partner} alt='logo' className='h-full aspect-[2/1] rounded-md  border-[1px] border-slate-800/40 object-contain' />
                ))}
            </div>
        </div>
    )
}

export default Partners