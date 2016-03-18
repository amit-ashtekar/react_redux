/**
 * Created by amita on 3/18/2016.
 */
import React, { PropTypes } from 'react'

export default class ItemList extends React.Component {
    render() {
        return (
            <div>
            <div>{this.props.children}</div>
            </div>
                )
            }
       }

ItemList.propTypes = {
    children: PropTypes.node
}