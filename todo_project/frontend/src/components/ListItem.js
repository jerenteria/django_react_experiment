import React from 'react';


const ListItem = ({item}) => {
    return (
        <div>
            <h3>{item.description}</h3>
        </div>
    )
};

export default ListItem;