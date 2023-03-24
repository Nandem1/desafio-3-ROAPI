import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

function MonsterSelected() {
    const { monsterSelected } = useParams()
    const [firstMonsterResponse, setFirstMonsterResponse] = useState([])
    const [monsterInfoAPI, setMonsterInfoAPI] = useState([])
    const [monsterImageAPI, setMonsterImageAPI] = useState([])

    const getMonsterParams = async () => {
        const req = await fetch("https://ragnarokapi.bravan.cloudns.cl/monsters/find/?search=" + monsterSelected)
        const res = await req.json()
        setFirstMonsterResponse(res[0].id)
    }

    const getMonsterInfo = async () => {
        const req = await fetch("https://ragnarokapi.bravan.cloudns.cl/monsters/info/" + firstMonsterResponse)
        const res = await req.json()
        setMonsterInfoAPI(res)
    }

    const getMonsterImage = async () => {
        const req = await fetch("https://ragnarokapi.bravan.cloudns.cl/monsters/image/" + firstMonsterResponse)
        const res = await req.blob()
        setMonsterImageAPI(URL.createObjectURL(res))
    }

    useEffect(() => {
        getMonsterParams()
    }, [])

    useEffect(() => {
        console.log("Primera respuesta: ", firstMonsterResponse)
    }, [firstMonsterResponse])

    useEffect(() => {
        getMonsterInfo()
        getMonsterImage()
        console.log("Obteniendo datos del mob:", monsterInfoAPI)
    }, [firstMonsterResponse])

    return (
        <div>
            <Container>
                <h1 className='text-center mt-3 border bg-light p-3 shadow'>{monsterInfoAPI.name?.en} - Level: {monsterInfoAPI.info?.stats.level}</h1>
                <Row lg={3} md={3} sm={1} xs={1}>
                    <Col lg={{ order: 1 }} md={{ order: 1 }} sm={{ order: 2 }} xs={{ order: 2 }}>
                        <div className='border rounded shadow p-2 fs-5 bg-light my-1'>
                            <h4 className='border-bottom pb-3'>Stats</h4>
                            <p className='border-bottom pb-3'>HP: {monsterInfoAPI.info?.stats.hp}</p>
                            <p className='border-bottom pb-3'>Element: {monsterInfoAPI.info?.stats.element.name} Level {monsterInfoAPI.info?.stats.element.level}</p>
                            <p className='border-bottom pb-3'>Race: {monsterInfoAPI.info?.stats.race}</p>
                            <p className='border-bottom pb-3'>Size: {monsterInfoAPI.info?.stats.size}</p>
                            <p className='border-bottom pb-3'>Attack: {monsterInfoAPI.info?.stats.atk.min} ~ {monsterInfoAPI.info?.stats.atk.max}</p>
                            <p className='border-bottom pb-3'>Base Exp: {monsterInfoAPI.info?.stats.exp.base}</p>
                        </div>
                    </Col>
                    <Col lg={{ order: 2 }} md={{ order: 2 }} sm={{ order: 3 }} xs={{ order: 3 }}>
                        <div className='border rounded shadow p-2 fs-5 bg-light my-1'>
                            <h4 className='border-bottom pb-3'>Item Drops</h4>
                            {monsterInfoAPI.info?.drops.map((item) => {
                                return <p className='border-bottom pb-3 d-flex justify-content-between align-items-center'><span>{item.name}</span><span>{item.rate}%</span></p>
                            })}
                        </div>
                    </Col>
                    <Col lg={{ order: 3 }} md={{ order: 3 }} sm={{ order: 1 }} xs={{ order: 1 }}>
                        <div className='d-flex justify-content-center align-items-center my-1'><img src={monsterImageAPI} /></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MonsterSelected