import {FC, useState} from "react";
import {Menu, MenuProps} from 'antd';
import {Link} from "react-router-dom";
import 'antd/dist/antd.css';

const Header:FC = () => {
    const items: MenuProps['items'] = [
        {
            label:(<Link to='/'>Главная</Link>),
            key: 'home'
        },
        {
            label:(<Link to='/products'>Продукты</Link>),
            key: 'products'
        },
        {
            label:(<Link to='/about'>О нас</Link>),
            key: 'about'
        },
        {
            label:(<Link to='/test'>Тестируем материал ui</Link>),
            key: 'test'
        },
    ]
    const [selectedMenuItem, setselectedMenuItem] = useState('test');

    const handleSelectItem = ({key}:{key:string}):void => {
            setselectedMenuItem(key)
    }

    return (
    <header className='header'>
        <Menu
            overflowedIndicator={false}
            items={items}
            mode='horizontal'
            selectedKeys={[selectedMenuItem]}
            onClick={handleSelectItem}
            />
    </header>
    )
}
export  default  Header