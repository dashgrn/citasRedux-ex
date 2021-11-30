import React from 'react'
import { Button, Card, Icon, TextInput, Textarea } from 'react-materialize'
import { useForm } from '../hooks/useForm'
import uuid from 'react-uuid'
import {AddCitas} from '../actions/citasAction'
import { useDispatch } from 'react-redux'

const AgregarCita = () => {

    const dispatch = useDispatch()

    const [formValue, handleInputChange, reset] = useForm({
        nombre: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })

    const { nombre, fecha, hora, sintomas } = formValue

    const handleSubmit = evt => {
        evt.preventDefault()

        dispatch(AddCitas({
            id: uuid(),
            nombre,
            fecha,
            hora,
            sintomas
        }))

        reset()
    }

    return (
        <Card title="Agregar Citas" >
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <TextInput
                        id="nombre"
                        label="Nombre"
                        name="nombre"
                        value={nombre}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="row">
                    <div className="col s10 l6">
                        <label className="col s10 l6">Fecha</label>
                        <input type="date" id="fecha" name="fecha"
                            value={fecha}
                            onChange={handleInputChange} />
                    </div>
                    <div className="col s10 l6">
                        <label className="col s10 l6">Hora</label>
                        <input type="time" id="hora" name="hora"
                            value={hora}
                            onChange={handleInputChange} />
                    </div>
                </div>
                <div className="row">
                    <Textarea
                        id="sintomas"
                        label="Sintomas"
                        name="sintomas"
                        value={sintomas}
                        onChange={handleInputChange}
                    />
                </div>
                <Button
                    className="indigo darken-4"
                    type="submit"
                    node="button"
                >
                    Guardar
                    <Icon right>
                        send
                    </Icon>
                </Button>
            </form>
        </Card>
    )
}

export default AgregarCita