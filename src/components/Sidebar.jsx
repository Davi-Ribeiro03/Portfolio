import React from 'react'
import Avatar from '../img/foto.jpg'
import "../styles/components/sidebar.sass"
import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'

const Sidebar = () => {
  return (
    <aside id='sidebar'>
      <img src={Avatar} alt="Davi Ribeiro" />
      <p className='title'>Desenvolvedor</p>
      <SocialNetworks/>
      <InformationContainer/>
      <a href="" className='btn'> Download currículo</a>
    </aside>
  )
}

export default Sidebar