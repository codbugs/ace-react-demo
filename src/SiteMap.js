import data from './data/map.json';
import Link from './components/Link';
import SafeText from './components/SafeText';

export default function SiteMap() {

    return (<div className="sitemap">
        {
            data.map((group, index) => (
                <div className="sitemap--group">
                    <ul className="sitemap--list">
                        { group.title && <li key={ index } className="sitemap--list-header">{ group.title }</li> }
                        {
                            group.items.map((item, item_index) => {
                                if(item.type === 'link') {
                                    return (<li key={ item_index } className="sitemap--list-item">
                                        <Link url={ item.url }>{ item.text }</Link>
                                    </li>);
                                }

                                if(item.type === 'text') {
                                    return (<li key={ index} className="sitemap--list-item">
                                        <SafeText text={ item.text } />
                                    </li>);
                                }
                            }) 
                        }
                    </ul>
                </div>)
            )
        }  
    </div>);
}