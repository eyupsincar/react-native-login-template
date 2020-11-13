import {TouchableOpacity} from "react-native";
import styled from 'styled-components'
import {compose,
   color,
    size,
     space,
      flexbox,
       layout,
        borderRadius,
         position,
       } from 'styled-system'

const Button = styled(TouchableOpacity)(
    compose(
        color,
        flexbox,
        space,
        size,
        layout,
        borderRadius,
        position,
    ),
);

Button.defaultProps = {
    flexDirection: 'row',
    backgroundColor: "#e4eaf1",
    alignItems: 'center',
    justifyContent: 'center',
    width: 175,
    height: 45,
    borderRadius: 10,
};

export default Button;
