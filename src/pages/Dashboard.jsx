export function Dashboard() {
    document.title = 'Dashboard - Sincerely Me'
    return (
        <div className="p-5 sm:p-10">
            <div className="flex sm:flex-col justify-center items-center sm:items-start gap-5 sm:gap-10 mb-10">
                <div>
                    <img src="src/assets/images/logo.png" className="w-10"></img>
                </div>
                <div className="text-[var(--primary-color)] text-3xl sm:flex sm:flex-col justify-center gap-2 sm:gap-3">
                    <i className='bx  bxs-home-heart cursor-pointer'  ></i> 
                    <i className='bx  bxs-plus-square cursor-pointer'  ></i> 
                    <i className='bx  bxs-grid-search cursor-pointer'  ></i> 
                    <i className='bx  bxs-info-circle cursor-pointer'  ></i> 
                </div>
            </div>
        </div>
    )
}