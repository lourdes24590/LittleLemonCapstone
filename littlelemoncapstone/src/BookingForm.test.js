import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';
import React, {useReducer} from 'react';
import Main from './Main';
import {initializeTimes, dispatch, updateTimes} from './Main';

test('Renders the BookingForm date field', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Choose date");
    expect(headingElement).toBeInTheDocument();
})


test('Renders the BookingForm time field', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Choose time");
    expect(headingElement).toBeInTheDocument();
})

test('initializeTimes test', () => {
    const defaultTimes = (['17:00','18:00','19:00','20:00','21:00','22:00']).join('');
    render(<BookingForm availableTimes={initializeTimes()} dispatch={jest.fn()}/>);
    const timeElement = screen.getByLabelText('Choose time');
    expect(timeElement.textContent).not.toBeNull();
})

test('updateTimes test', () => {
    const newTimes = (['17:00','17:30','18:00','18:30','20:00','22:00','22:30']).join('');
    render(<BookingForm availableTimes={initializeTimes()} dispatch={jest.fn()}/>);
    const dateElement = screen.getByLabelText('Choose date');
    fireEvent.change(dateElement, { target: { value: '2023-02-11' } });
    const timeElement = screen.getByLabelText('Choose time');
    expect(timeElement.textContent).toContain(newTimes);
})
