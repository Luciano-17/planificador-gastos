import { PropsWithChildren } from "react"

const ErrorMessage = ({children} : PropsWithChildren) => {
    return (
        <p className="bg-red-200 p-2 text-red-800 border-l-8 border-red-800 font-bold text-sm text-center">
            {children}
        </p>
    )
}

export default ErrorMessage