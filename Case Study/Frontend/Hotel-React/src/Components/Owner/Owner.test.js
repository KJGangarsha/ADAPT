import {render} from '@testing-library/react';
import AddManager from './AddManager';
import { OwnerView } from './OwnerView';

it("checkButtonRender",()=>{
    const {queryByTitle}=render(<AddManager/>)
    const btn= queryByTitle("add")
    expect(btn).toBeTruthy()
})

it("checkButtonRender",()=>{
    const {queryByTitle}=render(<OwnerView/>)
    const btn= queryByTitle("add")
    expect(btn).toBeTruthy()
})

it("checkButtonRender",()=>{
    const {queryByTitle}=render(<OwnerView/>)
    const btn= queryByTitle("user")
    expect(btn).toBeTruthy()
})

it("checkButtonRender",()=>{
    const {queryByTitle}=render(<AddManager/>)
    const btn= queryByTitle("cancel")
    expect(btn).toBeTruthy()
})

jest.mock('react-router',()=>({
    withRouter: jest.fn(Comp=>props=><Comp{...props}/>)
}))