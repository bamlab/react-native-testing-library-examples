"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Button_1 = require("../../components/Button");
const wording_1 = require("../../utils/wording");
const StyledComponents_1 = require("../../components/StyledComponents");
const routes_1 = require("../../navigation/routes");
const react_native_1 = require("react-native");
exports.About = ({ navigation }) => (react_1.default.createElement(StyledComponents_1.Container, null,
    react_1.default.createElement(StyledComponents_1.Card, null,
        react_1.default.createElement(StyledComponents_1.Title, null, wording_1.wording.aboutTitle),
        react_1.default.createElement(react_native_1.Text, null, "The best way to know more about it is to subscribe ;)"),
        react_1.default.createElement(Button_1.Button, { title: wording_1.wording.subscribe, onPress: () => navigation.navigate(routes_1.Routes.Home) }))));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL21hdHRoaWV1L3Byb2plY3RzL1Rlc3RFeGFtcGxlcy9zcmMvcGFnZXMvQWJvdXQvQWJvdXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0RBQWlEO0FBQ2pELG9EQUFpRDtBQUNqRCxpREFBOEM7QUFDOUMsd0VBQWtGO0FBRWxGLG9EQUFpRDtBQUNqRCwrQ0FBb0M7QUFFdkIsUUFBQSxLQUFLLEdBQTZDLENBQUMsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FDakYsOEJBQUMsNEJBQVM7SUFDUiw4QkFBQyx1QkFBSTtRQUNILDhCQUFDLHdCQUFLLFFBQUUsaUJBQU8sQ0FBQyxVQUFVLENBQVM7UUFDbkMsOEJBQUMsbUJBQUksZ0VBQTZEO1FBQ2xFLDhCQUFDLGVBQU0sSUFBQyxLQUFLLEVBQUUsaUJBQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsZUFBTSxDQUFDLElBQUksQ0FBQyxHQUFJLENBQ2hGLENBQ0csQ0FDYixDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGlldS9wcm9qZWN0cy9UZXN0RXhhbXBsZXMvc3JjL3BhZ2VzL0Fib3V0L0Fib3V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0J1dHRvbic7XG5pbXBvcnQgeyB3b3JkaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMvd29yZGluZyc7XG5pbXBvcnQgeyBDb250YWluZXIsIENhcmQsIFRpdGxlLCBJbnB1dCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU3R5bGVkQ29tcG9uZW50cyc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uU2NyZWVuUHJvcHMgfSBmcm9tICdyZWFjdC1uYXZpZ2F0aW9uJztcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJy4uLy4uL25hdmlnYXRpb24vcm91dGVzJztcbmltcG9ydCB7IFRleHQgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG5leHBvcnQgY29uc3QgQWJvdXQ6IEZ1bmN0aW9uQ29tcG9uZW50PE5hdmlnYXRpb25TY3JlZW5Qcm9wcz4gPSAoeyBuYXZpZ2F0aW9uIH0pID0+IChcbiAgPENvbnRhaW5lcj5cbiAgICA8Q2FyZD5cbiAgICAgIDxUaXRsZT57d29yZGluZy5hYm91dFRpdGxlfTwvVGl0bGU+XG4gICAgICA8VGV4dD5UaGUgYmVzdCB3YXkgdG8ga25vdyBtb3JlIGFib3V0IGl0IGlzIHRvIHN1YnNjcmliZSA7KTwvVGV4dD5cbiAgICAgIDxCdXR0b24gdGl0bGU9e3dvcmRpbmcuc3Vic2NyaWJlfSBvblByZXNzPXsoKSA9PiBuYXZpZ2F0aW9uLm5hdmlnYXRlKFJvdXRlcy5Ib21lKX0gLz5cbiAgICA8L0NhcmQ+XG4gIDwvQ29udGFpbmVyPlxuKTtcbiJdLCJ2ZXJzaW9uIjozfQ==