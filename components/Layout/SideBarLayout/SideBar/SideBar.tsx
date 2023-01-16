import React from 'react';
import MenuButton from '../../../../components/Base/MenuButton';
import ArrowBackIcon from '@mui/icons-material/FavoriteBorder';
import Image from 'next/image';
import TemplatesSVG from '../../../../assets/svg/templates.svg';
import DesignSVG from '../../../../assets/svg/design.svg';
import SettingsSVG from '../../../../assets/svg/settings.svg';
import styles from './SideBar.module.scss';

const SideBar = () => {

    const menuItems = [
        {
            icon: <ArrowBackIcon />,
            title: 'Select Testimonials'
        },
        {
            icon: <Image style={{color: '#fffc'}} src = {TemplatesSVG} alt = {'Avatar'} />,
            title: 'Templates'
        },
        {
            icon: <Image style={{color: '#fffc'}} src = {DesignSVG} alt = {'Avatar'} />,
            title: 'Design'
        },
        {
            icon: <Image style={{color: '#fffc'}} src = {SettingsSVG} alt = {'Avatar'} />,
            title: 'Settings'
        }
    ]

return (
    <>
        <div className= {`${styles.sideBarContainer}`}>
           <div>
                {
                    menuItems.map((item, index) => {
                        return <MenuButton title = {item.title} icon = {item.icon}/>
                    })
                }
            </div>
        </div>
    </>
)}

export default SideBar;