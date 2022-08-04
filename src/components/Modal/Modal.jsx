
import React, { Component } from "react"

import { Overlay,ModalBox } from "./Modal.styled"

export class Modal extends Component {
   

    componentDidMount() {
          window.addEventListener('keydown' , this.handleKeydown)
    }
    
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeydown)

    }

    handleKeydown = e => {

        if (e.code === 'Escape') {
            this.props.onClose();

        }
    }
    
    handleBackdropClose = (e) => {
        if (e.currentTarget === e.target) {
             this.props.onClose();
        }
       
  
}


    render() {

    
     return (<Overlay onClick={this.handleBackdropClose}>
  
         <ModalBox  >
             {this.props.children}
              
        </ModalBox>
    </Overlay>
    )
    }


                
}

