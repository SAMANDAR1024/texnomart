import { create } from 'zustand'



const smthStore = ()=>({
        savatcha:[{
          soni: 1,
          sale_price:195845,
          image:'https://minapi.beemarket.uz/prod-media/productImages/1718103801t6ZQkZnGlQem.webp',
          name:'IPhone 16 pro max'
        }],
        currentSort: "Price",
        like:[]
        // Narxi Boyicha
})
const useMyStore  = create(smthStore)

export default useMyStore;
