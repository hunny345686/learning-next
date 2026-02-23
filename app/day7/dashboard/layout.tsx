// import Notification from "./@notification/page";
// import Revenue from "./@revenue/page";
// import Users from "./@users/page";

export default function Dashboard({ children, users, revenue, notification, login }: {
    children: React.ReactNode,
    users: React.ReactNode, revenue: React.ReactNode, notification: React.ReactNode,
    login: React.ReactNode,
}) {

    const isLogin = true

    return (
        <>
            {
                !isLogin ? login :
                    (
                        <>
                            <div>{children}</div>
                            {/* <Notification />
            <Revenue />
            <Users /> */}
                            <div>
                                {revenue}
                                {users}
                                {notification}

                            </div>
                        </>
                    )
            }

        </>
    )
}