import { IconContext } from 'react-icons';
import { FiLoader } from 'react-icons/fi';
const PreLoader = () => {
    return <div className="p-4 d-flex justify-content-center align-items-center flex-column" >
        <IconContext.Provider value={{ size: "2rem" }}>
            <FiLoader />
        </IconContext.Provider>
        <small>Loading...</small>
    </div>

}

export default PreLoader;