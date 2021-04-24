import React from "react";


export const TestProvider = React.createContext(null);

function TestProviderComponent({children}) {
    

    return(
        <TestProvider.Provider value={1}>
            {children}
        </TestProvider.Provider>
    )
}

export default TestProviderComponent;