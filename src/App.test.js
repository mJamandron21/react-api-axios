import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

describe('App render', () =>{
    test('render search input field', () => {
        render (<App />)
        const searchBar = screen.getByTitle('searchField')
        expect(searchBar).toBeInTheDocument()
    })

    test('does search input works', () => {
        render (<App />)
        const input = screen.getByTitle('searchField')
        expect (input.value).toBe('')
        fireEvent.change(input, {
            target: { value: 'VeChain' },
        })
        expect(input.value).toBe('VeChain')
    })
})