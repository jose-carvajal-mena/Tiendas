export const utils = {

    methods:{
        messajeError(error){
            this.$notify({
                group: 'info',
                title: 'Important message',
                text: error
              });
        }
    }
    
}