export function logarTempoDeExecucao(emSegundos = false) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            let unidade = 'milisegundos';
            let divisor = 1;
            if (emSegundos) {
                unidade = 'segundos';
                divisor = 1000;
            }
            console.log(`${propertyKey}, tempo de execução: ${(t2 - t1) / divisor} ${unidade}`);
            return retorno;
        };
        return descriptor;
    };
}
