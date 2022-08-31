import Tiendas from './Tiendas.vue'
import NuevaTienda from './NuevaTienda.vue'
import EditarTienda from './EditarTienda.vue'

export default [
    
    { path:'/tiendas', name:'Tiendas', component:Tiendas },
    { path:'/nueva-tienda', name:'NuevaTienda', component:NuevaTienda },
    { path:'/actualiza-tienda', name:'EditarTienda', component:EditarTienda, props:true}
]