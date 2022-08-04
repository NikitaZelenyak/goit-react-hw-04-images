import { Btn } from "./Button.styled"
import PropTypes from 'prop-types';

export const Button = ({loadMore,children}) => {
    return (
        <Btn onClick={loadMore} >{children}</Btn>
    )
}
Button.prototype = {
    loadMore: PropTypes.func,
    children: PropTypes.object,
}