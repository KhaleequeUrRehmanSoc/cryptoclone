const CutsomBtn = ({children,variant,...rest}) => {
    return (
        <>
            {
                variant === "primary" ? 
                <>
                    <button className='my-2 outline-0 border-0 rounded-[1.875rem] bgBlueGradient text-white text-center py-2 px-4 text-base font-bold flex justify-center items-center gap-2' { ...rest} > 
                    {children && children}
                    </button>
                </>
                :
                <>
                    <button className='my-2 outline-0 border-0 rounded-[1.875rem] bg-[#0f1c39] text-white text-center py-2 px-4 text-base font-bold flex justify-center items-center gap-2' { ...rest} > 
                        {children && children}
                    </button>
                </>
            }
        </>
        
    )
}

export default CutsomBtn