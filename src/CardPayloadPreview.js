import { AdaptiveCard } from 'adaptivecards-react';

export default function CardPayloadPreview({ card }) {

    const hostConfig = { 
        fontFamily: "Segoe UI, Helvetica Neue, sans-serif" 
    };

    return (<AdaptiveCard 
        payload={ card } 
        hostConfig={ hostConfig }
    />);
}