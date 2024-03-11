// 3 - componente
import React, {ReactElement} from "react";

/*estrututa basica de qualquer componente com props
interface Props {
}
function FirstComponent({}: Props): ReactElement {
    return (
       <div>
       </div>
    )
}

export default FirstComponent*/

function FirstComponent(): ReactElement {
    return (
        <div>
            <h1>Meu primeiro componente</h1>
        </div>
    )
}

export default FirstComponent