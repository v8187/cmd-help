import * as React from 'react';

import LinkRsMock from './LinkRsMock';
import LinkRsUtils from './LinkRsUtils';

export default ({ methodName, dataType }) => (<>
    <p>
        There is no method available in <LinkRsMock /> for <span className="tag">{dataType}</span>.
    </p> <p>
        However, you can use <LinkRsUtils />'s <span className="tag">{methodName}</span> method for the same shown in below example:
    </p>
</>);