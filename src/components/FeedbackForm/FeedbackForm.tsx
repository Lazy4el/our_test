import { Dispatch, SetStateAction, useRef, useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Container,
  TextareaAutosize,
  TextField,
  TextFieldProps,
  Typography,
  Modal,
  Dialog,
  DialogContent,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { feedbackButton } from '../Buttons/FeedbackButtonMatStyle';
import { useForm, Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';

import s from './FeedbackForm.module.css';
import { width } from '@mui/system';

function FeedbackForm({
  isOpen,
  setIsOpen,
  closeIcon = true,
}: {
  isOpen?: boolean;
  setIsOpen?: any;
  closeIcon?: boolean;
}) {
  // function FeedbackForm({ isOpen: boolean, setIsOpen: Dispatch<SetStateAction<boolean>>}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({ mode: 'onBlur' });
  const [isSubmit, setIsSubmit] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const onSubmit = (data: any) => {
    console.log('data', data);
    reset();
    setIsSubmit(() => true);
    setIsOpenModal(() => true);
    setTimeout(() => {
      setIsOpenModal(() => false);
      setIsOpen(() => false);
    }, 2000);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        '& .MuiTextField-root': { mb: 4, width: '100%' },
        textAlign: 'center',
        minHeight: '553px',
      }}
      ref={rootRef}
    >
      <Dialog fullWidth open={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <DialogContent sx={{ overflow: 'hidden' }}>
          <Box sx={{ minHeight: '600px' }}>
            <Alert
              icon={false}
              sx={{
                display: 'flex',
                fleDirection: 'column-reverse',
                alignItems: 'center',
                textAlign: 'center',
                fontSize: '28px',
              }}
              variant="filled"
              severity="success"
            >
              ???????????????????? ???? ??????????????????, ?????????? ???????????????? ?? ????????!
            </Alert>
          </Box>
        </DialogContent>
      </Dialog>
      {closeIcon && (
        <CloseIcon
          onClick={() => setIsOpen(false)}
          sx={{
            marginLeft: '93%',
            ':hover': {
              borderRadius: '50%',
              background: '#dbd7d7',
              cursor: 'pointer',
            },
            ':active': {
              background: '#989898',
            },
          }}
        />
      )}

      <Typography variant="h3" noWrap sx={{ margin: '10px auto 20px auto' }}>
        ???????????????? ????????????
      </Typography>

      <Box component="div" sx={{ margin: 0, padding: 0 }}>
        <TextField
          className={s.textField}
          autoFocus={closeIcon}
          label="?????????????? ???????? ?????? *"
          {...register('name', {
            required: '???????????????????????? ????????',
          })}
          error={!!errors?.name}
          helperText={`${errors?.name ? errors?.name?.message : ''}`}
        />

        <TextField
          className={s.textField}
          label="?????????????? Email *"
          {...register('email', {
            required: '???????????????????????? ????????',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: '???????????????????????? Email',
            },
          })}
          error={!!errors?.email}
          helperText={`${errors?.email ? errors?.email?.message : ''}`}
        />
        <Controller
          name="phone"
          control={control}
          defaultValue=""
          rules={{ required: '???????????????????????? ????????' }}
          render={({ field: { onChange, value }, formState: { errors } }) => (
            <InputMask mask="+7 (999) 999 99 99" value={value} onChange={onChange}>
              {(inputProps: JSX.IntrinsicAttributes & TextFieldProps) => (
                <TextField
                  className={s.textField}
                  error={!!errors.phone?.message}
                  label="?????????????? ?????????? ????????????????"
                  variant="outlined"
                  type="text"
                  fullWidth
                  required
                  helperText={`${errors?.phone ? errors?.phone?.message : ''}`}
                  {...inputProps}
                />
              )}
            </InputMask>
          )}
        />
        <TextField
          id="filled-multiline-flexible"
          label="?????????????? ???????????????? ?????? ????????????"
          multiline
          size="medium"
          rows={6}
          {...register('body')}
        />
        <Button type="submit" variant="contained" sx={feedbackButton.feedbackButtonAside}>
          ??????????????????
        </Button>
      </Box>
    </Box>
  );
}

export default FeedbackForm;
