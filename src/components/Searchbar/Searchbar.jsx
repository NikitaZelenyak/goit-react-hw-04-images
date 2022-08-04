 import { Formik, } from 'formik';
import { HeaderBar,Forma,Btn,NameBtn,Input } from './Searchbar.styled';

export const SearchBar = ({onSubmit}) => {
    const getName = (values, action) => {
        onSubmit(values);
        action.resetForm();
}
  return (

        <HeaderBar >
        
            <Formik initialValues={{ name: '', }}
             onSubmit={getName}
            >
<Forma >
    <Btn type="submit" >
      <NameBtn >Search</NameBtn>
    </Btn>

    <Input
     
          type="text"
          name="name"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </Forma>
            </Formik>
  
</HeaderBar>

    
     )
 }