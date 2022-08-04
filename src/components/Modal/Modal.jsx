
import  { useEffect } from "react"

import { Overlay,ModalBox } from "./Modal.styled"

export const Modal =({onClose,children})=> {
   
 
    

    
    useEffect(() => {

        const  handleKeydown = e => {

        if (e.code === 'Escape') {
            onClose();

        }
    }

        window.addEventListener('keydown', handleKeydown);
        return () => {
            
            window.removeEventListener('keydown', handleKeydown)

        }
        
    }, [])


 const handlerBackdropClose = (e)=> {
        if (e.currentTarget === e.target) {
            onClose();
        }
}


  
    



    
     return (<Overlay onClick={handlerBackdropClose}>
  
         <ModalBox  >
             {children}
              
        </ModalBox>
    </Overlay>
    )
    


                
}

