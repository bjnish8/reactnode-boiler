import React from 'react'
import './styles.scss'
import {Link} from 'react-router-dom'

const UploadButton = (props) => <Link {...props} className={`link-button ${ props.className }`}> {props.children} </Link>

export default UploadButton