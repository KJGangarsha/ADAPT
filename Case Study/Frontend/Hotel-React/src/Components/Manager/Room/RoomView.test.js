import {render} from '@testing-library/react';
import AddRoom from './AddRoom';

import RoomView from './RoomView';
it("checkButtonRender",()=>{
    const {queryByTitle}=render(<RoomView/>)
    const btn= queryByTitle("add")
    expect(btn).toBeTruthy()
})

it("checkButtonRender",()=>{
    const {queryByTitle}=render(<AddRoom/>)
    const btn= queryByTitle("add")
    expect(btn).toBeTruthy()
})

it("checkButtonRender",()=>{
    const {queryByTitle}=render(<AddRoom/>)
    const btn= queryByTitle("cancel")
    expect(btn).toBeTruthy()
})


jest.mock('react-router',()=>({
    withRouter: jest.fn(Comp=>props=><Comp{...props}/>)
}))