import React from 'react'

import Cart from '../Cart/Cart'

export default function Orders() {
    // const IsUserAuthenticated=useSelector((state)=>state.protectedRoute)

    return (

        <div>
            if(IsUserAuthenticated===true){
                <Cart />
            }

        </div>
    )
}
