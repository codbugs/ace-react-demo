export default function CardPreviewLayout({ children }) {
    return (<div className="preview">
        <header className="preview--header">
            <h1 className="preview--title">Preview</h1>
        </header>
        <div className="preview--body">
            { children }
        </div>
    </div>);
}