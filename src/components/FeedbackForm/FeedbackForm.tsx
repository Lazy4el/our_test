import { useState } from 'react'
import { Alert, Box, Button, Container, TextareaAutosize, TextField, Typography } from '@mui/material'
import { feedbackButton } from '../Buttons/FeedbackButtonMatStyle'
import {useForm} from 'react-hook-form'
import s from './FeedbackForm.module.css'



function FeedbackForm() {
  const {register, handleSubmit, formState:{errors}, reset} = useForm({mode:'onBlur'})
  const [isSubmit, setIsSubmit] = useState(false)


  const onSubmit = (data: any) => {
    console.log('data', data)
    reset()
    setIsSubmit(()=> true)
  }
  
  return (
      <Box 
      component='form' 
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        '& .MuiTextField-root': { mb: 4 , width: '100%' },
        textAlign: 'center',
        minHeight:'553px',
      }}
      >
     
        <Typography 
        variant='h3'
        noWrap
        sx={{margin:'10px auto 20px auto'}}
        >
          Оставить заявку
        </Typography>
        {isSubmit && <Alert sx={{mb:3}} variant="filled" severity="success">
          Благодарим за обращение, скоро свяжемся с вами! 
          </Alert>}
   <Box component='div' sx={{margin:0, padding:0}}>
      
    
        <TextField
        className={s.textField}
        autoFocus
        label='Введите ваше имя *'
        {...register('name', {
          required:'Обязательное поле'
        })}
        error={!!errors?.name}
        helperText={`${errors?.name ? errors?.name?.message : ''}`}
        />

        <TextField
        className={s.textField}
        label='Введите Email *'
        {...register('email', {
          required:'Обязательное поле',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Некорректный Email'
          }
        })}
        error={!!errors?.email}
        helperText={`${errors?.email ? errors?.email?.message : ''}` }
        />
        <TextField
        className={s.textField}
        label='Введите номер телефона *'
        defaultValue='+7'
        {...register('phone', {
          required:'Обязательное поле',
          pattern: {
            value: /(\+7|8)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/g,
            message: 'Некорректный номер телефона'
          }
        })}
        error={!!errors?.phone}
        helperText={`${errors?.phone ? errors?.phone?.message : ''}` }
        />
        <TextField
          id="filled-multiline-flexible"
          label="Опишите подробно ваш вопрос"
          multiline
          size='medium'
          rows={6}
          {...register('body')}
        />
        <Button
        type='submit' variant='contained' 
        sx={feedbackButton.feedbackButtonAside}
        >
          Отправить
        </Button>
        </Box>

      </Box>

  )
}

export default FeedbackForm