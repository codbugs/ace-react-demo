export default function SafeText({ text }) {
    return (<p className="text" dangerouslySetInnerHTML={{ __html: text }} />);
}