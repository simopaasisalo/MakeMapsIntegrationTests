import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { MakeMaps } from 'makeMaps';

ReactDOM.render(
    <div>
        <MakeMaps data={[{
            id: 1,
            type: 'geojson',
            content: '{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[27.68,62.999]},"properties":{"category":"love it"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[27.68,62.998]},"properties":{"category":"fine dining"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[27.68,62.997]},"properties":{"category":"harbor?"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[27.68,62.996]},"properties":{"category":"trees"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[27.68,62.995]},"properties":{"category":"road"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[27.68,62.994]},"properties":{"category":"bugs"}}]}',
            columns: null,
            projection: null,
            latName: null,
            lonName: null,
            name: 'Layer2'
        }]}
            viewOptions={{ showMenu: true, showWelcomeScreen: false, showExportOptions: true, allowLayerChanges: true, language: 'en' }}
            mapOptions={null} />
    </div>, document.getElementById('content')
);
