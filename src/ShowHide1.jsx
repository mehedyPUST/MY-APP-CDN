import { useState } from "react"

export default function ShowHide1() {
    const [isVisible, setIsVisible] = useState(false);

    const showText = () => {
        setIsVisible(true);
    }
    const hideText = () => {
        setIsVisible(false);
    }

    return (


        <div className="mx-auto flex flex-col  justify-center bg-white p-4 ">

            <div className="bg-green-500 p-4 text-white rounded-md">
                {isVisible && <p>Hellow, React Learner!</p>}
            </div>
            <div className="mx-auto flex gap-4 justify-center bg-white p-4 w-[50vw]" >

                <button onClick={showText} className=" flex-1 btn btn-primary" disabled={isVisible}>Show</button>
                <button onClick={hideText} className=" flex-1 btn btn-primary" disabled={!isVisible} >Hide </button>
            </div>
        </div>
    )
}