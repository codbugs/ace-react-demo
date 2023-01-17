import SampleCard from './SampleCard';

export default function SampleList({ sampleList, onSelect }) {
    return (<ul className="sample--list">
        { 
            sampleList.map((item, index) => {
                return (<li key={ index } className="sample--item">
                    <SampleCard sample={ item } onAction={ onSelect } /> 
                </li>);
            }) 
        }
    </ul>);
}