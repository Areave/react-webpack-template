import React from 'react'
import './navigationButton.scss'
import {Types} from '../../utils/types'
import {useNavigate} from 'react-router'

const NavigationButton: React.FC<Types.NavigationButtonProps> = ({title, route}) => {
    const navigate = useNavigate();
    return <button className='navigationButton'
                   onClick={()=>navigate(route)}>
        {title}
    </button>
}

export default NavigationButton;