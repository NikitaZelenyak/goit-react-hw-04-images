import { ImageGallery } from "./ImageGallery/ImageGallery";
import { SearchBar } from "./Searchbar/Searchbar";
import { Modal } from "./Modal/Modal";
import { Button } from "./Button/Button";

import { Component } from "react";

import { TailSpin } from  'react-loader-spinner'


  
const axios = require('axios');





export class App  extends Component  {
  state = {
    isLoading:false,
    name: "",
    data: [],
    page: 1,
    isOpen: false,
    largeImageURL: "",
    status:'idle',
  }
  
 
    
  async componentDidUpdate(_, prevState) {

   if (prevState.name !== this.state.name || prevState.page !== this.state.page) {
       const URL =`https://pixabay.com/api/?q=${this.state.name}&page=${this.state.page}&key=28567553-c50dbf8952c0a87639e336527&image_type=photo&orientation=horizontal&per_page=12`

     this.setState({
       isLoading:true,
     })
     try {
       
       const response = await axios.get(URL);
       const data = await response.data.hits
       this.setState(prevState => ({
         data: [...prevState.data, ...data],
         isLoading: false
       }))
     } catch (error) {

    console.error(error);
  }
   }
    
    
  }

  handleSubmit = ({name}) => {

    this.setState({
      page:1,
      name,
      data:[],
    })

  
  }

  loadMore = () => {

    this.setState(({page}) => ({
      page:page += 1,
    
  }))
  }
  
  toggleModal = () => {
    this.setState(({ isOpen }) =>( {
      isOpen: !isOpen,
  
    }))
  }
  getLargeImageURL = (largeImageURL) => {
    this.setState({
      largeImageURL,
    })
  }
  
  render() {
    const { data, isOpen,largeImageURL,isLoading,page } = this.state
console.log(data);
    return (
      <div>
       
        <SearchBar onSubmit={this.handleSubmit}  ></SearchBar>
        <ImageGallery data={data} onClick={this.toggleModal} getLargeImageURL={this.getLargeImageURL} ></ImageGallery>
        {isOpen && <Modal  onClose={this.toggleModal}> <img src={largeImageURL} alt="" /> </Modal>}
        {data.length  > 11 * page  && <Button loadMore={this.loadMore}>{isLoading ? <TailSpin 
          width={35}
          height={35}
          radius="2"
          color="white"
          ariaLabel='three-dots-loading'     
        ></TailSpin> : 'Load More' }</Button>}
        
      </div>


      
   
          

  );
  }
 
};
