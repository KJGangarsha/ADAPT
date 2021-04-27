import {render} from '@testing-library/react';

import CheckOutView from './CheckOutView';

it("checkButtonRender",()=>{
    const {queryByTitle}=render(<CheckOutView/>)
    const btn= queryByTitle("back")
    expect(btn).toBeTruthy()
})


jest.mock('react-router',()=>({
    withRouter: jest.fn(Comp=>props=><Comp{...props}/>)
}))