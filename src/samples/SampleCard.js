export default function SampleCard({ sample, onAction }) {

  const { title, description, payload } = sample;

  return (<a href="#" className="sample--card" onClick={ () => onAction(payload) }>
    <div className="sample--card-header">{ title }</div>
    <div className="sample--card-description">{ description }</div>
  </a>);
}