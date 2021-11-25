import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { DashboardRoutes } from "../../routers/DashboardRoutes";



describe('Pruebas en el componente DashboardRoutes', () => {

    const currentContext = {
        despatch: jest.fn,
        user:{
            logged: true,
            name: "Pedro2"
        }
    };
    
    test('Debe de mostrarse correctamente', () => {
       
        const wrapper = mount(
            <AuthContext.Provider value={ currentContext }>
                <MemoryRouter>
                    <DashboardRoutes/>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(".text-info").text().trim()).toBe("Pedro2");
    

    });
    

});
