import { Button} from "@mui/material";

const style = {
    feedbackButtonAside: {
      width: '200px',
      height: '50px',
      display:  { xs: 'none', md: 'block' },
      borderRadius: '10px',
      fontSize:'14px',
      lineHeight:'21px',
      whiteSpace: 'nowrap',
      background: '#385b95',
      ":hover, :active":{
        background: '#62caec',
      }
    },
}

function FeedbackButton() {
  return (
        <Button sx={style.feedbackButtonAside} variant="contained">Оставить заявку</Button>
  )
}

export default FeedbackButton