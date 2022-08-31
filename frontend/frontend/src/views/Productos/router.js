import Productos from './Productos.vue'
import NuevoProducto from './NuevoProducto.vue'
import EditarProducto from './EditarProducto.vue'

export default [
    
    { path:'/productos', name:'Productos', component:Productos },
    { path:'/nuevo-producto', name:'NuevoProducto', component:NuevoProducto },
    { path:'/actualiza-producto', name:'EditarProducto', component:EditarProducto, props:true}
]