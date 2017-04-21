import React from 'react'

import Grid from 'components/templates/grid'
import IconButton from 'components/templates/iconButton'

export default props => (
    <div>
        <Grid cols='12 12 12'>
            <h2 className="text-center">App React</h2>
            <IconButton style="primary" icon="plus" title="Adicionar" />
            <IconButton style="default" icon="search" title="Procurar" />
        </Grid>
    </div>
)