export default function CardPayloadEditor({ onPayloadChange }) {

    const onEditorChange = (event) => {
        onPayloadChange(event.target.value);
    };

    return (<div className="editor">
        <header className="editor--header">
            <h1 className="editor--title">JSON</h1>
        </header>
        <div className="editor--body">
            <textarea className="editor--textbox" onChange={ onEditorChange }></textarea>
        </div>
    </div>);
}