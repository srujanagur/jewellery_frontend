import React from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'

export default function CreateProduct() {
    return (
        <div>
            <InputGroup size="sm" className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-sm">ProductName</InputGroup.Text>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" /><br />
                <InputGroup.Text id="inputGroup-sizing-sm">ProductCode</InputGroup.Text>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" /><br />
                <InputGroup.Text id="inputGroup-sizing-sm">Category</InputGroup.Text>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" /><br />
                <InputGroup.Text id="inputGroup-sizing-sm">Description</InputGroup.Text>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" /><br />
                <InputGroup.Text id="inputGroup-sizing-sm">Price</InputGroup.Text>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" /><br />
                <InputGroup.Text id="inputGroup-sizing-sm">colour</InputGroup.Text>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" /><br />
                <InputGroup.Text id="inputGroup-sizing-sm">isAvailable</InputGroup.Text>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
        </div>
    )
}
