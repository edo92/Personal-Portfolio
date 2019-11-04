import React from 'react';
import { Icon, Button, Badge } from 'antd';

const HeighlightButton = props => {
    return (
        <Button selected onClick={ props.action }>
            <Badge count={ props.count }
                style={{ boxShadow: '0 0 0 1px #d9d9d9 inset',backgroundColor: '#fff', color: '#999'}}
            />
            <Icon style={{ color: props.selected ? 'blue': null }} type={ props.icon }/>
        </Button>
    )
};

export default HeighlightButton;