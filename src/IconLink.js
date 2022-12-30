export default function IconLink({ iconUrl, link }) {
    return (<a className="link" href={ link }><img className="icon" src={ iconUrl } /></a>);
}