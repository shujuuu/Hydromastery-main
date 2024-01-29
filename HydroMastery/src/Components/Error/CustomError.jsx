import { FaExclamation } from "react-icons/fa";


export default function CustomError({children}) {

    return <div style={{color: 'red'}}>
        <FaExclamation fill="red"/> {children}
    </div>
}