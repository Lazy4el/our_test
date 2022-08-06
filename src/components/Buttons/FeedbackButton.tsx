import React from 'react'
import { Button} from "@mui/material";
const style = {
    feedbackButton: {
        width: '200px',
        height: '50px',
        display:  { xs: 'none', md: 'block' },
        background: '#2C52B7',
        borderRadius: '24px',
        fontSize:'14px',
        lineHeight:'21px',
        whiteSpace: 'nowrap',
    },

    feedbackButtonAside: {
        width: '150px',
        height: '40px',
        margin: '20px auto',
        padding: '7px',
        background: '#2C52B7',
        borderRadius: '24px',
        fontSize:'14px',
        lineHeight: '21px'
    },
}

function FeedbackButton() {
  return (
    <Button sx={style.feedbackButtonAside} variant="contained">Оставить заявку</Button>
  )
}

export default FeedbackButton