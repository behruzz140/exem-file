
import { create } from 'zustand' ;
import { toast } from 'react-toastify'; 
import { worker ,StoreWorker } from '../../service/worker';


const useWorkerStore = create <StoreWorker> ((set)=>({
    isLoader: false,
    data: [],
    totlCount: 0,
    getData : async(data)=>{
        try{
           set({isLoader: true})
           const respons = await worker.get(data)
     
           if(respons.status === 200){
               set({data: respons?.data?.user});
               set({totlCount: respons?.data?.totcal_count})
           }
           set({isLoader: false})
       }catch(error:any){
        console.log(error)
        toast.error("Error : " + error?.message);
       }
       
    },
    postData: async(data)=>{
        try{
           const respons = await worker.post(data)
           console.log(respons)
           if(respons.status === 201){
               set((state)=>({data:[...state.data, {...data, id: respons?.data?.user_id}]})) 
               toast.success("success full")
               return respons?.status
           }
        }catch(error:any){
            console.log(error)
            toast.error("Error : " + error?.message);
        }
    },
    deleteData: async(id)=>{
        try{
           const respons = await worker.delete(id)
      
           if(respons.status === 200){
               set((state)=>({data: state.data.filter((el:any)=>el.id !== id)})) 
               toast.success("Deleted successfully")
           }
        }catch(error:any){
            console.log(error)
            toast.error("Error : " + error?.message);
        }
    },
    updateData: async(data)=>{
        try{
        const respons = await worker.update(data)
        if(respons?.status ===200){
            set((state)=>({data: state.data.map((el:any)=>el.id === data.id ? data : el)}))
            toast.success("updated successfully")
            return respons?.status
        }
        
        }catch(error:any){
            console.log(error)
            toast.error("Error : " + error?.message);
        }
    }

}))

export default useWorkerStore