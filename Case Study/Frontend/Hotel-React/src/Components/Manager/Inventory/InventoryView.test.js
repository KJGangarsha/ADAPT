import {render} from '@testing-library/react';
import AddInventory from './AddInventory';

import InventoryView from './InventoryView';
it("checkButtonRender",()=>{
    const {queryByTitle}=render(<InventoryView/>)
    const btn= queryByTitle("addinv")
    expect(btn).toBeTruthy()
})

it("checkButtonRender",()=>{
    const {queryByTitle}=render(<AddInventory/>)
    const btn= queryByTitle("add")
    expect(btn).toBeTruthy()
})

it("checkButtonRender",()=>{
    const {queryByTitle}=render(<AddInventory/>)
    const btn= queryByTitle("cancel")
    expect(btn).toBeTruthy()
})

jest.mock('react-router',()=>({
    withRouter: jest.fn(Comp=>props=><Comp{...props}/>)
}))