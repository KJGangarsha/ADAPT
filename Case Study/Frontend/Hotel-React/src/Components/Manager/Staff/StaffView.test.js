import {render} from '@testing-library/react';
import { AddStaff } from './AddStaff';

import StaffView from './StaffView';
it("checkButtonRender",()=>{
    const {queryByTitle}=render(<StaffView/>)
    const btn= queryByTitle("add")
    expect(btn).toBeTruthy()
})

it("checkButtonRender",()=>{
    const {queryByTitle}=render(<AddStaff/>)
    const btn= queryByTitle("add")
    expect(btn).toBeTruthy()
})

it("checkButtonRender",()=>{
    const {queryByTitle}=render(<AddStaff/>)
    const btn= queryByTitle("cancel")
    expect(btn).toBeTruthy()
})


jest.mock('react-router',()=>({
    withRouter: jest.fn(Comp=>props=><Comp{...props}/>)
}))