import ErrorBoundary from "../../app/components/ErrorBoundary"

// Usando HOC (Higher Order Component) para criar o Error Boundary em torno de um componente

function withBoundary<T extends object>(
    Component: React.ComponentType<T>,
    componentName?: string
    ) {

    //retorna uma funcao que recebe as props do componente
    return function(props: T) { 
        return <ErrorBoundary component={componentName}>
            <Component {...props}/>
        </ErrorBoundary>
    }
}

export default withBoundary