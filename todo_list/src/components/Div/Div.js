function DivCustom({children, className, id, role, style, onDoubleClick}){
    
    return <div className={className} id={id} role={role} style={style} onDoubleClick={onDoubleClick}>{children}</div>
}

export default DivCustom;