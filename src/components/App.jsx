import { ImageGallery } from "./ImageGallery/ImageGallery";
import { SearchBar } from "./Searchbar/Searchbar";
import { Modal } from "./Modal/Modal";
import { Button } from "./Button/Button";

import { useState,useEffect } from "react";

import { TailSpin } from  'react-loader-spinner'
import toast, { Toaster } from 'react-hot-toast';




const axios = require('axios');





export const App = () => {
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('')

 


 useEffect(() => {
   if (name==='') {
    return
   }
   
   setIsLoading(true)
 
 const fetchData = async () => {
    const URL = `https://pixabay.com/api/?q=${name}&page=${page}&key=28567553-c50dbf8952c0a87639e336527&image_type=photo&orientation=horizontal&per_page=12`
    try {
       
       const response = await axios.get(URL);
      const item = await response.data.hits
      if (response.data.hits.length === 0) {
        const notify = () => toast(`It is not a valid value ${name}`);
     notify()
   
      }
      setData(prevState => [...prevState, ...item])
      setIsLoading(false);
      
     } catch (error) {

    console.error(error)
  }
   }
   

     fetchData()




   
 }, [name, page])
  
  
  const handleSubmit = ({ name }) => {
    setPage(1);
    setName(name);
    setData([])
  }

 const loadMore = () => {

  setPage(prevState=> prevState+1)
  }
  
 const toggleModal = () => {
   setIsOpen(prevState => !prevState);
  }

 const  getLargeImageURL = (largeImageURL) => {
   setLargeImageURL(largeImageURL);
 }
  
   return (
      <div>
       
        <SearchBar onSubmit={handleSubmit}  ></SearchBar>
        <ImageGallery data={data} onClick={toggleModal} getLargeImageURL={getLargeImageURL} ></ImageGallery>
        {isOpen && <Modal  onClose={toggleModal}> <img src={largeImageURL} alt="" /> </Modal>}
        {data.length  > 11 * page  && <Button loadMore={loadMore}>{isLoading ? <TailSpin 
          width={35}
          height={35}
          radius="2"
          color="white"
          ariaLabel='three-dots-loading'     
        ></TailSpin> : 'Load More' }</Button>}
        

  <Toaster  toastOptions={{
    className: '',
    style: {
      border: '1px solid #713200',
      padding: '16px',
      color: '#efeae6',
      backgroundColor: '#b20909',
    },
       }}
        containerStyle={{
    top:80,
  }}></Toaster>

      </div>

  );

//   state = {
//     isLoading:false,
//     name: "",
//     data: [],
//     page: 1,
//     isOpen: false,
//     largeImageURL: "",

//   }
  
 
    
//   async componentDidUpdate(_, prevState) {

//    if (prevState.name !== this.state.name || prevState.page !== this.state.page) {
      //  const URL =`https://pixabay.com/api/?q=${this.state.name}&page=${this.state.page}&key=28567553-c50dbf8952c0a87639e336527&image_type=photo&orientation=horizontal&per_page=12`

//      this.setState({
//        isLoading:true,
//      })
  //    try {
       
  //      const response = await axios.get(URL);
  //      const data = await response.data.hits
  //      this.setState(prevState => ({
  //        data: [...prevState.data, ...data],
  //        isLoading: false
  //      }))
  //    } catch (error) {

  //   console.error(error);
  // }
  //  }
    
    
//   }

  // handleSubmit = ({name}) => {

  //   this.setState({
  //     page:1,
  //     name,
  //     data:[],
  //   })

  
//   }

  // loadMore = () => {

  //   this.setState(({page}) => ({
  //     page:page += 1,
    
  // }))
  // }
  
  // toggleModal = () => {
  //   this.setState(({ isOpen }) =>( {
  //     isOpen: !isOpen,
  
  //   }))
  // }
  // getLargeImageURL = (largeImageURL) => {
  //   this.setState({
  //     largeImageURL,
  //   })
  // }
  
//   render() {
//     const { data, isOpen,largeImageURL,isLoading,page } = this.state
// console.log(data);
//     return (
//       <div>
       
//         <SearchBar onSubmit={this.handleSubmit}  ></SearchBar>
//         <ImageGallery data={data} onClick={this.toggleModal} getLargeImageURL={this.getLargeImageURL} ></ImageGallery>
//         {isOpen && <Modal  onClose={this.toggleModal}> <img src={largeImageURL} alt="" /> </Modal>}
//         {data.length  > 11 * page  && <Button loadMore={this.loadMore}>{isLoading ? <TailSpin 
//           width={35}
//           height={35}
//           radius="2"
//           color="white"
//           ariaLabel='three-dots-loading'     
//         ></TailSpin> : 'Load More' }</Button>}
        
//       </div>


      
   
          

//   );
//   }
 
};
