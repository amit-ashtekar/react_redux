/**
 * Created by amita on 3/21/2016.
 */


import React, { PropTypes } from 'react'

export default class ModalItemList extends React.Component {
    render() {
        return (
            <div>
            <div>{this.props.children}</div>
            </div>
            )
            }
            }

ModalItemList.propTypes = {
    children: PropTypes.node
}

