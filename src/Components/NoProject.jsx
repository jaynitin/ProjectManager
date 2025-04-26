


export default function NoProject({toggleWindow}){
    return(
        <>
            <div className="no-projects">
                <img src="src/assets/no-projects.png" alt="no-image" className="w-16 h-16 object-contain mx-auto" />
                <h1>No Projects Selected.</h1>
                <button onClick={toggleWindow} className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">Create Project</button>
            </div>
        </>
    )
}