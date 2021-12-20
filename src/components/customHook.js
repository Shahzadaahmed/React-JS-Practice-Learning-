// Note: Custom hook in react-js...!

import { useEffect } from 'react';

const useCustomHook = (countValue) => {
    useEffect(() => {
        if (countValue > 0) {
            document.title = `Count value: (${countValue})`;
        }

        else {
            document.title = `Count value:`;
        }
    }, [countValue]);
}

export default useCustomHook;