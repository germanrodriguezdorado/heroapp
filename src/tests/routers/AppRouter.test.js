import { shallow, mount } from "enzyme";
import { AuthContext } from "../../auth/AuthContext";
import { AppRouter } from "../../routers/AppRouter";



describe('Pruebas en componente AppRuter', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user:{
            logged: false
        }
    };
   
    test('Debe de mostrar el login si no estoy authentincado', () => {
        
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter/>
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe de mostrar el componente Marvel si está autenticado', () => {

        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: true
            }
        };

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect(wrapper.find(".navbar").exists()).toBe(true);

        
    });


});
