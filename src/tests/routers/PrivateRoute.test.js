import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { PrivateRoute } from "../../routers/PrivateRoute";



describe('Pruebas en el componente PrivateRoute', () => {
   
    test('Debe de mostrar el componente si está autenticado y guardar LocalStorage', () => {
        
        const props = {
            location: {
                pathname: "/marvel"
            }
        };

        Storage.prototype.setItem = jest.fn();

        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={ true }
                    component={ () => <span>Listo!</span> }
                    { ...props }
                />
            </MemoryRouter>
        );

        expect( wrapper.find("span").exists() ).toBe(true);  
        expect( localStorage.setItem ).toHaveBeenCalledWith("lastPath", "/marvel");
    });


    test('Debe de bloquear el componente si no esta autenticado ', () => {

        const props = {
            location: {
                pathname: "/marvel"
            }
        };


        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={false}
                    component={() => <span>Listo!</span>}
                    {...props}
                />
            </MemoryRouter>
        );

        expect(wrapper.find("span").exists()).toBe(false);
        
    });
    
    

});
