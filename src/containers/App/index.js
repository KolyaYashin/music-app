import React from 'react'
import Menu from '../../components/Menu'
import SearchView from '../SearchView';
import TableView from '../TableView';
import InfoView from '../InfoView';
import GridView from '../GridView';
export default class App extends React.Component{
    /**
     * page: grid info table search
     */
    state={page:'grid'}
    render(){
        let content
        switch(this.state.page){
            case 'grid':
            content = <GridView />
            break
            case 'info':
            content = <InfoView />
            break
            case 'table':
            content = <TableView />
            break
            case 'search':
            content = <SearchView />
            break
            default: 
            content= <GridView />
            break
        }
        return <div>

            <Menu/>
            {content}
        </div>
        
        
    }
}