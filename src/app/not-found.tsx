export default function Notfound(){
    return(
        <div className="text-center justify-items-center w-full h-screen p-48">
            <div>
               <h1 className="text-9xl font-extrabold text-green-900">Oops!</h1>
            </div>
            <div>
                <h1 className="flex text-4xl p-10 text-red-950 underline ">Page Not Found</h1>
            </div>
            
            <div className="flex text-3xl p-10 text-center from-orange-950 underline">
               <p >The page you are looking for does not exist.</p>
            </div>
        </div>
    
    );
}