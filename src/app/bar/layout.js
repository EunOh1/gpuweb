import '../globals.css'

export default function MovingBarLayout({ children }) {
    return (
        <div style={{height : '100%', minHeight: "100vh", overflowY:"auto"}}>
            {children}
        </div>
    )
}