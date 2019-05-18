import * as React from 'react';

import LinkRsMock from './LinkRsMock';
import LinkRsUtils from './LinkRsUtils';

export default ({ methodName, dataType }) => (<>
    <p>
        There is no method available in <LinkRsMock /> for <b>{dataType}</b>.
    </p> <p>
        However, you can use <LinkRsUtils />'s <b>{methodName}</b> method for the same shown in below example:
    </p>
</>);