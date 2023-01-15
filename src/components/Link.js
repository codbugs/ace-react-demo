export default function Link({ url, children  }) {
    return (<a className="link" target="_blank" href={ url }>{ children }</a>);
}