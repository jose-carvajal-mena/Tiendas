
import Usuarios from './Usuarios.vue'

import Editar from './Editar.vue'

export default [
    
    { path:'/usuarios', name:'Usuarios', component:Usuarios },
    
    { path:'/editar', name:'Editar', component:Editar, props:true}
]