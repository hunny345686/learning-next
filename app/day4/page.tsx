/**
 * - Static MetaData
 * - Metadata will not work in client Component 
 * - we can not use Both static and dynamic metadata in same component 
 *  */

import Counter from "./Conter"
export const metadata = {
    title: "Learing Metadata",
    description: "Learing Metadata to change the matadata at page level",
}

/**
 * - Dynamic MetaData
 * - params you will get as props
 * - Metadata will not work in client Component 
 * - we can not use Both static and dynamic metadata in same component 
 *  */

export const generateMetadata = async ({ param }) => {
    const id = await param.id
    return {
        title: "Learing Metadata Daynamic" + id,
    }
}


const MataData = () => {
    return (
        <div>
            <h2>About MataData</h2>
            {/* In this way MetaData will work */}
            <Counter />
        </div>

    )
}

export default MataData