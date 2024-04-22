export const gridResponsiveClassName = " gap-3 w-full grid grid-cols-[repeat(auto-fit,_minmax(12.2rem,_1fr))] ";

export const GridResponsive = ({ children }) => {
    return (
        <ul className={gridResponsiveClassName}>
            {children}
        </ul>
    )
}