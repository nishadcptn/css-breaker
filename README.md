
# style-breaker
`1.0.0`

This package is used to generate styles for spific break points. it will only work under 
`styled-components` 

# Usage

import statement

`import converter from 'style-breaker';`

usage 

`@media screen and (max-height: 1079px) {
    h3 ${converter({
        'font-size': '45px'
    },'950px','1080px')}
}`

inside your media query with your element

like 


`
.container ${converter({
        'font-size': '45px'
    },'950px','1080px')}
`

arguments

`
selector ${converter({
        'atribute': 'value'
    },'break-point','base')}
`
# Note :-
Becous of the styled component you can only call the functions inside  `${}`
keep in mind that `selector ${converter(arguments)}`