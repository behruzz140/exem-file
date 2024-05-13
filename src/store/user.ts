
import { create } from "zustand";
import request from "../service/config";
import { toast } from "react-toastify";

const useWorkerstore = create((set) => ({

  data: [],
  getWorkers: async (payload: any) => {
    try {
     
      const response = await request.get(
        `/workers?page=${payload.page}&limit=${payload.limit}`
      );
      if (response.status === 200) {
        set({ data: response?.data?.user });
     
      }
   
    } catch (err) {
      console.log(err);
    }
  },
  deleteWorks: async (payload: string) => {
    try {
      set({ isLoader: true });
      const response = await request.delete(`/category/${payload}`);
      if (response.status === 200) {
        set((state: any) => ({
          data: state.data.filter((x: any) => x.id !== payload),
        }));
        toast.success("Users deleted successfully");
      }

      set({ isLoader: false });
    } catch (e) {
      console.log(e);
      toast.error("Something went wrong", { autoClose: 1000 });
      set({ isLoader: false });
    }
  },
  postWorks: async (payload:any) => {
    try{
        set({isLoader: true})
        const response = await request.post(`/category`, payload)
        if(response.status === 201){
          set((state:any) => ({
            data: [...state.data, response.data]
        }));
        toast.success('Users added successfully')
        set({isLoader: false})
        }
      }catch(err){
        console.log(err)
        toast.error('Something went wrong', {autoClose: 1000})
        set({isLoader: false})
      }  
  },
  updateWorks: async (payload:any) => {
    try{
        set({isLoader: true})
        const response = await request.put(`/category`, payload)
        if(response.status === 200){
          set({data: response?.data?.user})
        }
        toast.success('Users updated successfully')
        set({isLoader: false})
      }catch(err){
        console.log(err)
        toast.error('Something went wrong', {autoClose: 1000})
        set({isLoader: false})
      }
  }
}));


export default useWorkerstore;
