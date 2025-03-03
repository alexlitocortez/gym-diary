import React from 'react'
import { Col, Divider, Row } from 'antd'
import AppCard from '../components/AppCard'

const MuscleSections = () => {
    return (
        <>
            <Divider orientation="left" className='text-white'>Horizontal</Divider>
            <Row gutter={[16, 16]} justify="center">
                <Col className="gutter-row" xs={12} sm={8} md={6} lg={6} xl={4}>
                    <div className="p-4 bg-gray-800 text-white text-center rounded-lg"><AppCard title='Back' size='default' hoverable={true} /></div>
                </Col>
                <Col className="gutter-row" xs={12} sm={8} md={6} lg={6} xl={4}>
                    <div className="p-4 bg-gray-800 text-white text-center rounded-lg"><AppCard title='Biceps' size='default' hoverable={true} /></div>
                </Col>
                <Col className="gutter-row" xs={12} sm={8} md={6} lg={6} xl={4}>
                    <div className="p-4 bg-gray-800 text-white text-center rounded-lg"><AppCard title='Chest' size='default' hoverable={true} /></div>
                </Col>
                <Col className="gutter-row" xs={12} sm={8} md={6} lg={6} xl={4}>
                    <div className="p-4 bg-gray-800 text-white text-center rounded-lg"><AppCard title='Triceps' size='default' hoverable={true} /></div>
                </Col>
                <Col className="gutter-row" xs={12} sm={8} md={6} lg={6} xl={4}>
                    <div className="p-4 bg-gray-800 text-white text-center rounded-lg"><AppCard title='Shoulders' size='default' hoverable={true} /></div>
                </Col>
                <Col className="gutter-row" xs={12} sm={8} md={6} lg={6} xl={4}>
                    <div className="p-4 bg-gray-800 text-white text-center rounded-lg"><AppCard title='Legs' size='default' hoverable={true} /></div>
                </Col>
                <Col className="gutter-row" xs={12} sm={8} md={6} lg={6} xl={4}>
                    <div className="p-4 bg-gray-800 text-white text-center rounded-lg"><AppCard title='Abs' size='default' hoverable={true} /></div>
                </Col>
                <Col className="gutter-row" xs={12} sm={8} md={6} lg={6} xl={4}>
                    <div className="p-4 bg-gray-800 text-white text-center rounded-lg"><AppCard title='Neck' size='default' hoverable={true} /></div>
                </Col>
                <Col className="gutter-row" xs={12} sm={8} md={6} lg={6} xl={4}>
                    <div className="p-4 bg-gray-800 text-white text-center rounded-lg"><AppCard title='Forearms' size='default' hoverable={true} /></div>
                </Col>
            </Row>
        </>
    )
}

export default MuscleSections