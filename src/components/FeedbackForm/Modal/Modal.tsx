import React, {useState} from 'react'
import Dialog from '@mui/material/Dialog';


function Modal() {

 const [isOpen, setIsOpen] = useState(true)
 
  return (
    <Dialog
    open={isOpen}
    onClose={()=>setIsOpen(()=> !isOpen)}
    >
    </Dialog>
  )
}

export default Modal