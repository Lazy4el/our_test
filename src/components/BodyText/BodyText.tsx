import { Typography } from '@mui/material'
import {bodyText} from '../../interfaces/interfaces'

function BodyText ({text}:bodyText){
    return (<Typography variant='body1' className="BodyText">{text}</Typography>)
} 

export default BodyText