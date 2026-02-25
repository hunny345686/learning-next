import SerevrOne from "../component/server-comp-one";

import ClientOne from "../component/client-comp-one ";


export default function InterLeaving() {
    return (
        <div>
            <h2>InterLeaving Components </h2>
            {/* <SerevrOne /> */}
            <ClientOne>
                <SerevrOne />
            </ClientOne>

        </div>

    )
}

