import React, { FC, useState } from 'react';
import { Button, Dialog, DialogTitle } from '@mui/material';
import FeedbackForm from '../FeedbackForm/FeedbackForm';
const style = {
  feedbackButtonAside: {
    width: '200px',
    height: '50px',
    borderRadius: '10px',
    fontSize: '14px',
    lineHeight: '21px',
    background: '#385b95',
    whiteSpace: 'nowrap',
    ':hover, :active': {
      background: '#62caec',
    },
  },
};

interface IFormButton {
  customStyle?: object;
  isModal: boolean;
}

const FormButton: FC<IFormButton> = ({ customStyle, isModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (): void => {
    if (isModal) setIsOpen(() => !isOpen);
  };

  return (
    <>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <DialogTitle id="alert-dialog-title">
          <FeedbackForm isOpen={isOpen} setIsOpen={setIsOpen} />
        </DialogTitle>
      </Dialog>
      <Button sx={{ ...style.feedbackButtonAside, ...customStyle }} variant="contained" onClick={handleOpen}>
        Оставить заявку
      </Button>
    </>
  );
};
export default FormButton;
