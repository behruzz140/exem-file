
import { create } from 'zustand' ;
import { toast } from 'react-toastify'; 
import { category ,StoreCategory } from '../../service/category';


const useCategoryStore = create <StoreCategory> ((set)=>({
    isLoader: false,
    data: [],
    totlCount: 0,
    getData : async(data)=>{
        try{
           set({isLoader: true})
           const respons = await category.get(data)
    
           if(respons.status === 200){
               set({data: respons?.data?.categories});
               set({totlCount: respons?.data?.total_count})
           }
           set({isLoader: false})
       }catch(error){
        console.log(error)
       }
       
    },
    postData: async(data)=>{
        try{
           const respons = await category.post(data)
     
           if(respons.status === 201){
               set((state)=>({data:[...state.data, respons?.data]})) 
               return respons?.status
           }
        }catch(error){
            console.log(error)
        }
    },
    deleteData: async(id)=>{
        try{
           const respons = await category.delete(id)

           if(respons.status === 200){
               set((state)=>({data: state.data.filter((el:any)=>el.category_id!== id)})) 
               toast.success("Deleted successfully")
           }
        }catch(error:any){
            console.log(error)
        }
    },
    updateData: async(data)=>{
        try{
        const respons = await category.update(data)
        if(respons?.status ===200){
            set((state)=>({data: state.data.map((el:any)=>el.category_id === data.category_id ? data : el)}))
            return respons?.status
        }
        
        }catch(error:any){
            console.log(error)
        }
    }

}))

export default useCategoryStore