import { useCallback, useRef } from "react";

export const useDebounce = (delay = 300, noteDeleyInFirstTime = true) => {
    const debouncing = useRef<NodeJS.Timeout>();
    //const useFirstTime = useRef(noteDeleyInFirstTime);

    const debounce = useCallback((func: () => void) => {
        if (debouncing.current) {
            clearTimeout(debouncing.current);
        }
        debouncing.current = setTimeout(() => func(), delay);
    }, [delay]);

    /* 
    se eu fizer dessa maneira ele executa duas consultas ao mesmo tempo assim que se entra na página de pessoas
     if (useFirstTime.current){
            useFirstTime.current = false;
            func();
        } else {
            if (debouncing.current) {
                clearTimeout(debouncing.current);
            }
            debouncing.current = setTimeout(() => func(), delay);
        }
    }, [delay]);*/
    
    return { debounce };
};