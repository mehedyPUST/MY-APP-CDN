import { useState } from "react"

export default function ShowHide() {
    const [isVisible, setIsVisible] = useState(false);

    const showText = () => {
        setIsVisible(true);
    }

    const hideText = () => {
        setIsVisible(false);
    }

    // OR use a single toggle function:
    // const toggleVisibility = () => {
    //     setIsVisible(!isVisible);
    // }

    return (
        <div className=" bg-base-200 flex items-center justify-center p-4">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body text-center">


                    {/* Conditionally show/hide this content */}
                    {isVisible && (
                        <div className="btn btn-primary mb-6">
                            <span>✨ Hellow ✨</span>
                        </div>
                    )}


                    <div className="flex gap-4 items-center justify-center">
                        <button
                            onClick={showText}
                            className="btn btn-primary flex-1"
                            disabled={isVisible}
                        >
                            Show
                        </button>

                        <button
                            onClick={hideText}
                            className="btn btn-primary flex-1"
                            disabled={!isVisible}
                        >
                            Hide
                        </button>
                    </div>

                    {/* Status indicator */}

                </div>
            </div>
        </div>
    )
}