import { HiCursorClick } from "react-icons/hi"


export function VideoGallery() {
    return (
        <>
            <div className="md:flex items-center justify-between w-2/3 mt-28 mx-auto max-w-screen-xl gap-2 p-4">
                <div className="">
                    <div className="w-full border-8 border-secondary">
                        <video width="320" height="240" className="h-full object-cover" muted controls loop autoPlay>
                            <source src="https://res.cloudinary.com/dwpxbyawm/video/upload/v1685418957/MR%20GLAZIER%20NYC/ShowerDoor_MrGlazierNYC_b4ovz0.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                <div className="mt-6 md:mt-0">
                    <div className="w-full border-8 border-secondary">
                        <video width="320" height="240" className="h-full object-cover" muted controls loop autoPlay>
                            <source src="https://res.cloudinary.com/dwpxbyawm/video/upload/v1685418957/MR%20GLAZIER%20NYC/WindowRestoration_o4nl5y.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
 
        </>
    );
}


