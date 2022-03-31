export function escapar(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
){
    const metodoOriginal = descriptor.value;
    descriptor.value = function(...args: any[]){
        let retorno = metodoOriginal.apply(this, args);
        if (retorno.typeof === 'string'){
            retorno.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        return retorno;
    }
    return descriptor;
}