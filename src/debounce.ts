
export  const debounce = (cb: Function, delay: number) =>{
    let timer: ReturnType<typeof setTimeout>;
    return function (this: any, ...args: any){
        clearTimeout(timer);
        timer = setTimeout(() => cb.apply(this, args), delay);
    }
}

