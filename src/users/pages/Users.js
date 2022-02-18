import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
    const USERS = [
        { 
            id: '1', 
            name: 'Maruf', 
            image: 'https://miro.medium.com/max/983/1*XHR5lHay6yIzd3LFnU5OnQ.png', 
            places: 3 
        }];

    return <UsersList items={USERS} />
}

export default Users;