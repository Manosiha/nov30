import React from 'react'
import './Ourserviese.css'
import { SafetyCertificateOutlined } from '@ant-design/icons';
import { LaptopOutlined  } from '@ant-design/icons';
import { AuditOutlined  } from '@ant-design/icons';
import { FundOutlined } from '@ant-design/icons';
import { UsergroupAddOutlined } from '@ant-design/icons';

import product1 from '../../Aecss/product1.jpg'
import product2 from '../../Aecss/product2.jpg'


export const Ourserviese = () => {
  return (
    <div style={{background:'#f7f7f7'}}>
        <div className='ourservi_main'> 
            <h1>Our Services</h1>

            <div className='seriviese_contation'>
            <div className='contaion'><SafetyCertificateOutlined className='our_icon' /><h4>Accounting & Finance</h4></div>
            <div className='contaion'><LaptopOutlined className='our_icon' /><h4>Technology & Innovation</h4></div>
            <div className='contaion'><AuditOutlined className='our_icon' /><h4>Digital Marketing & Branding</h4></div>
            <div className='contaion'><FundOutlined className='our_icon' /><h4>Business & Personal Finance</h4></div>
            <div className='contaion'><UsergroupAddOutlined className='our_icon' /><h4>Business Support <br />& Consultancy</h4></div>
            </div>

        </div>

        <div className='product_main'>
          <h1>Our Products</h1>
          <div className='product_contain_main'>
          <div className='product_contaion'>
            <img src={ product1} alt=""/>
            <h3>IYCONNECT</h3>
            <p>IYCONNECT is your go-to practice management software solution for enhancing productivity and streamlining workflows. This powerful platform is designed to connect businesses and individuals, enabling seamless collaboration and Communication.</p>
            <p>Introducing IYCONNECT, revolutionising collaboration and communication by IYKONS with comprehensive features and user-friendly interface.</p>
          </div>

          <div className='product_contaion'>
            <img src={ product2 } alt=""/>
            <h3>IYKONS Fintech</h3>
            <p>At IYKONS, we are at the forefront of this digital transformation, offering a comprehensive suite of fintech solutions to meet the diverse needs of businesses and individuals</p>
            <p>At IYKONS, we are dedicated to driving the fintech revolution and transforming how financial services are delivered.</p>
          </div>
          </div>

        </div>
    </div>
  )
}
