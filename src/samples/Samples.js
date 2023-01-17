import samplesData from '../data/samples.json';
import SampleList from './SampleList';

export default function Samples({ onClick }) {

    return ( <div className="sample">
        <div className="sample-header">Examples</div>
        <SampleList sampleList={ samplesData } onSelect={ onClick } />
    </div>);
}