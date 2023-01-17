import { Fragment } from 'react';

import CardEmptyPayloadPreview from './CardEmptyPayloadPreview';
import CardPayloadPreview from './CardPayloadPreview';
import CardPreviewLayout from './CardPreviewLayout';
import CardWrongPayloadPreview from './CardWrongPayloadPreview';


export default function CardPreview({ payload }) {

    let component = <Fragment />;

    try {
        if(payload === null || payload === '') {
            component = <CardEmptyPayloadPreview />;
        }
        else {
            component = <CardPayloadPreview card={ JSON.parse(payload) } />;
        }
    }
    catch(err) {
        component = <CardWrongPayloadPreview />;
    }

    return <CardPreviewLayout>
        { component }
    </CardPreviewLayout>;
}