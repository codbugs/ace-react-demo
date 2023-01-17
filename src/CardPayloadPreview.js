import hostConfig from './data/hostConfig.json';
import { AdaptiveCard } from 'adaptivecards-react';

export default function CardPayloadPreview({ card }) {

    return (<AdaptiveCard 
        payload={ card } 
        hostConfig={ hostConfig }
    />);
}